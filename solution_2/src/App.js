import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainsList from './components/TrainsList';
import TrainPage from './components/TrainPage';
import { fetchAuthToken, fetchTrains } from './api';

const App = () => {
  const [trains, setTrains] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    fetchAuthToken().then(token => {
      if (token) {
        setAccessToken(token);
        fetchTrains(token).then(trainsData => {
          setTrains(trainsData);
        });
      }
    });
  }, []);

  return (
    <Router>
      {/* <div className="container mx-auto p-4"> */}
        <Routes>
          <Route path="/" element={<TrainsList trains={trains} />}/>
            {/* <TrainsList trains={trains} />
          </Route> */}
          <Route path="/train/:trainNumber" element={<TrainPage />}/>
            
          {/* </Route> */}
        </Routes>
      {/* </div> */}
    </Router>
  );
};

export default App;
