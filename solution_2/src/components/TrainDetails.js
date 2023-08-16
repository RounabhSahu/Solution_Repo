// components/TrainDetails.js
import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Train Details</h1>
      <p>Name: {train.trainName}</p>
      <p>Number: {train.trainNumber}</p>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>

    </div>
  );
};

export default TrainDetails;
