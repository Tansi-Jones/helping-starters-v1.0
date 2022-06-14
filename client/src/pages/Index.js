import { useNavigate } from "react-router-dom";
import Launch from "../assets/lauch.png";
import Icon1 from "../assets/Icon-1.svg";
import Icon2 from "../assets/Icon-2.svg";
import Icon3 from "../assets/Icon-3.svg";
import Icon4 from "../assets/Icon.png";
import Member from "../assets/Members.png";
import Proposal from "../assets/Proposal.png";
import Group from "../assets/Group.png";
import { useSelector } from "react-redux";
import { selectCurrentUID } from "../features/auth/authSlice";
import { useEffect } from "react";

export default function Main() {
  const navigate = useNavigate();
  const userID = useSelector(selectCurrentUID);

  useEffect(() => {
    userID && navigate("/home");
  });

  return (
    <div className="bg-[#EAEDF2]">
      <main className="w-[90%] mx-auto py-32 ">
        <section className="flex flex-col md:flex-row justify-between items-center ">
          <div>
            <h1 className="capitalize font-bold text-3xl md:text-5xl lg:text-7xl text-black max-w-6xl">
              the new helping starters is here to help you launch
            </h1>
            <button
              className="bg-secondary py-3 px-8 font-semibold capitalize text-lg text-white rounded-lg my-10"
              onClick={() => navigate("/register")}
            >
              join the community
            </button>
          </div>
          <div className="relative w-full h-96">
            <img alt="" src={Launch} className="object-contain" />
          </div>
        </section>

        <section className="md:text-center my-52">
          <h1 className="text-black uppercase font-bold text-3xl">
            some reasons to sign up
          </h1>
          <p className="text-base md:text-lg md:w-7/12 md:mx-auto mt-5">
            We created a launch pad for your ideas where like-minded developers,
            designers and entrepreneurs and collaborate and give and receive
            useful feed back on projects
          </p>
          <div className="flex flex-wrap space-y-5 lg:space-y-0 items-center justify-between mt-10 pb-20">
            <div className="bg-white rounded-md py-4 px-7 shadow-md space-y-2 max-w-sm">
              <div className="relative w-20 h-20 mx-auto">
                <img alt="" src={Icon1} className="object-contain" />
              </div>
              <h1 className="text-center text-black capitalize font-bold text-2xl">
                Networking
              </h1>
              <p className="text-black">
                Network and collaborate with a host of the best developers,
                designers and entrepreneurs all accross the campus ministry
              </p>
            </div>

            <div className="bg-white rounded-md py-4 px-7 shadow-md space-y-2 max-w-sm">
              <div className="relative w-20 h-20 mx-auto">
                <img alt="" src={Icon2} className="object-contain" />
              </div>
              <h1 className="text-center text-black capitalize font-bold text-2xl">
                Showcase
              </h1>
              <p className="text-black">
                Showcase what you have worked on, are working on or will be
                working on in the future for valuable feedback and help
              </p>
            </div>

            <div className="bg-white rounded-md py-4 px-7 shadow-md space-y-2 max-w-sm">
              <div className="relative w-20 h-20 mx-auto">
                <img alt="" src={Icon3} className="object-contain" />
              </div>
              <h1 className="text-center text-black capitalize font-bold text-2xl">
                Launch
              </h1>
              <p className="text-black">
                Here we have a community who would help you launch your product.
                Giving you access to a large number of beta testers
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <h1 className="capitalize font-medium text-3xl md:text-5xl text-black max-w-2xl">
                You may just find what you are looking for to help you get
                started
              </h1>
              <button
                className="bg-secondary py-3 px-8 font-semibold capitalize text-lg text-white rounded-lg my-10"
                onClick={() => navigate("/register")}
              >
                join the community
              </button>
            </div>

            <div className="relative w-80 h-80 ">
              <img alt="" src={Member} className="object-contain" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0">
            <div className="">
              <div className="relative w-80 h-80 ">
                <img alt="" src={Proposal} className="object-contain" />
              </div>
            </div>
            <div className="space-y-5">
              <div className="relative w-20 h-20">
                <img alt="" src={Icon4} className="object-contain" />
              </div>
              <p className="capitalize font-normal text-xl md:text-3xl text-black">
                See what our community member are working on
              </p>
              <p className="capitalize font-normal text-lg md:text-xl text-black">
                Get an early glimpse in to some of the next unicorns being built
                right now through the community
              </p>
            </div>
          </div>
        </section>

        <section className="md:flex flex-col items-center justify-center my-40">
          <h1 className="font-medium text-2xl md:text-3xl md:w-8/12 lg:text-center">
            Helping Starters is always looking to imporve. Please send us your
            feed back and what you think we can do better
          </h1>
          <button className="bg-black py-3 px-5 font-semibold capitalize text-lg text-white rounded-lg my-10">
            contact us
          </button>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="space-y-10">
            <h1 className="capitalize font-normal text-3xl md:text-5xl lg:text-7xl text-black max-w-6xl">
              Helping Starters 1.0 is Going Nowhere!
            </h1>
            <p className="">
              Need Help with Design; Logo, Websiteor Blog on a tight budget?
              Let’s see how we can help
            </p>
            <button
              className="bg-secondary py-3 px-8 font-semibold capitalize text-lg text-white rounded-lg my-10"
              onClick={() => navigate("/register")}
            >
              let's get started!
            </button>
          </div>
          <div className="relative  h-[28rem]">
            <img alt="" src={Group} className="object-contain" />
          </div>
        </section>
      </main>
    </div>
  );
}

export const menu = [
  {
    id: 0,
    title: "Why HS",
    href: "/",
  },
  {
    id: 1,
    title: "Join The Community",
    href: "/blog",
  },
  {
    id: 2,
    title: "Projects",
    href: "/projects",
  },
];
