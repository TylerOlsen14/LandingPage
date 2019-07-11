// DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Show time every second
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

// 12hr Format
  hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBGGreet() {
  let today = new Date(),
    hour = today.getHours();
  if(hour < 12){
    // Moringing
    document.body.style.backgroundImage = "url('../assets/morning.jpg')";
    greeting.textContent = 'Good Morning';
  } else if(hour < 18){
    // Afternoon
    document.body.style.backgroundImage = "url('../assets/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon';
  } else {
    // Evening
    document.body.style.backgroundImage = "url('../assets/evening.jpg')";
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white'
  }
}

// Run
showTime();
setBGGreet();