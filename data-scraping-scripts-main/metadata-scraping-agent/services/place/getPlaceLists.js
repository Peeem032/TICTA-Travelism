import { queryNearbyLocation } from "./findPlaceNearById.js";

export async function getPlacesList(location, radius) {
    try {
        let places_id = [];
        let nextPageToken = null;

        while (true) {
            const { placeIds, nextPageToken: responseToken } =
            await queryNearbyLocation(location, radius, nextPageToken);

            if (placeIds && placeIds.length > 0) {
                places_id.push(...placeIds);

                if (responseToken) {
                    nextPageToken = responseToken;
                    await new Promise(resolve => setTimeout(resolve, 2000));
                } else {
                    console.log("No more pages.");
                    break;
                }
            } else {
                console.log("No data to add");
                break;
            }
        }

        console.log("Collected place_ids:", places_id.length);
        return places_id;

    } catch (e) {
        console.error("Get places detail error:", e);
    }
}