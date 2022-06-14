import { HiSearch } from "react-icons/hi";
import { PrimaryCard } from "../components/Cards/PrimaryCard";
import { DataExplore } from "../constant/dataExplore";

export default function Explore() {
  return (
    <div className="bg-secondaryAlt">
      <main className="w-[90%] mx-auto pt-10 pb-16">
        <section className="space-y-10">
          <div className="flex md:items-center md:justify-between flex-col lg:flex-row gap-5">
            <h1 className="text-slate-600 text-xl font-bold uppercase">
              All Projects
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
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-center">
            {DataExplore.map(({ id, name, image, followers }) => {
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
        </section>
      </main>
    </div>
  );
}
