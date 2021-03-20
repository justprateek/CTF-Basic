const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('inc8idunt6')
})
router.post('/', (req, res)=>{
    const userKey = req.body.key
    if (userKey === process.env.lvel2key) {
        res.redirect('/ull4amco')
    }else{
        res.redirect('/inc8idunt6')
    }
})

module.exports = router