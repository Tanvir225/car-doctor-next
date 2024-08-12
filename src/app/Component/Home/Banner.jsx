const Banner = () => {
  return (
    <div className="">
      <div className="carousel w-full rounded-lg">
        {bannerContent.map((banner, index) => (
          <div
            key={index}
            id={`slide${banner.id}`}
            className="carousel-item relative w-full h-[85vh] bg-top bg-no-repeat bg-cover"
            style={{
              backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.5), rgba(0, 0, 0, 0.3)),url(/assets/images/banner/${
                index + 1
              }.jpg)`,
            }}
          >
            <div className="flex text-white flex-col justify-center items-center w-[60%] lg:w-[40%] ml-5">
              <h1 className=" text-2xl lg:text-5xl font-bold ">
                {banner.title}
              </h1>
              <p className="mt-5">{banner.description}</p>
            </div>
            <div className="absolute bottom-5 right-5 space-x-5">
              <a href={banner.prev} className="btn btn-primary">
                ❮
              </a>
              <a href={banner.next} className="btn btn-primary">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const bannerContent = [
  {
    id: 1,
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide2",
    prev: "#slide4",
  },
  {
    id: 2,
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide3",
    prev: "#slide1",
  },
  {
    id: 3,
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide4",
    prev: "#slide2",
  },
  {
    id: 4,
    title: "Affordable Price For Car Servicing",
    description:
      "There are many variations of passages of  available, but the majority have suffered alteration in some form",
    next: "#slide1",
    prev: "#slide3",
  },
];

export default Banner;
