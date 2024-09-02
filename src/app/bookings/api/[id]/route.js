import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const DELETE = async (req, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    const deleteBooking = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json(deleteBooking);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const update = await req.json();
  const updateDocs = {
    $set: update,
  };
  console.log(params.id, update);
  try {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    const updateBooking = await bookingsCollection.updateOne(
      { _id: new ObjectId(params.id) },
      updateDocs
    );
    return Response.json(updateBooking);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};

export const GET = async (req, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    const bookings = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return Response.json(bookings);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
};
