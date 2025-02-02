function fetchSignal() {
    // Fetch the trading signals from the backend API
    fetch('https://trading-signal-generator.onrender.com/api/get-trading-signals')
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            // Display the trading signals
            if (data && data.length > 0) {
                // Select a random signal from the data
                const randomSignal = data[Math.floor(Math.random() * data.length)];
                const signalDetails = `Signal: ${randomSignal.signal}, Price: ${randomSignal.price}`;
                document.getElementById('signal-details').innerText = signalDetails;
            } else {
                document.getElementById('signal-details').innerText = 'No signals available.';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('signal-details').innerText = 'Error fetching signal.';
        });
}
