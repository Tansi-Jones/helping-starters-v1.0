import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Avatar from "../assets/avatar.svg";
import HS from "../assets/hs.png";

export default function Profile() {
  const name = "Tansi";
  const title = "Me and me";
  const url = "forreal.online";
  const description = "";
  const img = ".";

  return (
    <main className="bg-secondaryAlt">
      <div className="w-[90%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-32 pb-10">
          <section className="space-y-6">
            <h1 className="text-slate-600 text-3xl font-bold uppercase">
              Project name
            </h1>
            <img
              src={img}
              className="w-full h-96 object-cover rounded-lg hidden md:block"
              alt="card"
            />
          </section>
          <section>
            <div className="relative max-w-[10rem] bg-white rounded-xl shadow-sm px-3 pt-5 pb-4">
              <div className="relative overflow-clip h-20 rounded-lg w-20 mx-auto">
                <img src={Avatar} alt="avatar" />
              </div>

              <div className="flex items-center justify-center space-x-2 text-slate-600 text-base font-medium">
                <div className="relative w-7 h-7 mt-3">
                  <img alt="hs" src={HS} className="object-cover" />
                </div>

                <p className="text-sm pt-5">Connect on KC</p>
              </div>
            </div>
            <div className="py-8">
              <img
                src={img}
                className="w-full h-96 object-cover rounded-lg block md:hidden"
                alt="card"
              />
            </div>
            <div className="space-y-5 pt-5">
              {name && (
                <div className="space-y-3">
                  <p className="text-slate-500 text-base md:text-lg ">
                    Company/Team name
                  </p>
                  <div className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600">
                    {name}
                  </div>
                </div>
              )}
              {title && (
                <div className="space-y-3">
                  <p className="text-slate-500 text-base md:text-lg ">
                    Project Title
                  </p>
                  <div className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600">
                    {title}
                  </div>
                </div>
              )}
              {url && (
                <div className="space-y-3">
                  <p className="text-slate-500 text-base md:text-lg ">
                    Url/Website
                  </p>
                  <div className="outline-none bg-slate-200 rounded text-base py-2 px-4 w-full text-slate-600">
                    {url}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        <div className="space-y-5">
          <h1 className="text-slate-600 text-3xl font-medium capitalize">
            detailed description
          </h1>
          <div className="bg-white rounded-lg p-5">{description}</div>
        </div>
      </div>
    </main>
  );
}
