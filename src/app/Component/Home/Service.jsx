import Heading from "../Shared/Heading";
import ServiceCard from "../Card/ServiceCard";
import LinkButton from "../Shared/LinkButton";
import getServices from "@/api/getServices";



const Service = async() => {
  const services = await getServices()
  const content = {
    title: "Services",
    heading: "Our Services",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, sapiente.",
  };


  return (
    <div className="my-10 space-y-5">
      <Heading
        hAlign="center"
        tAlign={"center"}
        dAlign={"center"}
        content={content}
      ></Heading>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-5">
        {
          services.map((service)=> (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        }
      </div>

      <div className="text-center">
        <LinkButton text="View All" link="/services"></LinkButton>
      </div>
    </div>
  );
};

export default Service;
