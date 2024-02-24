import type {VercelRequest, VercelResponse} from "@vercel/node";
import axios from "axios";
import {BASE_FNAME_URL} from "./const";

export interface RegisterResponse {
    success: boolean,
}

export interface RegisterRequest {
    name: string, // Name to register
    from: number,  // Fid to transfer from (0 for a new registration)
    to: number, // Fid to transfer to (0 to unregister)
    fid: number, // Fid making the request (must match from or to)
    owner: `0x${string}`, // Custody address of fid making the request
    timestamp: number,  // Current timestamp in seconds
    signature: `0x${string}`  // EIP-712 signature signed by the custody address of the fid
}

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    const requestData: RegisterRequest = request.body;
    console.log(requestData);

    await axios.post(BASE_FNAME_URL, requestData);

    return response.status(200);
}