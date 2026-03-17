document.getElementById('submit-btn').addEventListener('click', function() {
    var input = document.getElementById('team-input').value.toLowerCase();
    if (input === 'shamrocks') {
        document.getElementById('correct-sound').play();
        document.getElementById('message').textContent = 'Correct! You found the pot of gold!';
        setTimeout(function() {
            window.location.href = 'final.html';
        }, 2000);
    } else {
        document.getElementById('incorrect-sound').play();
        document.getElementById('message').textContent = 'Incorrect. Try again.';
    }
});

function toggleBubble() {
    const bubble = document.getElementById('ai-bubble');
    bubble.style.display = bubble.style.display === 'block' ? 'none' : 'block';
}