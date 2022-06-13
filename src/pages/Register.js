import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};

  return (
    <>
      <main className="bg-[#EAEDF2] py-10">
        <div className="w-full max-w-[25rem] mx-auto p-6 text-left">
          <div className="mt-2">
            <p className="text-lg font-semibold text-gray-800">
              Sign up now, it's free
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full space-y-5 border-1 border-black mt-5"
          >
            <div className="mb-4">
              <input
                {...register("name", { required: true })}
                className="border rounded w-full p-4 text-slate-800 leading-tight outline-none border-slate-600 bg-transparent placeholder:text-slate-800"
                type="text"
                placeholder="Full Name"
              />
              {errors.name && (
                <p className="text-rose-600">Your fullname is required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("email", { required: true })}
                className="border rounded w-full p-4 text-slate-800 leading-tight outline-none border-slate-600 bg-transparent placeholder:text-slate-800"
                type="email"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-rose-600">Your email is required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("password", { required: true })}
                className="border rounded w-full p-4 text-slate-800 leading-tight outline-none border-slate-600 bg-transparent placeholder:text-slate-800"
                type="password"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-rose-600">Your password is required</p>
              )}
            </div>

            <button className="w-full cursor-pointer bg-secondary text-white p-4 rounded text-base block mx-auto capitalize">
              Sign up
            </button>
            <p className="text-slate-600 text-xs">
              By signing up, you agree to our
              <span>
                <a href="/" className="underline">
                  {" "}
                  Terms of Use{" "}
                </a>
              </span>
              and
              <span>
                <a href="/" className="underline">
                  {" "}
                  Privacy Policy.{" "}
                </a>
              </span>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
