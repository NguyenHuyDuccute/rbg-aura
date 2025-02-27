// script.js
const fingerprint = document.getElementById("fingerprint");
const fingerBg = document.querySelector(".finger-class");
const scanLine = document.querySelector(".scan-bar");
const fingerActive = document.querySelector(".finger-active");
// Chặn hành vi mặc định khi chạm vào phần tử không mong muốn
fingerBg.addEventListener("contextmenu", (event) => event.preventDefault());
fingerBg.addEventListener("selectstart", (event) => event.preventDefault());
fingerBg.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
});
fingerActive.style.display = "none";
fingerActive.addEventListener("contextmenu", (event) => event.preventDefault());
fingerActive.addEventListener("selectstart", (event) => event.preventDefault());
fingerActive.addEventListener("touchstart", (event) => {
  event.preventDefault(); // Ngăn hành vi mặc định
});

let lastClickTime = 0;

fingerprint.addEventListener('touchstart', function() {
  const currentTime = Date.now();
  if (currentTime - lastClickTime >= 5000) {
     lastClickTime = currentTime;
     index = 0;
    //  scanLine.style.display="block";
     fingerActive.style.display = "block";
     setTimeout(()=>{
      fingerActive.style.display = "none";
      // scanLine.style.display="none";
     },1500);
    for (i = 0; i<=40;i++){
    let fingerprint = document.createElement('div');
    fingerprint.classList.add('fingerprint');
    document.body.appendChild(fingerprint);

    // Random position at four sides
    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight;
    let side = Math.floor(Math.random() * 4);
    if (side === 0) {
      fingerprint.style.left = randomX + 'px';
      fingerprint.style.top = '-50px';
    } else if (side === 1) {
      fingerprint.style.left = randomX + 'px';
      fingerprint.style.bottom = '-50px';
    } else if (side === 2) {
      fingerprint.style.left = '-50px';
      fingerprint.style.top = randomY + 'px';
    } else {
      fingerprint.style.right = '-50px';
      fingerprint.style.top = randomY + 'px';
    }

    setTimeout(() => {
      fingerprint.style.left = 'calc(50% + 20px)';
      fingerprint.style.top = 'calc(50% + 90px)';
      fingerprint.style.transform = 'translate(-50%, -50%)';
      fingerprint.style.opacity = '1';
      
      // Sau khi tập trung xong, làm biến mất
      setTimeout(() => {
        fingerprint.style.opacity = '0';
        setTimeout(() => {
          fingerprint.remove();
        }, 3000); // Chờ cho hoạt ảnh biến mất hoàn toàn trước khi xóa phần tử
      }, 2000); // Thời gian chờ trước khi biến mất
    },200); // Thời gian trễ ban đầu
  }
}
});
