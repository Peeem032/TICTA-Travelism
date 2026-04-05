import axios from "axios";
import { GOOGLE_MAPS_API_KEY } from '../../config/config.js'

/**
 * Get all available fields for a place
 * @param {string} placeId
 * @returns {object} place details
 */

export async function getPlaceDetailsById(placeId) {
    if (!GOOGLE_MAPS_API_KEY) {
        throw new Error("API key is unload or might be unconfig!");

    }

    const fields = [
        "address_component",
        "adr_address",
        "alt_id",
        "formatted_address",
        "formatted_phone_number",
        "geometry",
        "icon",
        "id",
        "name",
        "permanently_closed",
        "photo",
        "place_id",
        "plus_code",
        "scope",
        "type",
        "url",
        "utc_offset",
        "vicinity",
        "website",
        "opening_hours",
        "rating",
        "reviews",
        "user_ratings_total",
    ].join(",");

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=${fields}&key=${GOOGLE_MAPS_API_KEY}`;


    // console.log(url);
    const response = await axios.get(url);
    const data = response.data;

    console.log('data', data);

    if (data.status !== "OK") {
        throw new Error(`Google Places API error: ${data.status}`);
    }

    return data.result;
}