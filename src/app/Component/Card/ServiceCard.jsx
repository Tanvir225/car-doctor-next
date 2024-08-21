
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({service}) => {
    const {title,img,price,_id} = service || {}
    // console.log(img);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl border border-orange-400">
        <figure className="px-10 pt-10">
            {/* <img src={img} alt={title} />  */}
            <Image src={img} alt={title} width={400} height={200} unoptimized className="rounded-lg" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price} $</p>
          <div className="card-actions justify-end">
            <Link href={`/services/${_id}`} className="btn btn-primary"><FaArrowRight></FaArrowRight></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
