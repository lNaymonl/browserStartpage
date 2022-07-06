const el_time = document.querySelector(".time");

const currentDate = () => {
  return new Date();
};

const currentTime = () => {
  return (
    (currentDate().getHours() >= 10
      ? currentDate().getHours()
      : "0" + currentDate().getHours()) +
    ":" +
    (currentDate().getMinutes() >= 10
      ? currentDate().getMinutes()
      : "0" + currentDate().getMinutes()) +
    ":" +
    (currentDate().getSeconds() >= 10
      ? currentDate().getSeconds()
      : "0" + currentDate().getSeconds())
  );
};

let old_time;

el_time.textContent = currentTime();

setInterval(() => {
  if (old_time != currentTime()) {
    el_time.textContent = currentTime();
    old_time = currentTime();
  }
}, 1000);
