import express from 'express';
const router = express.Router();

router.get("/login",(req,res) => {
    res.send("kisukisuku app ku login page!!! ");
})

router.get("/signup",(req,res) => {
    res.send("kisukisuku app ku signup page ready !!! ");
})
router.get("/logout",(req,res) => {
    res.send("kisukisuku logout !!! ");
})

export default router;