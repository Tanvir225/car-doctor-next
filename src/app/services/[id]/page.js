import Banner from "@/app/Component/Services/Banner";


const SingeleServicePage = ({params}) => {
    return (
        <div>
            <Banner></Banner>
            this is single service page : {params.id}
        </div>
    );
};

export default SingeleServicePage;