from pydantic import BaseModel
from fastapi import FastAPI, Request
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import date
from utils import pred_crop, pred_precip, pred_weather

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Welcome to use our crop recommendation api!"}


class Inputs(BaseModel):
    nitrogen: float
    phosphorous: float
    potassium: float
    ph: float
    location: str
    date: str


@app.post("/predict/")
async def predict(inputs: Inputs):
    # print(inputs)
    nitrogen = inputs.nitrogen
    phosphorous = inputs.phosphorous
    potassium = inputs.potassium
    ph = inputs.ph
    location = inputs.location
    date = inputs.date

    try:
        temp, humidity, precip, address = pred_weather.get_data(location, date)

        prediction = pred_crop.predict_crop(
            nitrogen, phosphorous, potassium, temp, humidity, ph, precip)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

    return {"payload": {"crop": prediction[0], "address": address}}