import HS from "../../assets/hs.png";
import { Link } from "react-router-dom";

export const SecondaryCard = ({
  author,
  image,
  title,
  description,
  _id,
  url,
  company_teamName,
  color,
  followers,
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
      <div className="relative max-w-sm space-y-8">
        <div className="relative overflow-hidden h-60 mt-1 rounded-xl">
          <img src={image} alt="avatar" className="object-cover h-full" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-white text-xl font-semibold">
            <h1 className={`text-${color} truncate`}>{title}</h1>
            <p>{followers ? followers : 0}</p>
          </div>
          <hr className={`border-${color}`} />
          <div
            className={`flex items-center justify-between text-${color} text-base font-medium`}
          >
            <h1>Connect with creator on KC</h1>

            <div className="relative w-7 h-7">
              <img alt="hs" src={HS} className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
