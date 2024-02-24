import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios, {AxiosError} from "axios";

const BASE_FNAME_URL = "https://fnames.farcaster.xyz/transfers";

export interface NameResponse {
    inUse: boolean;
}

interface FNameTransfer {
    id: number,
    timestamp: number,
    username: string,
    owner: `0x{string}`,
    from: number,
    to: number,
    user_signature: string,
    server_signature: string
}

interface FarcasterResponse {
    transfer: FNameTransfer
}

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
            const fnameBody: FarcasterResponse = fnameResponse.data;
            return response.send({
                // it's in use if the latest transfer isn't to 0 aka not disposed of
                inUse: fnameBody.transfer.to !== 0,
            });
        },
        (e: AxiosError) => {
            if (e.response && e.response.status == 404) {
                // 404 actually means unregistered
                return response.send({
                    inUse: false,
                });
            } else {
                return response.send( {
                    inUse: true,
                });
            }
        });
}