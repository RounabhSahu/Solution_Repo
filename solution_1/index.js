const express = require('express');
const axios = require('axios');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 8008;

app.use(express.json());
app.use(morgan('dev'));

const fetchNumbers = async (url) => {
    try {
        const start = performance.now();
        const response = await axios.get(url, { timeout: 490 });
        const end = performance.now();
        if (response.status === 200) {
            const data = response.data;
            console.log(`Fetched from ${url} in ${(end - start).toFixed(2)} ms`);
            if (data.numbers && Array.isArray(data.numbers)) {
                return data.numbers;
            }
        }
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            console.log(`Fetching from ${url} timed out`);
        } else {
            console.error(`Error fetching from ${url}:`, error.message);
        }
    }
    return [];
};

app.get('/numbers', async (req, res, next) => {
    try {
        const urls = Array.isArray(req.query.url) ? req.query.url : [req.query.url];

        // parallel requestes to improve response time
        const promises = urls.map(url => fetchNumbers(url));
        const results = await Promise.all(promises);

        const allNumbers = results.reduce((acc, result) => {
            return acc.concat(result);
        }, []);

        const uniqueNumbers = [...new Set(allNumbers)];
        const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);

        res.json({ numbers: sortedNumbers });
    } catch (error) {
        next(error);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
