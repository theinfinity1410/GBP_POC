const axios = require("axios");
require("dotenv").config(); 

const ACCESS_TOKEN = process.env.ACCESS_TOKEN; 
const BUSINESS_ACCOUNT_ID = process.env.BUSINESS_ACCOUNT_ID;

const API_BASE_URL = `https://mybusiness.googleapis.com/v4/accounts/${BUSINESS_ACCOUNT_ID}/locations`;

const getReviews = async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/reviews`, {
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching reviews:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch reviews" });
    }
};

const replyToReview = async (req, res) => {
    const { reviewId, replyText } = req.body;
    if (!reviewId || !replyText) {
        return res.status(400).json({ error: "Review ID and reply text are required" });
    }

    try {
        const response = await axios.post(
            `${API_BASE_URL}/reviews/${reviewId}/reply`,
            { comment: replyText },
            { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }
        );

        res.json({ success: "Reply posted successfully", data: response.data });
    } catch (error) {
        console.error("Error posting reply:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to post reply" });
    }
};

module.exports = { getReviews, replyToReview };
