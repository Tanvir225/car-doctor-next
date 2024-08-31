import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"

export const DELETE = async (req, { params }) => {
    try {
        const db = await connectDB()
        const bookingsCollection = await db.collection('bookings')
        const deleteBooking = await bookingsCollection.deleteOne({ _id: new ObjectId(params.id) })
        return Response.json(deleteBooking)
    } catch (error) {
        console.log(error)
        return Response.json({ message: "Something went wrong" }, { status: 500 })
    }
}