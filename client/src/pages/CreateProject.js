import { useForm } from "react-hook-form";

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
      <section>
        <div>
          <h1 className="text-slate-600 text-xl font-bold uppercase">
            Create new project
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-slate-800 space-y-4"
          >
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
            <button className="cursor-pointer bg-secondary text-white py-3 px-14 rounded text-base block mx-auto capitalize">
              Create Project
            </button>
          </form>
        </div>
        <div></div>
      </section>
    </div>
  );
}
