import { useForm } from "react-hook-form";
import { IoMdHeart } from "react-icons/io";
import Explore from "../assets/explore.png";
import Avatar from "../assets/avatar.svg";

export default function Profile() {
  const {
    register,
    handleSubmit,
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
                defaultValue="Kingjohn01"
                {...register("handle")}
                disabled
                className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">Full Name</p>
              <input
                defaultValue="John Mark"
                {...register("name")}
                disabled
                className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm ">E-Mail</p>
              <input
                defaultValue="johnmark@gmail.com"
                {...register("email")}
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
        <section></section>
      </main>
    </div>
  );
}
