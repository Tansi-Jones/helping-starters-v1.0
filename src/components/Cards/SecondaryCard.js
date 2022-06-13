export const SecondaryCard = ({ followers, title, image, color }) => {
  return (
    <div className="relative max-w-sm space-y-8">
      <div className="relative overflow-clip h-60 mt-1 rounded-xl">
        <img src={image} alt="avatar" className="object-cover" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-white text-xl font-semibold">
          <h1 className={`text-${color}`}>{title}</h1>
          <p>{followers}</p>
        </div>
        <hr className={`border-${color}`} />
        <div
          className={`flex items-center justify-between text-${color} text-base font-medium`}
        >
          <h1>Connect with creator on KC</h1>

          <a href="/">
            <div className="relative w-7 h-7">
              <img alt="hs" src="../ assets/hs.png" className="object-cover" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
