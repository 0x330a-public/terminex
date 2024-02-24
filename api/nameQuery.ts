import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios, {AxiosError} from "axios";

const BASE_FNAME_URL = "https://fnames.farcaster.xyz/transfers";

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {

    const { fname } = request.query
    if (!fname || typeof fname !== "string") return response.status(400);

    return await axios.get(`${BASE_FNAME_URL}/current`, {
        params: {
            fname
        }
    }).then(
        (fnameResponse) => {
            console.log("data:", fnameResponse.data)
            return response.send("OK");
        },
        (e: AxiosError) => {
            if (e.status == 404) {
                // 404 actually means unregistered
                return response.send("OK");
            } else {
                throw e;
            }
        });
}