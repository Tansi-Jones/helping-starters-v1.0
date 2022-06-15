import { HiDotsVertical } from "react-icons/hi";
import Avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

export const PrimaryCard = ({
  author,
  image,
  title,
  description,
  _id,
  url,
  company_teamName,
}) => {
  return (
    <Link
      to={`/details/${_id}`}
      state={{
        author: author,
        image: image,
        title: title,
        description: description,
        url: url,
        company_teamName: company_teamName,
      }}
    >
      <div className="relative max-w-[20rem] bg-white rounded-lg shadow-sm">
        <div className="relative overflow-clip h-48 rounded-t-lg">
          <img src={image} alt="avatar" className="object-cover h-full" />
        </div>
        <div className="px-5 py-5">
          <h3 className="font-semibold text-slate-800 text-lg hover:text-blue-900 cursor-pointer ">
            {title}
          </h3>
        </div>
        <button className="absolute top-3 right-3">
          <HiDotsVertical className="text-lg text-white" />
        </button>

        <hr />
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex space-x-3 items-center">
            <div className="relative overflow-clip h-8 w-8 rounded-full">
              <img
                src={image}
                alt="avatar"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="">
              <h3 className="text-sm text-slate-500 ">{author}</h3>
            </div>
            {/* add kingschat logo here */}
          </div>
        </div>
      </div>
    </Link>
  );
};
