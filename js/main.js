// DOM elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show time every second
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

// Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

// // 12hr Format
//   hour = hour % 12 || 12;

  //Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

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

// Get Name
function getName() {
  if(localStorage.getItem('name') === null){
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set name
function setName(e) {
  if(e.type === 'keypress') {
    // Ensure Enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if(localStorage.getItem('focus') === null){
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if(e.type === 'keypress') {
    // Ensure Enter is pressed
    if(e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBGGreet();
getName();
getFocus();
setName();