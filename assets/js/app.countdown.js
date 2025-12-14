// --- Configuration ---
// Target Date: 17 Jan 2026 +7 UTC. The 'GMT+0700' handles the time zone offset.
const TARGET_DATE_STRING = "January 17, 2026 00:00:00 GMT+0700";
const TARGET_DATE = new Date(TARGET_DATE_STRING).getTime();

// --- DOM Element Selectors (using new IDs) ---
const daysEl = document.getElementById("days-counter");
const hoursEl = document.getElementById("hours-counter");
const minsEl = document.getElementById("mins-counter");
const secsEl = document.getElementById("secs-counter");

// Helper function to update a single DOM element
function updateDisplay(element, value, pad = false) {
    if (element) {
        if (pad) {
            // Pad start ensures numbers like '5' become '05'
            // element.innerText = String(value).padStart(2, '0');
            element.innerText = String(value);

        } else {
            element.innerText = value;
        }
    }
}

// The core real-time countdown logic
function countdown() {
    // Get the current time in milliseconds
    const now = new Date().getTime();
    
    // Calculate the remaining distance in milliseconds
    const distance = TARGET_DATE - now; 

    // If the countdown is finished
    if (distance < 0) {
        clearInterval(timerInterval);
        // Set all counters to '00' or '0'
        updateDisplay(daysEl, 0);
        updateDisplay(hoursEl, 0, true);
        updateDisplay(minsEl, 0, true);
        updateDisplay(secsEl, 0, true);
        
        // Optional: You can add an alert or a message here
        // document.querySelector(".count-down-wrapper").innerHTML = "<h1>Event Has Begun!</h1>";
        return;
    }

    // --- Time calculations (Constants for conversion) ---
    const MS_PER_SECOND = 1000;
    const MS_PER_MINUTE = MS_PER_SECOND * 60;
    const MS_PER_HOUR = MS_PER_MINUTE * 60;
    const MS_PER_DAY = MS_PER_HOUR * 24;

    const days = Math.floor(distance / MS_PER_DAY);
    const hours = Math.floor((distance % MS_PER_DAY) / MS_PER_HOUR);
    const minutes = Math.floor((distance % MS_PER_HOUR) / MS_PER_MINUTE);
    const seconds = Math.floor((distance % MS_PER_MINUTE) / MS_PER_SECOND);

    // --- Update the HTML elements (real-time update) ---
    updateDisplay(daysEl, days);
    updateDisplay(hoursEl, hours, true); // Pad with '0'
    updateDisplay(minsEl, minutes, true); // Pad with '0'
    updateDisplay(secsEl, seconds, true); // Pad with '0'
}

// 1. Initial call to set the display immediately on page load
countdown();

  /* 14. counterUp*/
  $('.counter').counterUp({
    delay: 10,
    time: 2000,
  });

// 2. Set up the interval to call the function every 1000ms (1 second)
// This is what makes the countdown update in real-time.
const timerInterval = setInterval(countdown, 1000);