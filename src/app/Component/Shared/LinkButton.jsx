import Link from "next/link";


const LinkButton = ({link,text}) => {
    return (
        <div>
            <Link href={link} className="btn btn-primary btn-outline">{text}</Link>
        </div>
    );
};

export default LinkButton;