type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-black absolute w-full h-[7%] flex items-end justify-between">
      <h1 className="font-bold ml-3 py-3 px-5 flex items-end h-full text-3xl uppercase italic text-white">
        {title}
      </h1>
      <div className="px-10 flex justify-evenly py-3">
        <button className="text-white  ">button</button>
        <button className="text-white">button</button>
        <button className="text-white ">button</button>
      </div>
    </header>
  );
};

export default Header;
