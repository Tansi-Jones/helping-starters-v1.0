import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const router = useNavigate();
  return (
    <footer className="bg-black text-white py-10">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-10">
        <div className="space-y-5">
          <div
            className="relative w-60 h-10 transform -translate-x-7 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <img
              src="/assets/logo.png"
              layout="fill"
              className="object-cover"
              alt="logo"
            />
          </div>
          <p className="text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            dignissimos magni at quibusdam.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="capitalize text-base">main links</h3>
          <ul className="space-y-1 text-base">
            <li onClick={() => router.push("/home")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => router.push("/blog")} className="cursor-pointer">
              Blog
            </li>
            <li
              onClick={() => router.push("/community")}
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
