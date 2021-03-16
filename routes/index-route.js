const router = require('express').Router()

const fs = require('fs')

router.get("", (req, res) => {
    const data = {
        records: [
            {
                rno: 1,
                ch: 233,
                os: "Android",
                dev: "Samsung Galaxy Note 5+",
                app: "Snapchat",
                ip: "123.423.543.532",
                clk_time: 1234
            }
        ]
    }
    res.render("index", data);
});

router.get("/data", (req, res) => {
    fs.readFile('C:\\Users\\Neeyat\\Downloads\\Data.csv', (err, data) => { 
        
        if( err ) 
            throw err;
        else {
            const fileContent = {records: []}

            const arrayData = data.toJSON().data

            for(let i = 0; i < arrayData.length; i++){
                const rno = arrayData[i++]
                const ch = arrayData[i++]
                const os = arrayData[i++]
                const dev = arrayData[i++]
                const app = arrayData[i++]
                const ip = arrayData[i++]
                const clk_time = arrayData[i]
                
                fileContent.records.push(
                    {
                        rno: rno,
                        ch: ch,
                        os: os,
                        dev: dev,
                        app: app,
                        ip: ip,
                        clk_time: clk_time
                    }
                )
                
            }

            res.render("index", fileContent);
        }
    })
    
})

module.exports = router