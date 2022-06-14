import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdHeart } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "../assets/avatar.svg";
import {
  selectCurrentUser,
  selectCurrentEmail,
} from "../features/auth/authSlice";

export default function Profile() {
  const [handle, setHandle] = useState();
  const user = useSelector(selectCurrentUser);
  const email = useSelector(selectCurrentEmail);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    slitUserName(user);
  });

  // slit user name
  const slitUserName = (name) => {
    const user = name.split(" ");
    return setHandle(user[0]);
  };

  return (
    <div className="bg-secondaryAlt">
      {/* <h1 className="text-slate-600 text-xl font-bold uppercase">Profile</h1> */}
      <main className="w-[90%] mx-auto pt-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
        <section>
          <div className="relative max-w-[15rem] bg-white rounded-lg shadow-sm p-3">
            <div className="relative overflow-clip h-40 rounded-lg w-40 mx-auto">
              <img src={Avatar} alt="avatar" />
            </div>
            <div className=" pt-5 pb-1">
              <label
                htmlFor="upload"
                className="border border-secondary rounded text-base py-2 px-2 w-full text-secondary block text-center cursor-pointer"
              >
                Upload Avatar
              </label>
              <input type="file" id="upload" className="hidden" />
            </div>
          </div>
        </section>

        {/* User details */}
        <section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-slate-800 space-y-5"
          >
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">Creator Handle</p>
              <input
                {...register("handle")}
                value={`@${handle}`}
                disabled
                className="lowercase outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">Full Name</p>
              <input
                {...register("name")}
                value={user}
                disabled
                className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">E-Mail</p>
              <input
                {...register("email")}
                value={email}
                disabled
                className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled
                className="bg-secondary rounded text-base py-2 px-2 w-full text-white cursor-not-allowed"
              >
                Save changes
              </button>
            </div>
          </form>
        </section>
        {/*  */}
        <section className="justify-self-start lg:justify-self-end w-72">
          <p className="text-slate-500 text-base pb-4">Your data</p>
          <Link to="/liked">
            <div className="bg-white rounded-xl flex space-x-5 items-center py-3 px-4">
              <IoMdHeart className="bg-rose-500 text-rose-500 text-5xl p-3 rounded-xl bg-opacity-30" />
              <div>
                <h1 className="text-secondary font-semibold text-2xl">{0}</h1>
                <p className="text-slate-500 text-sm">Projects you like</p>
              </div>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}
