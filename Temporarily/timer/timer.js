let timeoutID;

const time = () => {
  let sec = 0;
  let min = 0;
  let hour = 0;
  let day = 0;
  let message = () => {
    seconds.textContent = sec;
  };

  const timer = () => {
    clearInterval(timeoutID);
    timeoutID = setInterval(() => {
      sec++;
      if (sec === 60) {
        sec = 0;
        min++;
        minutes.textContent = min;
      }
      if (min === 60) {
        min = 0;
        hour++;
        hours.textContent = hour;
      }
      if (hour === 24) {
        hour = 0;
        day++;
        days.textContent = day;
      }
      message();
    }, 1000);
  };

  timer();
};

export { time };
