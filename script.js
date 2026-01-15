// Human Diseases (मानव रोग) - Quiz Functions

function checkAns(btn, isCorrect, msg) {
    const parent = btn.parentElement.parentElement;
    const oldFeedback = parent.querySelector('.feedback');
    if (oldFeedback) oldFeedback.remove();

    const feedback = document.createElement('div');
    feedback.className = 'feedback mt-2 p-2 rounded text-xs font-bold ' + (isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800');
    feedback.innerText = (isCorrect ? '✅ सही! ' : '❌ गलत! ') + msg;
    parent.appendChild(feedback);

    if (isCorrect) {
        btn.style.backgroundColor = '#c6f6d5';
        btn.style.borderColor = '#38a169';
    } else {
        btn.style.backgroundColor = '#fed7d7';
        btn.style.borderColor = '#e53e3e';
    }
}

function toggleFill(btn) {
    const row = btn.parentElement;
    const ans = row.querySelector('.fill-ans');
    if (ans.classList.contains('hidden')) {
        ans.classList.remove('hidden');
        btn.innerText = '🙈';
    } else {
        ans.classList.add('hidden');
        btn.innerText = '👁️';
    }
}
