import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/api/sms/incoming", (req, res) => {
    const { from, message, secret } = req.body;

    // Optional: Check secret
    if (secret !== "12345") {
        return res.status(403).json({ success: false, error: "Invalid secret" });
    }

    console.log("📩 SMS Received:");
    console.log("From:", from);
    console.log("Message:", message);

    // Respond to SMSSync
    res.json({
        payload: { success: true, error: null }
    });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
