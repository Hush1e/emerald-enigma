document.getElementById('submit-btn').addEventListener('click', function() {
    var input = document.getElementById('password-input').value;
    if (input === 'ShamrockKey') {
        document.getElementById('correct-sound').play();
        document.getElementById('message').textContent = 'Correct! Proceeding to next room.';
        setTimeout(function() {
            window.location.href = 'room5.html';
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