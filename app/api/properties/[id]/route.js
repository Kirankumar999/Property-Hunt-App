import connectDB from "@/config/database"
import Property from "@/models/Property";

export const GET = async (id) => {
  try {
    await connectDB();
    const property = await Property.findById(id);
    return new Response(JSON.stringify(property), {
      status: 200,
    });

  } catch (error) {
    console.log(error);
    return new Response('Somethig went wrong', { status: 500 });
  }
};