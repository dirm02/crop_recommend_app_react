import React, { useState } from 'react';
import CInputCard from '../componets/CInputCard';
import axios from 'axios';


const BASE_URL = 'http://localhost:8000'

const PPredict = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [nitrogen, setNitrogen] = useState(0);
    const [phosphorous, setPhosphorous] = useState(0);
    const [potassium, setPotassium] = useState(0);
    const [ph, setPh] = useState(0);

    const [result, setResult] = useState(null);

    // Zip code for location: K2A1W1
    // const startDate = '2021-10-19T13:59:00'
    // const endDate = '2021-10-19T13:59:00'

    const fetchData = async () => {
        let url = ''
        try {
            url = `${BASE_URL}/predict`;
            const payload = {
                nitrogen,
                phosphorous,
                potassium,
                ph,
                location,
                date,
            };

            console.log(url)
            const response = await axios.post(url, payload);
            setResult(response.data.payload);
            console.log(response.data.payload); //You can see all the weather data in console log
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    const handleLocationInputChange = (e) => {
        setLocation(e.target.value);
    };
    const handleDateleInputChange = (e) => {
        setDate(e.target.value);
    };
    const handleNitrogenInputChange = (e) => {
        setNitrogen(e.target.value);
    };
    const handlePhorousInputChange = (e) => {
        setPhosphorous(e.target.value);
    };
    const handlePotassiumInputChange = (e) => {
        setPotassium(e.target.value);
    };
    const handlePhInputChange = (e) => {
        setPh(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchData();
    };

    return (
        <div className="container">
            <div className="input-container">
                <CInputCard
                    nitrogen={nitrogen}
                    phosphorous={phosphorous}
                    potassium={potassium}
                    ph={ph}
                    date={date}
                    location={location}

                    handleSubmit={handleSubmit}
                    handleNitrogenInputChange={handleNitrogenInputChange}
                    handlePhorousInputChange={handlePhorousInputChange}
                    handlePotassiumInputChange={handlePotassiumInputChange}
                    handlePhInputChange={handlePhInputChange}
                    handleDateInputChange={handleDateleInputChange}
                    handleLocationInputChange={handleLocationInputChange}
                />
            </div>

            <div className="result-container">
                {result ? (
                    <>
                        <div className='result-title'>
                            {`It's better to plant ${result['crop']} in ${date} in ${result['address']}.`}
                        </div>
                        <div className='result-image'>
                            <img style={{width: '100%', objectFit:'contain'}} src={`/crops/${result['crop']}.jpg`} alt="Recommended Icon" />
                        </div>
                    </>) :
                    (<>
                        <h2>What crop do I need to plant?</h2>
                        <p>No crop recommended...</p>
                    </>)
                }
            </div>
        </div>
    );
}

export default PPredict;