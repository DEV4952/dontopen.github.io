const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "HBD จ้าพลอย";
  document.body.style.backgroundColor = 'pink';
  gif.src =
    "https://media.giphy.com/media/YILDz2vBfzXBidPqOk/giphy.gif";
  const btnGroup = document.querySelector(".btn-group");
  btnGroup.style.display = "none";
  setTimeout(() => {
    const alertDiv = document.createElement("div");
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.padding = "20px";
    alertDiv.style.backgroundColor = "#e94d58";
    alertDiv.style.color = "white";
    alertDiv.style.borderRadius = "10px";
    alertDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    alertDiv.style.zIndex = "1000";
    alertDiv.innerText = "ขอให้มีแต่สิ่ง ๆ เข้ามาในวันเกิดนะ ขอให้ติดในคณะที่พลอยอยากเข้าด้วย";
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
      alertDiv.remove();
    }, 4000); // Adjust the display time as needed
  }, 500);
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});