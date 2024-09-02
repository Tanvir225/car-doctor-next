"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const UpdateForm = ({_id}) => {
  const session = useSession();
  const router = useRouter();
  const { name, email, image } = session?.data?.user || {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBooking = {
      name: name,
      email: email,
      image: image,
    //   serviceName: serviceName,
    //   price: price,
    //   serviceId: serviceId,
      phone: event.target.phone.value,
      date: event.target.date.value,
      address: event.target.address.value,
      message: event.target.message.value,
    };
    console.log(newBooking);

    const response = await fetch(`http://localhost:3000/bookings/api/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    });
    if (response.status === 200) {
      router.push("/bookings");
      event.target.reset();
      toast.success("Update Successful");
    }
  };
  return (
    <div>
      <form className="p-3 lg:p-10 space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="name"
            defaultValue={name}
            readOnly
            name="name"
            className="input input-bordered w-full "
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            defaultValue={email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="phone"
            name="phone"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            placeholder="address"
            name="address"
            className="input input-bordered w-full "
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <input
            type="date"
            placeholder="date"
            name="date"
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          className="textarea textarea-bordered w-full h-32"
          placeholder="message"
          name="message"
        ></textarea>

        <div className="text-center">
          <button className="btn btn-outline btn-primary">Update Booking</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
