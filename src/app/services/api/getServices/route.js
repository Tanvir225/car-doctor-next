import { connectDB } from "@/lib/connectDB";

export const GET = async () => {
  try {
    const db = await connectDB();
    const serviceCollection = await db.collection("services");
    const result = await serviceCollection.find().toArray();
    return Response.json(result);
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" });
  }
};


