import React from 'react';
import './InputCard.css';

function InputCard({ 
  nitrogen, phosphorous, potassium, ph, location, date, 
  handleSubmit, handleNitrogenInputChange, handlePhorousInputChange, handlePotassiumInputChange, handlePhInputChange, handleLocationInputChange, handleDateInputChange
}) {
  return (
    <div className="input-card">
      <div className="input-main">
        <div className="input-icon">
          <img style={{height: '100%', objectFit:'contain'}} src={`/agriIcons/planting.png`} alt="Agriculture Icon" />
        </div>
        <div className="title">Soil condition</div>
      </div>
      <div className="input-details">
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="input-detail-item">
                <p className='label'>Nitrogen (ppm): </p>
                <input type="number" id="nitrogen" name="nitrogen" placeholder="Enter the nitrogen content" value={nitrogen} onChange={handleNitrogenInputChange} required />
              </div>
              <div className="input-detail-item">
                <p className='label'>Phosphorous (ppm): </p>
                <input type="number" id="phosphorous" name="phosphorous" placeholder="Enter the phosphorous content" value={phosphorous} onChange={handlePhorousInputChange} required />
              </div>
            </div>
            <div className='row'>
              <div className="input-detail-item">
                <p className='label'>Potassium (ppm): </p>
                <input type="number" id="potassium" name="potassium" placeholder="Enter the potassium content" value={potassium} onChange={handlePotassiumInputChange} required />
              </div>
              <div className="input-detail-item">
                <p className='label'>pH: </p>
                <input type="number" id="ph" name="ph" placeholder="Enter the pH value" value={ph} onChange={handlePhInputChange} required />
              </div>
            </div>
            <div className='row'>
              <div className="input-detail-item">
                <p className='label'>Location: </p>
                <input type="text" id="location" name="location" placeholder="Enter the location" value={location} onChange={handleLocationInputChange} required />
              </div>
              <div className="input-detail-item">
                <p className='label'>Date: </p>
                <input type="date" id="date" name="date" placeholder="Enter the date to predict" value={date} onChange={handleDateInputChange} required />
              </div>
            </div>
            <div style={{display: 'inline-block'}}>
              <button className="btn-recommend" type="submit">Recommend</button>
            </div>
          </form>
        {/* ... other details */}
      </div>
    </div>
  );
}

export default InputCard;