import Heading from "../Shared/Heading";
import {services} from "../../lib/services"
import ServiceCard from "../Card/ServiceCard";

const Service = () => {
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
      <div>
        {
          services.map(service=> (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        }
      </div>
    </div>
  );
};

export default Service;
