function fetchSignal() {
    // Simulate fetching a new signal
    const signals = [
        'Buy EUR/USD at 1.2100, Target: 1.2200, Stop Loss: 1.2050',
        'Sell GBP/USD at 1.3450, Target: 1.3350, Stop Loss: 1.3500',
        'Buy USD/JPY at 110.50, Target: 111.00, Stop Loss: 110.20'
    ];

    const randomSignal = signals[Math.floor(Math.random() * signals.length)];
    document.getElementById('signal-details').innerText = randomSignal;
}
