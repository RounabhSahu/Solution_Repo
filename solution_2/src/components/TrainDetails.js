import React from 'react';

const TrainDetails = ({ train }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-2xl font-bold mb-4">Train Details</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Name:</p>
          <p className="text-xl">{train.trainName}</p>
        </div>
        <div>
          <p className="text-gray-600">Number:</p>
          <p className="text-xl">{train.trainNumber}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-600">Departure Time:</p>
          <p className="text-xl">
            {train.departureTime.Hours}:{train.departureTime.Minutes}
          </p>
        </div>
        <div>
          <p className="text-gray-600">Seats Available (Sleeper):</p>
          <p className="text-xl">{train.seatsAvailable.sleeper}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-600">Seats Available (AC):</p>
          <p className="text-xl">{train.seatsAvailable.AC}</p>
        </div>
        <div>
          <p className="text-gray-600">Price (Sleeper):</p>
          <p className="text-xl">{train.price.sleeper}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-600">Price (AC):</p>
          <p className="text-xl">{train.price.AC}</p>
        </div>
        <div>
          <p className="text-gray-600">Delayed By (min):</p>
          <p className="text-xl">{train.delayedBy}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainDetails;
