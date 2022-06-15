import { useForm } from "react-hook-form";
import { useState } from "react";
import Skeleton from "../assets/skeleton.svg";
import ReactFileReader from "react-file-reader";
import { ImSpinner2 } from "react-icons/im";
import { useCreateProjectMutation } from "../services/projectApi";
import toast from "react-hot-toast";

export default function Explore() {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFiles = (files) => {
    setImage(files.base64);
  };

  const [createProject] = useCreateProjectMutation();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = createProject({ ...data, image: image });
      setIsLoading(false);
      toast(response.message);
      // window.location.reload();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="bg-secondaryAlt">
      <section className="w-[90%] mx-auto pt-10">
        <h1 className="text-slate-600 text-xl font-bold uppercase">
          Create new project
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="projectGrid">
          <section className="text-slate-800 space-y-4 py-10 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Company/Team name
                </p>
                <input
                  {...register("company_teamName", { required: true })}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
                {errors.company_teamName && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Project Title
                </p>
                <input
                  {...register("title", { required: true })}
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
                  {...register("url", { required: true })}
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
                  {...register("moreDetails", { required: true })}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
                {errors.moreDetails && (
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
                  {...register("description", { required: true })}
                  cols="30"
                  rows="6"
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 resize-none"
                />
                {errors.description && (
                  <p className="text-rose-600">This feild is required</p>
                )}
              </div>
            </div>
            <button className="hidden space-x-3  md:flex items-center justify-center cursor-pointer bg-secondary text-white py-3 px-14 rounded text-base mx-auto capitalize">
              <span>Create Project</span>
              {isLoading && <ImSpinner2 className="text-white animate-spin " />}
            </button>
          </section>

          <section>
            <div className="relative max-w-[15rem] bg-white rounded-lg shadow-sm p-3">
              <div className="relative overflow-clip rounded-lg h-40 w-full flex items-center justify-center">
                <img
                  src={image || Skeleton}
                  alt={image || Skeleton}
                  className="h-full w-full object-cover"
                />
              </div>

              <ReactFileReader
                fileTypes={[".png", ".jpg"]}
                base64={true}
                handleFiles={handleFiles}
              >
                <button className="mt-4 border border-secondary hover:bg-secondary hover:bg-opacity-10 rounded text-base py-2 px-2 w-full text-secondary block text-center cursor-pointer">
                  Upload Image
                </button>
              </ReactFileReader>
            </div>
          </section>
          <button className="flex items-center justify-center space-x-3  md:hidden cursor-pointer bg-secondary text-white py-3 px-14 rounded text-base mx-auto capitalize my-14">
            <span>Create Project</span>
            {isLoading && <ImSpinner2 className="text-white animate-spin" />}
          </button>
        </form>
      </section>
    </div>
  );
}
