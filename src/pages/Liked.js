import { HiSearch } from "react-icons/hi";
import { PrimaryCard } from "../components/Cards/PrimaryCard";
import { DataExploreSome } from "../constant/dataExploreSome";

export default function Main() {
  return (
    <div className="bg-secondaryAlt">
      <main className="w-[90%] mx-auto pt-10 pb-16">
        {/* <section className="bg-white"></section> */}

        <section className="space-y-10">
          <div className="flex md:items-center md:justify-between flex-col lg:flex-row gap-5">
            <h1 className="text-slate-600 text-xl font-bold uppercase">
              {/* All Projects */}
            </h1>
            <div className="text-slate-600 text-base py-2 px-3 rounded-md font-semibold bg-white flex items-center space-x-3">
              <HiSearch className="text-slate-500 text-lg" />
              <input
                type="text"
                className="outline-none placeholder:text-slate-600 bg-transparent"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="grid grid-cols-[350px_minmax(900px,_1fr)_100px]">
            <article className="max-w-[15rem] bg-white rounded-lg shadow-sm max-h-36 p-4 space-y-2">
              <div className="font-medium text-slate-500">
                <a href="/">Connections on KC</a>
              </div>
              <hr />
              <div className="font-medium text-slate-500">
                <a href="/">My projects</a>
              </div>
              <hr />
              <div className="font-medium text-slate-500">
                <a href="/">Teams</a>
              </div>
            </article>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
              {DataExploreSome.map(({ id, name, image, followers }) => {
                return (
                  <PrimaryCard
                    key={id}
                    followers={followers}
                    name={name}
                    image={image}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
