import { HiDotsVertical } from "react-icons/hi";
import Avatar from "../../assets/avatar.png";

export const PrimaryCard = ({ name, followers, image, title }) => {
  return (
    <div className="relative max-w-[16rem] bg-white rounded-lg shadow-sm">
      <div className="relative overflow-clip h-40 rounded-t-lg">
        <img src={image} alt="avatar" className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-800 text-base hover:text-blue-900 cursor-pointer">
          Angular - the complete guide for beginner
        </h3>
      </div>
      <button className="absolute top-3 right-3">
        <HiDotsVertical className="text-lg text-white" />
      </button>

      <hr />
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex space-x-3 items-center">
          <div className="relative overflow-clip h-8 w-8 rounded-full">
            <img src={Avatar} alt="avatar" className="object-cover" />
          </div>
          <div className="">
            <h3 className="text-sm text-slate-500 ">{name}</h3>
          </div>
          {/* add kingschat logo here */}
        </div>
      </div>
    </div>
  );
};
