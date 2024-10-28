import json

def print_json_shape(data, indent=0):
    """
    Recursively print the shape of a JSON object with its keys and types.
    """
    if isinstance(data, dict):
        for key, value in data.items():
            print(' ' * indent + f"{key}: {type(value).__name__}")
            # Recursively print nested dictionaries and lists
            if isinstance(value, (dict, list)):
                print_json_shape(value, indent + 4)
    elif isinstance(data, list) and data:
        print(' ' * indent + f"List of {type(data[0]).__name__}")
        # Only print shape of the first element if it's a nested structure
        print_json_shape(data[0], indent + 4)

# Load JSON data from a file
with open('ra_dump_2014-10-28', 'r') as file:
    json_data = json.load(file)

# Print the shape of the JSON data
print("JSON Shape:")
print_json_shape(json_data[0]['events'])

# print the first 10 events

for i in range(10):
    print(json_data[0]['events'][i])
    print("\n\n")

# # print event name (eventName), date (start), city (areaName)
# # and format the date to be only the date and not a timestamp
# for i in range(10):
#     event = json_data[0]['events'][i]
#     print(f"Event: {event['eventName']}")
#     print(f"Date: {event['start'].split('T')[0]}")
#     print(f"City: {event['areaName']}")
#     print("\n\n")

# format the date to be a year and month

for i in range(10):
    event = json_data[0]['events'][i]
    date = event['start'].split('T')[0]
    year, month, _ = date.split('-')
    print(f"Event: {event['eventName']}")
    print(f"Date: {year}-{month}")
    print(f"City: {event['areaName']}")
    print(f"Venue: {event['venueName']}")
    print("\n\n")

