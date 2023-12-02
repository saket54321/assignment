import express from "express";
import foodcontrolleer from "../fooddelivery.controller/foodcontroller.js";
const router=express.Router();
router.post('/place-order',foodcontrolleer.orderplace);
router.get('/order-status/:orderId',foodcontrolleer.orderstatus);
router.put('/update-delivery-status/:orderId',foodcontrolleer.updatestaus);



export default router;