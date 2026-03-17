document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('victory-sound').play();
    const endTime = Date.now();
    const playerName = localStorage.getItem('playerName');
    const startTime = parseInt(localStorage.getItem('startTime'));
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    document.getElementById('time-display').textContent = `Time taken: ${timeTaken} seconds`;

    // Save to leaderboard
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    leaderboard.push({ name: playerName, time: timeTaken });
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // Display leaderboard
    const list = document.getElementById('final-leaderboard');
    leaderboard.sort((a, b) => a.time - b.time).slice(0, 5).forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name}: ${entry.time}s`;
        list.appendChild(li);
    });
});

function toggleBubble() {
    const bubble = document.getElementById('ai-bubble');
    bubble.style.display = bubble.style.display === 'block' ? 'none' : 'block';
}