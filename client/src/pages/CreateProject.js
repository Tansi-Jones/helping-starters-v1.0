import { useForm } from "react-hook-form";
import Skeleton from "../assets/skeleton.svg";

export default function Explore() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

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
                  {...register("name")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Project Title
                </p>
                <input
                  {...register("title")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
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
              </div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Somthing else
                </p>
                <input
                  {...register("more")}
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 "
                />
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <p className="text-slate-500 text-base md:text-lg ">
                  Project discription
                </p>
                <textarea
                  {...register("url")}
                  cols="30"
                  rows="6"
                  className="outline-none bg-slate-200 rounded-lg text-base py-2 px-4 w-full text-slate-600 resize-none"
                />
              </div>
            </div>
            <button className="hidden md:block cursor-pointer bg-secondary text-white py-3 px-14 rounded text-base mx-auto capitalize">
              Create Project
            </button>
          </section>

          <section>
            <div className="relative max-w-[15rem] bg-white rounded-lg shadow-sm p-3">
              <div className="relative overflow-clip h-40 rounded-lg">
                <img src={Skeleton} alt="avatar" className=" object-cover" />
              </div>
              <div className=" pt-5 pb-1">
                <button
                  type="button"
                  className="border border-secondary rounded text-base py-2 px-2 w-full text-secondary"
                >
                  Upload Avatar
                </button>
              </div>
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
