import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (req, { params }) => {

  try {
    const db = await connectDB();
    const servicesCollection = await db.collection("services");
    const result = await servicesCollection.findOne({ _id: new ObjectId(params.id) });
    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "something went wrong" }, { status: 400 });
  }
};
