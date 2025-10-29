const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/User");
const paymentRoutes = require("./routes/Payments");
const profileRoutes = require("./routes/Profile");
const CourseRoutes = require("./routes/Course");

const database = require("./config/database");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const fileUpload = require("express-fileupload");
const { cloudnairyconnect } = require("./config/cloudinary");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
database.connect();

app.use(express.json());
app.use(cookieParser());


let corsOrigins;
try {
  corsOrigins = JSON.parse(process.env.CORS_ORIGIN);
} catch (error) {
  console.error("Error parsing CORS_ORIGIN:", error);
  corsOrigins = []; // Fallback to an empty array or a default value
}

app.use(
  cors({
    origin: corsOrigins,
    credentials: true,
    maxAge: 14400,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);

cloudnairyconnect();



// // ✅ Serve static files from "static/dist"
// app.use(express.static(path.join(__dirname, 'static', 'dist')));

// // ✅ Fallback route — send index.html for root
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'static', 'dist', 'index.html'));
// });


app.get('/', (req, res) => {
 res.send('KYO RE MADERCHOD YAHA KYA KAR RAHA HAI?');
});
app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/course", CourseRoutes);
app.use("/api/v1/contact", require("./routes/ContactUs"));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
