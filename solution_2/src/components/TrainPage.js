import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrainDetails from './TrainDetails';
import { fetchTrainDetails } from '../api';

const TrainPage = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    fetchTrainDetails(trainNumber).then(response => {
      setTrain(response);
    });
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return <TrainDetails train={train} />;
};

export default TrainPage;
