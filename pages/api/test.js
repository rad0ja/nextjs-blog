export default async function handler(req, res) {
    const response = await fetch(`https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/rad0ja?api_key=${process.env.LOL_API_KEY}`)
    const data = await response.json()
    res.status(200).json(data)
}