import { SecondaryCard } from "../components/Cards/SecondaryCard";
import { DataAll } from "../constant/dataAll";
import { DataSome } from "../constant/dataSome";
import { useNavigate } from "react-router-dom";
import Explore from "../assets/explore.png";
import Avatar from "../assets/avatar.png";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <main className="w-[90%] mx-auto mt-10">
        <section className="flex lg:flex-row flex-col lg:items-center justify-between gap-8">
          <div className="space-y-5 lg:max-w-lg xl:max-w-xl">
            <h1 className="text-2xl md:text-5xl font-bold capitalize">
              Find out what is trending in our community and contribute
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ex
              maiores magni nulla non?
            </p>
            <div className="flex space-x-5">
              <button
                className="w-full lg:w-auto block tracking-wide text-base rounded-lg py-1 md:py-2 px-4 md:px-12 text-white bg-gradient-to-r from-primary to-secondary"
                onClick={() => navigate("/explore")}
              >
                Explore
              </button>
              <button
                className="w-full lg:w-auto block tracking-wide border border-black transition transform ease-out duration-250 capitalize text-base rounded-lg py-1 md:py-2 px-4 md:px-5 text-black hover:bg-black hover:text-white"
                onClick={() => navigate("/create-project")}
              >
                Create Project
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-lg space-y-3 min-w-[28%]">
            <div className="relative overflow-clip h-[20rem] rounded-lg">
              <img src={Explore} alt="exploreimage" className="object-cover" />
            </div>
            <div className="">
              <div className="flex space-x-3">
                <div className="relative overflow-clip h-12 w-12 mt-1">
                  <img src={Avatar} alt="avatar" className="object-cover" />
                </div>
                <div className="">
                  <h3 className="text-lg">Connect with Laura on KC</h3>
                  <p className="text-xs">Lorem ipsum dolor sit amet,</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-8 py-10 bg-[#454545] rounded-xl space-y-5 my-16">
          <div className="flex items-center justify-between text-white font-bold pb-0">
            {/* <p className=" text-lg lg:text-xl">View all</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
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

        <section className="px-8 py-10 rounded-xl space-y-5 mt-20 mb-14 bg-[#EAEDF2]">
          <div className="flex items-center justify-between text-black font-bold pb-5">
            <h1 className=" text-2xl lg:text-3xl ">DISCOVER</h1>
            <p className=" text-lg lg:text-xl">View all</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
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
        <div className="flex items-center justify-center py-10">
          <button className="w-full lg:w-auto block tracking-wide border border-black transition transform ease-out duration-250 uppercase text-base rounded-lg py-1 md:py-2 px-4 md:px-5 text-black hover:bg-black hover:text-white">
            Load more
          </button>
        </div>
      </main>
    </>
  );
}
