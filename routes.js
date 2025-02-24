const express = require("express");
const { getReviews, replyToReview } = require("./controllers");

const router = express.Router();

router.get("/get-review", getReviews);

router.post("/reply", replyToReview);

module.exports = router;
