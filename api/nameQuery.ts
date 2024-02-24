import type { VercelRequest, VercelResponse } from '@vercel/node';
import axios, {AxiosError} from "axios";
import {BASE_FNAME_URL} from "./const";


export interface NameResponse {
    inUse: boolean;
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
            console.log("data:", fnameResponse.data)
            return response.send({
                inUse: true,
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