import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-10">
        <div className="space-y-5">
          <div
            className="relative transform -translate-x-7 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="logo" className="h-20 w-52 object-cover" />
          </div>
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dignissimos magni at quibusdam.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="capitalize text-base">main links</h3>
          <ul className="space-y-1 text-base">
            <li onClick={() => navigate("/home")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => navigate("/blog")} className="cursor-pointer">
              Blog
            </li>
            <li
              onClick={() => navigate("/community")}
              className="cursor-pointer"
            >
              Community
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="capitalize text-base">contact us</h3>
          <ul className="space-y-1 text-base">
            <li>(+234) 235-652-6580</li>
            <li>start@helpingstarters.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
