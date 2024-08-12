
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title,img,price} = service || {}
    console.log(img);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            {/* <img src={img} alt={title} />  */}
            <Image src={img} alt={title} width={500} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary"><FaArrowRight></FaArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
