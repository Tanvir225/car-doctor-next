const Banner = ({title,text}) => {
  return (
    <div
      className="h-80 rounded-lg bg-cover bg-bottom relative"
      style={{
        backgroundImage: `linear-gradient(45deg,rgba(2,0,82,0.8), rgba(0, 0, 0, 0.3)),url(/assets/images/banner/4.jpg)`,
      }}
    >
      <div className="absolute bottom-5 w-full">
        <h1 className="text-xl  font-bold text-center text-white">{text} : {title}</h1>
      </div>
    </div>
  );
};

export default Banner;
