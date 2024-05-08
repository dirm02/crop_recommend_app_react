import requests

API_KEY = '3KAJKHWT3UEMRQWF2ABKVVVZE'
base_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

def get_data(location, date=None):    
    url = url = f"{base_url}{location}/{date}?key={API_KEY}&include=days&elements=datetime,temp,humidity,precip"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    if response.status_code != 200:
        print(response.text)
        raise Exception(f"Unable to get the temperature for {location}")

    data = response.json()
    humidity = data['days'][0]['humidity']
    temp = data['days'][0]['temp']
    precip = data['days'][0]['precip']
    address = data['resolvedAddress']
    return (temp, humidity, precip, address)