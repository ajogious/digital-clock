'use strict';

// =========== global-variables =========== //
const dots = document.querySelectorAll('.dots');

function showTime() {
  const hour = document.querySelector('#hour');
  const mins = document.querySelector('#mins');
  const secs = document.querySelector('#sec');
  const ampm = document.querySelector('#ampm');

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  if (h === 0) {
    hour.textContent = 12;
  } else if (h > 12) {
    hour.textContent = h - 12;
    ampm.textContent = 'PM';
  }

  if (h < 10) {
    hour.textContent = '0' + h;
  }

  if (m < 10) {
    mins.textContent = '0' + m;
  } else {
    mins.textContent = m;
  }

  if (s < 10) {
    secs.textContent = '0' + s;
  } else {
    secs.textContent = s;
  }
}

setInterval(showTime, 1000);

setInterval(() => {
  for (let i = 0; i < dots.length; i++) {
    const element = dots[i];
    if (element.classList.contains('visibility')) {
      element.classList.remove('visibility');
    } else {
      element.classList.add('visibility');
    }
  }
}, 1000);
