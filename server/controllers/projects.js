import express from "express";
import mongoose from "mongoose";

import ProjectModel from "../models/projectModel.js";

const router = express.Router();

export const getProjects = async (req, res) => {
  const { page } = req.query;

  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await ProjectModel.countDocuments({});
    const projects = await ProjectModel.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.json({
      projects,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProjectsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;

  try {
    const title = new RegExp(searchQuery, "i");

    const projects = await ProjectModel.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: projects });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProjectsByCreator = async (req, res) => {
  const { name } = req.query;

  try {
    const projects = await ProjectModel.find({ name });

    res.json({ data: projects });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await ProjectModel.findById(id);

    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  const project = req.body;

  const newProject = new ProjectModel({
    ...project,
    author: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newProject.save();

    res.status(201).json({ newProject, message: "✅ Project Created" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// export const updatePost = async (req, res) => {
//   const { id } = req.params;
//   const { title, message, creator, selectedFile, tags } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

//   await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

//   res.json(updatedPost);
// };

// export const deletePost = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   await PostMessage.findByIdAndRemove(id);

//   res.json({ message: "Post deleted successfully." });
// };

// export const likePost = async (req, res) => {
//   const { id } = req.params;

//   if (!req.userId) {
//     return res.json({ message: "Unauthenticated" });
//   }

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   const post = await PostMessage.findById(id);

//   const index = post.likes.findIndex((id) => id === String(req.userId));

//   if (index === -1) {
//     post.likes.push(req.userId);
//   } else {
//     post.likes = post.likes.filter((id) => id !== String(req.userId));
//   }

//   const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
//     new: true,
//   });

//   res.status(200).json(updatedPost);
// };

// export const commentPost = async (req, res) => {
//   const { id } = req.params;
//   const { value } = req.body;

//   const post = await PostMessage.findById(id);

//   post.comments.push(value);

//   const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
//     new: true,
//   });

//   res.json(updatedPost);
// };

export default router;
