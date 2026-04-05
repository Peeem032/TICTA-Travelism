import json
from pprint import pprint

# **
#   @params (Place Records in Google Maps API Format)
#   @out (Place Records in Travelism Format)
# **

def format_googleMapAPI_to_travelism_format(places_json_address='../places.json', as_json_string=False):
  # Load File from JSON
  with open(places_json_address, "r", encoding="utf-8") as f:
      data = json.load(f)

  formatted_records = []

  for place in data:
    record = {
      'metadata': {
        'name': place.get('name'),
        'formatted_address': place.get('formatted_address'), # full address of place
        'formatted_phone_number': place.get('formatted_phone_number'),
        'available': {
          'opening_hours': place.get('opening_hours')
        },
        'types': place.get('types'),
        'utc_offset': place.get('utc_offset'),
        'plus_code': place.get('plus_code'), # code place (google format)
        'geometry': place.get('geometry'),
        'url': place.get('url'), # google maps url to that place
        'photos': place.get('photos'),
        'vicinity': place.get('vicinity'),
        'place_id': place.get('place_id'),
        'address_components': place.get('address_components'), # parts of address detail
      },
      'opinion': {
        'rating': place.get('rating'),
        'user_ratings_total': place.get('user_ratings_total'),
      }
    }
    formatted_records.append(record)

  # Return JSON Format as Need
  if as_json_string:
      return json.dumps(formatted_records, ensure_ascii=False, indent=2)

  # Default Return List of Dict
  return formatted_records

# pprint(format_googleMapAPI_to_travelism_format()) # for development purpose