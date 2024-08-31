"use client";
import { useSession } from "next-auth/react";
import Banner from "../Shared/Banner";
import getBookings from "@/api/getBookings";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import BookingSkeleton from "../Skeleton/BookingSkeleton";
import swal from 'sweetalert';

const Bookings = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { email } = session?.data?.user || {};
  const myBookings = async () => {
    const booking = await getBookings(email);
    // console.log(booking);
    setBookings(booking);
    // setLoading(false);
  };

  useEffect(() => {
    myBookings();
  }, [email]);


  //deleteBooking function
  const deleteBooking = async (id) => {
    // const result = await fetch(`http://localhost:3000/bookings/api/${id}`,{
    //   method:'DELETE'
    // })
    // const deleteResult = await result.json()
    // if(deleteResult?.deletedCount===1){

    // }
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then(async (willDelete) => {
        if (willDelete) {
          const result = await fetch(`http://localhost:3000/bookings/api/${id}`, {
            method: 'DELETE'
          })
          const deleteResult = await result.json()
          if (deleteResult?.deletedCount === 1) {
            swal(" Your booking has been deleted!", {
              icon: "success",
            });
            myBookings()
          }

        }
      });
  }
  return (
    <div>
      <Banner text="My Booking" title={bookings.length}></Banner>
      <div className="overflow-x-auto my-5">
        <table className="table text-center">
          {/* head */}
          <thead className="text-gray-700 text-lg font-bold">
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              bookings.map(({ serviceName, price, date, _id }) => (
                <tr key={_id}>
                  <td>{serviceName}</td>
                  <td>{price} $ </td>
                  <td>{date}</td>
                  <td className="space-x-5">
                    <button className="btn btn-sm btn-secondary">update</button>
                    <button onClick={() => deleteBooking(_id)} on className="btn btn-sm bg-red-700 hover:bg-red-500 text-white">
                      delete
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
