var chatLog = document.getElementById('chat-log');

document.getElementById('ask-btn').addEventListener('click', function() {
    var question = document.getElementById('question-input').value.toLowerCase();
    var response;
    if (question.includes('password')) {
        response = 'The password is LuckyCharm.';
    } else {
        response = 'I am the AI leprechaun. Ask me about the gold!';
    }
    chatLog.innerHTML += '<p>You: ' + document.getElementById('question-input').value + '</p>';
    chatLog.innerHTML += '<p>AI Leprechaun: ' + response + '</p>';
    document.getElementById('question-input').value = '';
});

document.getElementById('submit-btn').addEventListener('click', function() {
    var input = document.getElementById('password-input').value;
    if (input === 'LuckyCharm') {
        document.getElementById('correct-sound').play();
        document.getElementById('message').textContent = 'Correct! Proceeding to next room.';
        setTimeout(function() {
            window.location.href = 'room4.html';
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