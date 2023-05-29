import User from "@/models/User";
import { connectToDB } from "@/utils/db/mongo";

export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await User.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 