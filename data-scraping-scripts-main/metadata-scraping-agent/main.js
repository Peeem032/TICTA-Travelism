import { getPlacesList } from "./services/place/getPlaceLists.js";
import { getPlaceDetailsById } from "./services/place/getPlaceDetail.js";
import mongoose, { connectDB } from './db-init/init.js';

export async function addPlaceToDB(location, radius) {
    try {
        await connectDB();
        const placesCollection = mongoose.connection.db.collection("places");

        const places_list = await getPlacesList(location, radius);

        let successCount = 0;
        let failCount = 0;

        for (let i = 0; i < places_list.length; i++) {
            try {
                const placeDetail = await getPlaceDetailsById(places_list[i]);
                await placesCollection.insertOne(placeDetail);
                console.log(`✅ Inserted place ${i + 1}: ${placeDetail.name || "No Name"}`);
                successCount++;
            } catch (err) {
                console.error(`❌ Failed to insert place ${i + 1}:`, err.message);
                failCount++;
            }
        }

        console.log(`\nSummary: ${successCount} inserted, ${failCount} failed.`);
        return { status: "ok", insertedCount: successCount, failedCount: failCount };

    } catch (e) {
        console.error("Main Pipeline Error:", e.message);
        return { status: "error", message: e.message };
    }
}