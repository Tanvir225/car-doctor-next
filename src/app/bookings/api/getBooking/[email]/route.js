import { connectDB } from "@/lib/connectDB"

export const GET = async(req,{params})=>{

    try {
        const db = await connectDB()
        const bookingsCollection = await db.collection('bookings')
        const bookings = await bookingsCollection.find({email : params.email}).toArray()
        return Response.json(bookings)

    } catch (error) {
        console.log(error);
        return Response.json({message:"booking not found"},{status:404})
       
    }
}