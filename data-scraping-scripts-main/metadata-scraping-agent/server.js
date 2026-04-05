import express from 'express'
import { getPlaceDetailsById } from './services/place/getPlaceDetail.js'
import { getPlacesList } from './services/place/getPlaceLists.js';
import { connectDB } from './db-init/init.js';
import { addPlaceToDB } from './main.js';


const app = express();
const port = 3000;
const host = '0.0.0.0';

app.get('/', async(req, res) => {
    res.send("✅ API is running");
});

app.get('/test/main_pipeline', async(req, res) => {
    console.log("yeah")
    const location = {
        lat: 13.7385647,
        lng: 100.5321342
    };
    const radius = 2000;

    const response = await addPlaceToDB(location, radius);

    res.send(response);
})

app.get('/test/surround_area', async(req, res) => {
    const location = {
        lat: 13.7385647,
        lng: 100.5321342
    };
    const radius = 2000;

    const response = await getPlacesList(location, radius);
    res.send(response);
});

app.get('/test/detail/:id', async(req, res) => {
    try {
        const id = req.params.id;

        if (!id) {
            throw new Error("Don't provide Query!");
        }

        const dataDetail = await getPlaceDetailsById(id);
        res.send(dataDetail)
    } catch (e) {
        console.error("Error:", e);
    }
})


async function startServer() {
    try {
        await connectDB();
        app.listen(port, host, () => {
            console.log(`🚀 App listening on http://${host}:${port}`);
        });
    } catch (err) {
        console.error("❌ Failed to start server:", err);
        process.exit(1);
    }
}

startServer();