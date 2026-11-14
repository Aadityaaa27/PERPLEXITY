import "dotenv/config";
import app from "./src/app.js";
import connectTodb from "./src/config/database.js";

connectTodb();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});