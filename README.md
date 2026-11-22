# Emerald Enigma Cyber Escape

[Play the game](https://hush1e.github.io/emerald-enigma/) · [Portfolio](https://hush1e.github.io/experience-design.html#emerald)

A five-room St. Patrick’s Day cybersecurity and AI-awareness escape game designed by Norma DePriest. Inspect a code clue, reverse a Caesar cipher, question a scripted leprechaun, report a phishing message and solve the final riddle.

## Play and privacy

Start with an optional nickname. There is no login, countdown or external API. Two hints per room, retry feedback, pause and optional sound support the complete path. Inputs remain in the page. Completed names and times are stored only in this browser; use a nickname. Reloading resets the current run. Blocked storage does not prevent completion.

The chatbot is rule-based, not a live AI model. The Caesar cipher is a puzzle, not secure encryption. Completion records gameplay, not certification or evaluated workplace readiness.

## Maintain

`index.html`, `game.js` and `game.css` are the complete static application. Serve the repository with any static server. GitHub Pages publishes `master` at the repository root. Legacy room URLs return visitors to the new entry page rather than allowing incomplete runs to create leaderboard records.

Release repairs: replaced the placeholder QR entry and missing image/audio assets; removed the undefined leaderboard call; made answers case/whitespace tolerant; replaced unsafe chat HTML insertion with text nodes; made the phishing URL inert; gated progression and completion; protected local records against malformed or unavailable storage; added keyboard/touch controls, responsive layout, hints, feedback and a final debrief.

Pure input/storage checks: `node test.mjs`. Browser tests additionally cover every room, wrong answers, chat, pause, completion and restart.
