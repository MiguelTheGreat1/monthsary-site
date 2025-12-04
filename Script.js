// Set the date for your 1-year anniversary
const anniversaryDate = new Date('2026-04-05T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeLeft = anniversaryDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // ➤ NEW: Show days left below the timer
        document.getElementById('daysLeft').innerHTML =
            `Our anniversary is in <b>${days}</b> days ❤️`;
    } else {
        document.getElementById('timer').innerHTML = "It's here! Happy Anniversary!";
        document.getElementById('daysLeft').innerHTML = "I love you! ❤️";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
