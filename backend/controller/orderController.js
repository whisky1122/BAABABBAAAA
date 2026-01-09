import Order from "../model/orderModel.js";
import User from "../model/userModel.js";
import razorpay from 'razorpay'
import dotenv from 'dotenv'
dotenv.config()
const currency = 'inr'

let razorpayInstance = null;
const getRazorpayInstance = () => {
    if (!razorpayInstance) {
        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            throw new Error('Razorpay credentials not configured');
        }
        razorpayInstance = new razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
    }
    return razorpayInstance;
}

// for User
export const placeOrder = async (req, res) => {

    try {
        const { items, amount, address } = req.body;
        const userId = req.userId;
        const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new Order(orderData)
        await newOrder.save()

        await User.findByIdAndUpdate(userId, { cartData: {} })

        return res.status(201).json({ message: 'Order Place' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Order Place error' })
    }

}


export const placeOrderRazorpay = async (req, res) => {
    try {

        const { items, amount, address } = req.body;
        const userId = req.userId;
        const orderData = {
            items,
            amount,
            userId,
            address,
            paymentMethod: 'Razorpay',
            payment: false,
            date: Date.now()
        }

        const newOrder = new Order(orderData)
        await newOrder.save()

        const options = {
            amount: amount * 100,
            currency: currency.toUpperCase(),
            receipt: newOrder._id.toString()
        }
        await getRazorpayInstance().orders.create(options, (error, order) => {
            if (error) {
                console.log(error)
                return res.status(500).json(error)
            }
            res.status(200).json(order)
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}


export const verifyRazorpay = async (req, res) => {
    try {
        const userId = req.userId
        const { razorpay_order_id } = req.body
        const orderInfo = await getRazorpayInstance().orders.fetch(razorpay_order_id)
        if (orderInfo.status === 'paid') {
            await Order.findByIdAndUpdate(orderInfo.receipt, { payment: true });
            await User.findByIdAndUpdate(userId, { cartData: {} })
            res.status(200).json({
                message: 'Payment Successful'
            })
        }
        else {
            res.json({
                message: 'Payment Failed'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}






export const userOrders = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({ userId })
        return res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "userOrders error" })
    }

}





//for Admin

export const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.body;
        const userId = req.userId;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        if (order.userId !== userId) {
            return res.status(403).json({ message: "Not authorized to cancel this order" });
        }

        if (order.status !== 'Order Placed') {
            return res.status(400).json({ message: `Cannot cancel order in '${order.status}' status` });
        }

        order.status = 'Cancelled';
        await order.save();

        res.status(200).json({ message: "Order cancelled successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

export const allOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.status(200).json(orders)
    } catch (error) {
        console.log("allOrders error:", error)
        return res.status(500).json({ message: error.message || "adminAllOrders error" })
    }
}

export const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.body
        await Order.findByIdAndDelete(orderId)
        res.status(200).json({ message: "Order removed from admin panel" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const updateStatus = async (req, res) => {

    try {
        const { orderId, status } = req.body

        await Order.findByIdAndUpdate(orderId, { status })
        return res.status(201).json({ message: 'Status Updated' })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}