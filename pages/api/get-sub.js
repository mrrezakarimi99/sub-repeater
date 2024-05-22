// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
    const {sub} = req.query
    res.setHeader('Content-Type', 'text/html');
    if (sub) {
        const response = await axios.get(sub);
        console.log('response:', response)
        res.status(200).send(response.data);
    } else {
        res.status(400).send('No sub provided');
    }
}
