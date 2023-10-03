import { express } from 'express'
import { axios } from 'axios'
require ('dotenv').config()

const app = new express()
app.get('/', (req, res) => {
    const ip = req.ip
    const url = `https://ipinfo.io/${ip}/json`
    axios.get(url).then((response) => {
        const data = response.data
        const location = data.loc
    if (location === 'JP') {
        res.redirect(process.env.JP_URL)
    } else {
        res.redirect(process.env.INT_URL)
    }
})
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
