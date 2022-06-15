import { useForm } from "react-hook-form";
import { useState } from "react";
import Skeleton from "../assets/skeleton.svg";
import FileBase from "react-file-base64";

export default function Explore() {
  const [image, setImage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="bg-secondaryAlt">
      <section className="w-[90%] mx-auto pt-10">
        <h1 className="text-slate-600 text-xl font-bold uppercase">
          Create new project
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="projectGrid"
          enctype="multipart/form-data"
        >
          <section className="text-slate-800 space-y-4 py-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Company/Team name
                </p>
                <input
                  {...register("name")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
                {errors.name && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Project Title
                </p>
                <input
                  {...register("title")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
                {errors.title && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Url/Website
                </p>
                <input
                  {...register("url")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
                {errors.url && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Somthing else
                </p>
                <input
                  {...register("more")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
                {errors.more && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Project discription
                </p>
                <textarea
                  {...register("description")}
                  cols="30"
                  rows="6"
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 resize-none"
                />
                {errors.description && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
            </div>
            <button className="hidden md:block cursor-pointer bg-secondary text-white py-3 px-14 rounded text-base mx-auto capitalize">
              Create Project
            </button>
          </section>

          <section>
            <div className="relative max-w-[15rem] bg-white rounded-lg shadow-sm p-3">
              <div className="relative overflow-clip rounded-lg h-full w-full flex items-center justify-center">
                <img
                  src={image || Skeleton}
                  alt={image || Skeleton}
                  className="h-40 object-cover"
                />
              </div>
              {/* <div className=" pt-5 pb-1">
                <label
                  htmlFor="upload"
                  className="border border-secondary rounded text-base py-2 px-2 w-full text-secondary block text-center cursor-pointer"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="upload"
                  className="hidden"
                  onChange={(e) => {
                    const imgUrl = URL.createObjectURL(e.target.files[0]);
                    setImage(imgUrl);
                  }}
                />
              </div> */}
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setImage(base64)}
              />
            </div>
          </section>
          <button className="block md:hidden cursor-pointer bg-secondary text-white py-3 px-14 rounded text-base mx-auto capitalize my-14">
            Create Project
          </button>
        </form>
      </section>
    </div>
  );
}
