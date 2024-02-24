
export const edge = true;

export default async function handler() {
    return new Response("Edge function: OK", {
        status: 200
    });
}