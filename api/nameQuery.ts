import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios from "axios";

const BASE_FNAME_URL = "https://fnames.farcaster.xyz/transfers";

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {

    const { fname } = request.query
    if (!fname || typeof fname !== "string") return response.status(400);

    const fnameResponse = await axios.get(`${BASE_FNAME_URL}/current`, {
        params: {
            fname
        }
    });

    console.log("data:", fnameResponse.data)

    return response.send("OK");
}