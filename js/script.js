
const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");


window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

  window.addEventListener("click", () => {
     cursor.style.animation = "hit 0.3s ease";
    //cursor.style.animation = "hit 0 ease";
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;
  
  let image = document.createElement("img");
  image.setAttribute("src","./img/mole.png");


  const startGame = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    image.setAttribute("src","./img/mole.png");
    
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    setTimeout(() => {
      // disini
      hole.removeChild(image);
    }, 1200);
  }, 1400);

  window.addEventListener("click", (e) => {
    // if (e.target === hole) score.innerText = ++points;
    if (e.target === hole) {
      score.innerText = ++points;

      image.setAttribute("src","./img/moleb.png");
      setTimeout(() => {
        // disini
        image.setAttribute("src","./img/mole.png");
      }, 700);
    }
    else
    image.setAttribute("src","./img/mole.png");
     
    
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    score.innerText = 0;
  });
});