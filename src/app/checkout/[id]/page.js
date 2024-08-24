import singleService from "@/api/singleService";
import Form from "@/app/Component/Checkout/Form";
import Banner from "@/app/Component/Shared/Banner";

const checkoutPage = async ({ params }) => {
  const serviceDetails = await singleService(params.id);
  const { title, _id, img, price } = serviceDetails || {};

  return (
    <div>
      <Banner text="Checkout" title={title}></Banner>
      <Form serviceName={title} img={img} price={price} serviceId={_id}></Form>
    </div>
  );
};

export default checkoutPage;
