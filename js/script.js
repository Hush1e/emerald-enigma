let playerName = '';
let startTime = 0;

document.getElementById('qr-code').addEventListener('click', function() {
    playerName = prompt('Enter your name for the leaderboard:');
    if (playerName) {
        startTime = Date.now();
        localStorage.setItem('playerName', playerName);
        localStorage.setItem('startTime', startTime);
        // document.getElementById('start-sound').play(); // Play start sound - commented out as audio files are placeholders
        window.location.href = 'room1.html';
    }
});

// Load leaderboard - but since no leaderboard div, perhaps remove or keep for future
// function loadLeaderboard() { ... } - removed since no leaderboard on index

function toggleBubble() {
    const bubble = document.getElementById('ai-bubble');
    bubble.style.display = bubble.style.display === 'block' ? 'none' : 'block';
}

loadLeaderboard();