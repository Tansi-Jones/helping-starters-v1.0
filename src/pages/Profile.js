import { useForm } from "react-hook-form";
import { IoMdHeart } from "react-icons/io";

export default function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-secondaryAlt">
      {/* <h1 className="text-slate-600 text-xl font-bold uppercase">Profile</h1> */}
      <main className="w-[90%] mx-auto pt-10 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <section>
          <div className="relative max-w-[15rem] bg-white rounded-lg shadow-sm p-3">
            <div className="relative overflow-auto h-40 rounded-lg">
              <img
                src="/assets/explore.png"
                alt="avatar"
                objectFit="cover"
                className=" object-cover"
              />
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

        {/* User details */}
        <section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-slate-800 space-y-4"
          >
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">Creator Handle</p>
              <input
                defaultValue="Kingjohn01"
                {...register("handle")}
                disabled
                className="outline-none bg-slate-300 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">Full Name</p>
              <input
                defaultValue="John Mark"
                {...register("name")}
                disabled
                className="outline-none bg-slate-300 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">E-Mail</p>
              <input
                defaultValue="johnmark@gmail.com"
                {...register("email")}
                disabled
                className="outline-none bg-slate-300 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>

            <div className="flex justify-between items-center gap-8">
              <button
                type="submit"
                className="bg-secondary rounded text-base py-2 px-2 w-full text-white"
              >
                Save changes
              </button>
              <button
                type="button"
                className="border border-secondary rounded text-base py-2 px-2 w-full text-secondary"
              >
                Update password
              </button>
            </div>
          </form>
        </section>
        {/*  */}
        <section></section>
      </main>
    </div>
  );
}
