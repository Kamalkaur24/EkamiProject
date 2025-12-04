// routes/OrderRouter.js
const router = require("express").Router();
const ensureAuthenticated = require("../middleware/Auth");
const {
    createOrder,
    getMyOrders,
    getOrderById,
} = require("../controllers/OrderController");

// Place order
router.post("/", ensureAuthenticated, createOrder);

// Get all orders of logged-in user
router.get("/get_orders", ensureAuthenticated, getMyOrders);

// Get single order
router.get("/:id", ensureAuthenticated, getOrderById);

module.exports = router;
