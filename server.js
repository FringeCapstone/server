const admin = require("firebase-admin");
const serviceAccountKey = "./serviceAccountKey.json";
const serviceAccount = admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

const bodyParser = require("body-parser")
const express = require('express');
const app = express();

const journalsRoutes = require("./routes/journalsRoutes");


app.use(bodyParser.urlencoded({ extended: false })); //middleware
app.use(journalsRoutes.routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})
