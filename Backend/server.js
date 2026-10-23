import app from './src/app.js'

import { connecttoDB } from './src/config/db.js';

try {
    await connecttoDB();
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
} catch (error) {
    console.error(error.message);
}
