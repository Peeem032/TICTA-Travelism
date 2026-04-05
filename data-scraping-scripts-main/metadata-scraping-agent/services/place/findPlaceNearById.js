import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from '../../config/config.js';

export async function queryNearbyLocation(location, radius, nextPageToken) {
    try {
        if (!location.lat || !location.lng) {
            throw new Error("Location does not provide!");
        }
        if (!radius) {
            throw new Error("Radius does not provide!");
        }

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.lat},${location.lng}&radius=${radius}&key=${GOOGLE_MAPS_API_KEY}${
            nextPageToken ? `&pagetoken=${nextPageToken}` : ""
        }`;

        const response = await axios.get(url);

        const placeIds = response.data.results.map(place => place.place_id);
        const apiNextPageToken = response.data.next_page_token || null;

        return {
            placeIds,
            nextPageToken: apiNextPageToken
        };

    } catch (e) {
        console.error("Error", e);
        return { placeIds: [], nextPageToken: null };
    }
}