import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useState, Fragment } from "react";
import MenuDropdown from "./MenuDropdown";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Logo from "../../assets/logo.png";
import { ImSpinner2 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useUserSignInMutation } from "../../services/authApi";
import { selectCurrentUID } from "../../features/auth/authSlice";

export const Navigation = () => {
  const [isLoading, setIsLoading] = useState();
  const [isDropdown, setIsDropdown] = useState(false);
  const [modal, setModal] = useState(false);

  const userID = useSelector(selectCurrentUID);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signIn] = useUserSignInMutation();

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const userData = await signIn(data).unwrap();
      toast(userData.message);
      dispatch(
        setCredentials({ ...userData.data, accessToken: userData.token })
      );

      setIsDropdown(false);
      setModal(false);
      navigate("/home");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // toast(error.data.message);
    }
  };

  function open() {
    setModal(true);
  }
  function close() {
    setModal(false);
  }

  return (
    <>
      <nav className="flex items-center justify-between w-[90%] mx-auto">
        <div
          className="relative transform -translate-x-7 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="logo" className="h-20 w-52 object-cover" />
        </div>

        {userID ? (
          <div className="hidden lg:flex items-center space-x-8">
            <div className="text-slate-600 font-medium capitalize text-base flex items-center space-x-8 tracking-wide">
              {menu.map(({ id, title, href }) => (
                <div
                  key={id}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-secondary cursor-pointer"
                  onClick={() => navigate(`${href}`)}
                >
                  <p>{title}</p>
                </div>
              ))}
            </div>
            <MenuDropdown />
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-8">
            <div className="text-slate-600 font-medium capitalize text-base flex items-center space-x-8 tracking-wide">
              {menu.map(({ id, title, href }) => (
                <div
                  key={id}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-secondary cursor-pointer"
                  onClick={() => navigate(`${href}`)}
                >
                  <p>{title}</p>
                </div>
              ))}
            </div>
            <button
              className="tracking-wide  bg-secondary transition transform ease-out duration-250 uppercase text-base rounded font-medium py-1 md:py-2 px-4 md:px-5 text-white"
              onClick={open}
            >
              SIGNIN
            </button>
          </div>
        )}

        <button
          className="block lg:hidden text-black text-3xl"
          onClick={() => setIsDropdown(!isDropdown)}
        >
          <HiMenu />
        </button>
      </nav>

      {/* Dropdown */}
      <aside className={isDropdown ? "w-[90%] mx-auto py-6" : "hidden"}>
        {userID ? (
          <div className="space-y-5">
            <div className="text-slate-600 font-medium capitalize text-base tracking-wide space-y-3">
              {menu.map(({ id, title, href }) => (
                <div
                  key={id}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-secondary cursor-pointer"
                  onClick={() => navigate(`${href}`)}
                >
                  <p>{title}</p>
                </div>
              ))}
            </div>
            <MenuDropdown />
          </div>
        ) : (
          <div className="space-y-5">
            <div className="text-slate-600 font-medium capitalize text-base tracking-wide space-y-3">
              {menu.map(({ id, title, href }) => (
                <div
                  key={id}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-secondary cursor-pointer"
                  onClick={() => navigate(`${href}`)}
                >
                  <p>{title}</p>
                </div>
              ))}
            </div>
            <button
              className="tracking-wide bg-secondary transition transform ease-out duration-250 uppercase text-base rounded font-medium py-1 md:py-2 px-4 md:px-5 text-white"
              onClick={open}
            >
              SIGNIN
            </button>
          </div>
        )}
      </aside>

      {/* signin */}
      <section>
        <Transition appear show={modal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={close}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl text-center font-medium leading-6 text-secondary"
                    >
                      Welcome back!
                    </Dialog.Title>
                    <div className="mt-4">
                      <p className="text-sm md:text-base text-center text-gray-500">
                        Kindly fill in your details to proceed
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="w-[80%] mb:w-[70%] mx-auto space-y-5 border-1 border-slate-800 mt-8"
                    >
                      <div className="mb-4">
                        <input
                          {...register("email", { required: true })}
                          className="border rounded w-full p-3 text-slate-800 leading-tight outline-none border-slate-400 bg-transparent placeholder:text-slate-500"
                          type="email"
                          placeholder="Email"
                        />
                        {errors.email && (
                          <p className="text-rose-600">
                            Your email is required
                          </p>
                        )}
                      </div>
                      <div className="mb-4">
                        <input
                          {...register("password", { required: true })}
                          className="border rounded w-full p-3 text-slate-800 leading-tight outline-none border-slate-400 bg-transparent placeholder:text-slate-500"
                          type="password"
                          placeholder="Password"
                        />
                        <p
                          className="block text-right text-slate-800 text-sm hover:underline pt-3"
                          onClick={() => navigate.push("/forgot")}
                        >
                          forgot password?
                        </p>
                        {errors.password && (
                          <p className="text-rose-600">
                            Your password is required
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center space-x-3  cursor-pointer bg-secondary text-white p-3 rounded w-full text-base  mx-auto"
                      >
                        <span>Sign in</span>
                        {isLoading && (
                          <ImSpinner2 className="text-white animate-spin " />
                        )}
                      </button>

                      {/* <p className="text-center">
                      Already a member?{" "}
                      <span>
                        <button className="inline-block text-black font-bold">
                          login
                        </button>
                      </span>
                    </p> */}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </>
  );
};

export const menu = [
  {
    id: 0,
    title: "Home",
    href: "/home",
  },
  {
    id: 1,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 2,
    title: "Community",
    href: "/community",
  },
];
