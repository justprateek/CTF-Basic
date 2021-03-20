const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('ull4amco')
})
router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === process.env.lvel3key) {
        res.redirect('/natus3')
    }else{
        res.redirect('/ull4amco')
    }
})

module.exports = router