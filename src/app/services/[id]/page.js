import singleService from "@/api/singleService";
import Banner from "@/app/Component/Services/Banner";

const SingeleServicePage = async ({ params }) => {
  const service = await singleService(params.id);
  const { title, description, facility, category, price } = service || {};

  return (
    <div>
      <Banner title={title}></Banner>
      <div className="grid grid-cols-12 gap-5 justify-center items-center">
        <div className="my-5 col-span-12 lg:col-span-9 text-justify space-y-5">
          <h1 className="font-bold text-xl border-b-2">{title}</h1>
          <p>{description}</p>
          <p className="text-lg font-bold">Facility</p>
          <section className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-10">
            {facility.map((item, index) => (
              <div key={index} className="bg-teal-50 rounded-lg p-5 ring-2 ring-orange-400 ring-offset-8">
                <h2 className="font-bold text-lg">{item.name}</h2>
                <p>{item.details}</p>
              </div>
            ))}
          </section>
        </div>
        <div className="col-span-12 lg:col-span-3 rounded-lg my-5 text-justify space-y-5 ">
          <div className="h-72 bg-gray-200 rounded-lg skeleton"></div>
          <p className="text-primary font-semibold text-lg">
            Price : {price} $
          </p>
          <button className="btn btn-outline btn-primary w-full">
            Process Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingeleServicePage;
