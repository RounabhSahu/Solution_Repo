// components/TrainList.js
import React from 'react';
import { Link } from 'react-router-dom';

const TrainsList = ({ trains }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Train List</h1>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber} className="mb-2">
            <Link to={`/train/${train.trainNumber}`} className="text-blue-500 underline">
              {train.trainName} ({train.trainNumber})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainsList;
