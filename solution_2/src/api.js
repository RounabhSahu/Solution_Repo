import axios from 'axios';

const fetchAuthToken = async () => {
  try {
    console.log(process.env.REACT_APP_API_KEY);
    const response = await axios.post('http://20.244.56.144/train/auth', JSON.parse(process.env.REACT_APP_API_KEY));
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching auth token:', error);
    return null;
  }
};

const fetchTrains = async (accessToken) => {
  try {
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trains:', error);
    return [];
  }
};

const fetchTrainDetails = async (trainNumber) => {
  const accessToken = await fetchAuthToken();

  if (accessToken) {
    try {
      const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching train details:', error);
    }
  }

  return null;
};

export { fetchAuthToken, fetchTrains, fetchTrainDetails };
