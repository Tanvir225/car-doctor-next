import { connectDB } from "@/lib/connectDB";

export const POST = async (req) => {
  const newBooking = await req.json();
//   console.log(newBooking);
  try {
    const db = await connectDB();
    const newBookingCollections = await db.collection("myservices");
    const result = await newBookingCollections.insertOne(newBooking);
    return Response.json({ message: "new booking added" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
