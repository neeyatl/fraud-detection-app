const router = require('express').Router()

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

module.exports = router