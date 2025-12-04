// Set the date for your 1-year anniversary (replace with your actual date)
const anniversaryDate = new Date('2024-12-5T00:00:00'); // Example: Dec 31, 2024. Change this!
function updateCountdown() {
    const now = new Date();
    const timeLeft = anniversaryDate - now;
    
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        document.getElementById('timer').innerHTML = "It's here! Happy Anniversary!";
    }
}
setInterval(updateCountdown, 1000);
updateCountdown();
