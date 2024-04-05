//Timer incremention
const timerDisplay = document.getElementById('counter');
let timerCount = 0;

function updateTimer() {
    timerCount++;
    timerDisplay.textContent = timerCount;
}

setInterval(updateTimer, 1000);

//Counter Increment and Decrement
const counterDisplay = document.getElementById('counter');
let counterValue = 0;

document.getElementById('plus').addEventListener('click', () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
});

document.getElementById('minus').addEventListener('click', () => {
    counterValue--;
    counterDisplay.textContent = counterValue;
});

//Like Button Functionality
const likeButton = document.getElementById('heart');
const likeCountDisplay = document.getElementById('like-count');
let likeCount = 0;

likeButton.addEventListener('click', () => {
    likeCount++;
    likeCountDisplay.textContent = likeCount;
});

//Pause/Resume Button
const pauseButton = document.getElementById('pause');
let isPaused = false;

pauseButton.addEventListener('click', () => {
    if (isPaused) {
        isPaused = false;
        pauseButton.textContent = 'Pause';
        // Resume timer and enable buttons
    } else {
        isPaused = true;
        pauseButton.textContent = 'Resume';
        // Pause timer and disable buttons
    }
});

//Comment Submission
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');

document.getElementById('comment-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const commentText = commentInput.value;
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
    commentInput.value = '';
});
