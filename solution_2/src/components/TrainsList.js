import React from 'react';
import { Link } from 'react-router-dom';

const TrainsList = ({ trains }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Train List</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Train Name</th>
              <th className="border p-2">Train Number</th>
              <th className="border p-2">Departure Time</th>
              <th className="border p-2">Seats Available (Sleeper)</th>
              <th className="border p-2">Seats Available (AC)</th>
              <th className="border p-2">Price (Sleeper)</th>
              <th className="border p-2">Price (AC)</th>
              <th className="border p-2">Delayed By (min)</th>
            </tr>
          </thead>
          <tbody>
            {trains.map(train => (
              <tr
                key={train.trainNumber}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="border p-2">
                  <Link
                    to={`/train/${train.trainNumber}`}
                    className="text-blue-500 underline"
                  >
                    {train.trainName}
                  </Link>
                </td>
                <td className="border p-2">{train.trainNumber}</td>
                <td className="border p-2">
                  {train.departureTime.Hours}:
                  {train.departureTime.Minutes < 10
                    ? '0' + train.departureTime.Minutes
                    : train.departureTime.Minutes}
                </td>
                <td className="border p-2">{train.seatsAvailable.sleeper}</td>
                <td className="border p-2">{train.seatsAvailable.AC}</td>
                <td className="border p-2">{train.price.sleeper}</td>
                <td className="border p-2">{train.price.AC}</td>
                <td className="border p-2">{train.delayedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrainsList;
