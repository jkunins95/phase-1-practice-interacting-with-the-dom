
// ---- Deliverables ---- //


// 1) See the timer increment every second once the page has loaded.
let count = 0;
let counter = document.querySelector("#counter");
let intervalID = 0;

function counterValue () {
    counter.innerText = count;
};

function incrementCounter() {
    count++;
    counterValue();
};

let startCounter = () => { 
    document.addEventListener("DOMContentLoaded", (e) => {
        intervalID = setInterval(incrementCounter, 1000)
    });
};

// 2) Manually increment and decrement the counter using the plus and minus buttons.
const plusBttn = document.querySelector("#plus");
plusBttn.addEventListener("click", incrementCounter);

const minusBttn = document.querySelector("#minus");
minusBttn.addEventListener("click", decrementCounter);

function decrementCounter() {
    count--;
    counterValue();
};

// 3) "Like" an individual number of the counter. I should see the count of the
//   number of "likes" associated with that number displayed.
const heartBttn = document.querySelector("#heart");
heartBttn.addEventListener("click", addLike);

const likes = document.querySelector(".likes");

function addLike() {
    const li = document.createElement("li");
    li.innerText = `${count} has been liked!`;
    likes.appendChild(li);
}

// 4) Pause the counter, which should:
//    [x] pause the counter
//    [x] disable all buttons except the pause button
//    [x] switch the label on the button from "pause" to "resume"
// 5) Click the "resume" button to restart the counter and re-enable the buttons.
let pauseBttn = document.querySelector("#pause");
let paused = false;

pauseBttn.addEventListener("click", pauseResume)

function pauseResume(e) {
    if(e.target.innerText === "pause") {
        clearInterval(intervalID)
        minusBttn.disabled = true;
        plusBttn.disabled = true;
        heartBttn.disabled = true;
        submitBttn.disabled = true;
        pauseBttn.textContent = "resume";
    } else {
        clearInterval(intervalID)
        intervalID = setInterval(() => {
            count += 1;
            counter.innerText = count
        }, 1000);
        minusBttn.disabled = false;
        plusBttn.disabled = false;
        heartBttn.disabled = false;
        submitBttn.disabled = false;
        pauseBttn.textContent = "pause";
    }
};

// 6) Leave comments on my gameplay, such as: "Wow, what a fun game this is."
let submitBttn = document.querySelector("#submit");

const commentForm = document.querySelector("#comment-form");
const commentInput = document.querySelector("#comment-input");
const commentList = document.querySelector("#list");

commentForm.addEventListener("submit", addComment);

function addComment(e) {
    e.preventDefault();
    const p = document.createElement("p");
    p.innerText = commentInput.value;
    commentList.appendChild(p);
};

// ----- Invoke the counter ----- //
startCounter();