import { SecondaryCard } from "../components/Cards/SecondaryCard";
import { DataAll } from "../constant/dataAll";
import { DataSome } from "../constant/dataSome";
import { useNavigate } from "react-router-dom";
import Card from "../assets/card.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-[90%] mx-auto mt-10">
        <section className="flex lg:flex-row flex-col lg:items-center justify-between gap-8">
          <div className="space-y-5 max-w-none lg:max-w-2xl xl:max-w-3xl">
            <h1 className="text-3xl md:text-6xl font-bold capitalize">
              Find out what is trending in our community and contribute
            </h1>
            <p className="text-lg md:text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ex
              maiores magni nulla non?
            </p>
            <div className="flex space-x-5">
              <button
                className="w-full lg:w-auto block tracking-wide text-base rounded-lg py-3 px-4 md:px-12 text-white bg-gradient-to-r from-primary to-secondary"
                onClick={() => navigate("/explore")}
              >
                Explore
              </button>
              <button
                className="w-full lg:w-auto block tracking-wide border border-black transition transform ease-out duration-250 capitalize text-base rounded-lg py-3 px-4 md:px-5 text-black "
                onClick={() => navigate("/create-project")}
              >
                Create Project
              </button>
            </div>
          </div>

          <div className="hidden lg:block  h-[35rem] w-[35rem] object-cover transform md:-translate-y-16">
            <img src={Card} alt={Card} />
          </div>
        </section>

        {DataSome.length >= 1 && (
          <section className="px-8 py-10 bg-[#454545] rounded-xl space-y-5 my-16">
            <div className="flex items-center justify-between text-white font-bold pb-0">
              {/* <p className=" text-lg lg:text-xl">View all</p> */}
            </div>
            <div className="flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
              {DataSome.map(({ id, title, image, followers }) => {
                return (
                  <SecondaryCard
                    key={id}
                    followers={followers}
                    title={title}
                    image={image}
                    color="white"
                  />
                );
              })}
            </div>
          </section>
        )}

        {DataAll.length >= 1 && (
          <section className="px-8 py-10 rounded-xl space-y-5 mt-20 mb-14 bg-[#EAEDF2]">
            <div className="flex items-center justify-between text-black font-bold pb-5">
              <h1 className=" text-2xl lg:text-3xl ">DISCOVER</h1>
              <p className=" text-lg lg:text-xl">View all</p>
            </div>
            <div className="flex flex-col items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
              {DataAll.map(({ id, title, image, followers }) => {
                return (
                  <SecondaryCard
                    key={id}
                    followers={followers}
                    title={title}
                    image={image}
                    color="black"
                  />
                );
              })}
            </div>
          </section>
        )}
        {DataAll.length > 10 && (
          <div className="flex items-center justify-center py-10">
            <button className="w-auto block tracking-wide border border-black transition transform ease-out duration-250 uppercase text-base rounded-md py-2 px-8 text-black">
              Load more
            </button>
          </div>
        )}
      </main>
    </>
  );
}
