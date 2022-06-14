import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../assets/avatar.svg";

import { useNavigate } from "react-router-dom";
import { logOut, selectCurrentUser } from "../../features/auth/authSlice";

export default function MenuDropdown() {
  const userName = useSelector(selectCurrentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
    navigate("/home");
  };
  return (
    <div className="z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center items-center space-x-1 w-full px-3 py-1 text-[15px] font-medium text-[#696F79] border border-gray-400 bg-transparent rounded-md bg-opacity-90 hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition ease-in-out duration-200">
            <img
              className="h-[30px] w-[30px] rounded-full object-cover"
              src={Avatar}
              alt="avatar"
            />
            <span className="capitalize truncate w-16">{userName}</span>
            <HiChevronDown
              className="text-xl text-[#757679c2]"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-[9.5rem] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`space-x-2 ${
                      active ? "bg-gray-100 text-[#696F79]" : "text-[#696F79]"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={() => navigate("/profile")}
                  >
                    {active ? (
                      <ProfileIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <ProfileInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    <span>Profile</span>
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 pb-2">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`space-x-2 ${
                      active ? "bg-gray-100 text-[#696F79]" : "text-[#696F79]"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={logout}
                  >
                    {active ? (
                      <LogoutActiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    ) : (
                      <LogoutInactiveIcon
                        className="w-5 h-5 mr-2"
                        aria-hidden="true"
                      />
                    )}
                    <span>Logout</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function ProfileIcon() {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 19 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18649 11.6813C9.06982 11.6697 8.92982 11.6697 8.80149 11.6813C6.02482 11.588 3.81982 9.31301 3.81982 6.51301C3.81982 3.65467 6.12982 1.33301 8.99982 1.33301C11.8582 1.33301 14.1798 3.65467 14.1798 6.51301C14.1682 9.31301 11.9632 11.588 9.18649 11.6813Z"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.35334 15.986C0.530007 17.876 0.530007 20.956 3.35334 22.8343C6.56167 24.981 11.8233 24.981 15.0317 22.8343C17.855 20.9443 17.855 17.8643 15.0317 15.986C11.835 13.851 6.57334 13.851 3.35334 15.986Z"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileInactiveIcon() {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 19 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18649 11.6813C9.06982 11.6697 8.92982 11.6697 8.80149 11.6813C6.02482 11.588 3.81982 9.31301 3.81982 6.51301C3.81982 3.65467 6.12982 1.33301 8.99982 1.33301C11.8582 1.33301 14.1798 3.65467 14.1798 6.51301C14.1682 9.31301 11.9632 11.588 9.18649 11.6813Z"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.35334 15.986C0.530007 17.876 0.530007 20.956 3.35334 22.8343C6.56167 24.981 11.8233 24.981 15.0317 22.8343C17.855 20.9443 17.855 17.8643 15.0317 15.986C11.835 13.851 6.57334 13.851 3.35334 15.986Z"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoutInactiveIcon() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3833 9.22262C10.745 5.02262 12.9033 3.30762 17.6283 3.30762H17.78C22.995 3.30762 25.0833 5.39595 25.0833 10.6109V18.2176C25.0833 23.4326 22.995 25.5209 17.78 25.5209H17.6283C12.9383 25.5209 10.78 23.8293 10.395 19.6993"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4998 14.4023H4.22314"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.82484 10.4941L2.9165 14.4025L6.82484 18.3108"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoutActiveIcon() {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.3833 9.22262C10.745 5.02262 12.9033 3.30762 17.6283 3.30762H17.78C22.995 3.30762 25.0833 5.39595 25.0833 10.6109V18.2176C25.0833 23.4326 22.995 25.5209 17.78 25.5209H17.6283C12.9383 25.5209 10.78 23.8293 10.395 19.6993"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4998 14.4023H4.22314"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.82484 10.4941L2.9165 14.4025L6.82484 18.3108"
        stroke="#696F79"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
