const express = require('express')
const app = express()
const router = express.Router()

router.get('/', (req, res)=>{
    return res.render('9dolor3')
})

router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === process.env.lvel1key) {
        res.redirect('/inc8idunt6')
    }else{
        res.redirect('/9dolor3')
    }
})

module.exports = router