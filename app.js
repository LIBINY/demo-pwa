const express = require('express')

const app = express()
const fs = require('fs')
const path = require('path')
app.use(express.static('pubilc'))
app.listen(8080, () => console.log('服务器已开启'))

app.get('/api/test', async (req, res) => {
    // res.json({
    //     "name": "ceshi"
    // })
    try {
        const data = await getData()
        res.send(data)
    } catch (error) {
        res.send('404')
    }
})

function getData() {
    return new Promise((resolve, reject) => {
        const filePatch = path.join(__dirname, 'data.json')
        fs.readFile(filePatch, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data))
            }
        })
    })
}