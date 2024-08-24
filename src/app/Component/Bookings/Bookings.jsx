"use client";
import { useSession } from "next-auth/react";
import Banner from "../Shared/Banner";
import getBookings from "@/api/getBookings";
import { useEffect, useState } from "react";
import BookingSkeleton from "../Skeleton/BookingSkeleton";

const Bookings = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { email } = session?.data?.user || {};
  const myBookings = async () => {
    const booking = await getBookings(email);
    // console.log(booking);
    setBookings(booking);
    setLoading(false);
  };

  useEffect(() => {
    myBookings();
  }, [email]);
  return (
    <div>
      <Banner text="My Booking"></Banner>
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

            {loading ? (
              <BookingSkeleton></BookingSkeleton>
            ) : (
              bookings.map(({ serviceName, price, date, _id }) => (
                <tr key={_id}>
                  <td>{serviceName}</td>
                  <td>{price} $ </td>
                  <td>{date}</td>
                  <td className="space-x-5">
                    <button className="btn btn-sm btn-secondary">update</button>
                    <button className="btn btn-sm bg-red-700 text-white">
                      delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
