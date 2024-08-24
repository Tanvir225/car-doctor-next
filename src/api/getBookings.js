const getBookings = async (email) => {
    const response = await fetch(
      `http://localhost:3000/bookings/api/getBooking/${email}`
    );
    const data = await response.json();
    return data;
  };
  
  export default getBookings;
  