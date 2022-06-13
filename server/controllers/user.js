import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      status: "Success",
      message: "✅ Signed In Success",
      data: existingUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "❌ SignIn Failed",
      data: error,
    });
  }
};

export const signUp = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = User.create({
      email,
      password: hashedPassword,
      name: `${name} `,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      status: "Success",
      message: "✅ Account created",
      data: existingUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: "Failed",
      message: "❌ Account creation Failed",
      data: error,
    });
  }
};
