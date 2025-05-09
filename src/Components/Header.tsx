import type React from "react";

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-black absolute w-full h-[10%] flex items-end justify-between">
      <h1 className="font-bold ml-3 py-3 px-5 flex items-end h-full text-3xl uppercase italic text-white">
        {title}
      </h1>
      <div className="px-10  text-white space-x-10  py-3">
        <HeaderButton title="Current" />
        <HeaderButton title="Hourly" />
        <HeaderButton title="7 Days" />
      </div>
    </header>
  );
};

export default Header;

type ButtonProps = {
  title: string;
};

const HeaderButton: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button
      className="cursor-pointer active:text-red-700 transition-colors rounded"
      onClick={() => console.log(title, "clicked")}
    >
      {title}
    </button>
  );
};
