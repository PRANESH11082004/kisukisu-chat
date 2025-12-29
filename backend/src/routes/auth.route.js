import express from 'express';
const router = express.Router();
import { signup } from "../controller/auth.controller.js";

router.post("/signup",signup);

router.get("/login",(req,res) => {
    res.send("kisukisuku app ku login page ready !!! ");
});

router.get("/logout",(req,res) => {
    res.send("kisukisuku logout !!! ");
})

export default router;