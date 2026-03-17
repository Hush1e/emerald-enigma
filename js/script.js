let playerName = '';
let startTime = 0;

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    playerName = document.getElementById('player-name').value;
    startTime = Date.now();
    localStorage.setItem('playerName', playerName);
    localStorage.setItem('startTime', startTime);
    // document.getElementById('start-sound').play(); // Play start sound - commented out as audio files are placeholders
    window.location.href = 'room1.html';
});

// Load leaderboard
function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';
    leaderboard.sort((a, b) => a.time - b.time).slice(0, 5).forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.time}s`;
        list.appendChild(li);
    });
}

function toggleBubble() {
    const bubble = document.getElementById('ai-bubble');
    bubble.style.display = bubble.style.display === 'block' ? 'none' : 'block';
}

loadLeaderboard();