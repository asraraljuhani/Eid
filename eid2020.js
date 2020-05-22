x = 300;
y = 770;

name = "";
const drawImage = (url, canvasNumber, name, x, y) => {
  let canvas = document.getElementById("canvas" + canvasNumber);
  let ctx = canvas.getContext("2d");
  let image = new Image();
  image.src = url;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
    ctx.font = "40px Tajawal";
    ctx.fillStyle = "#fff";
    ctx.direction = "rtl";
    ctx.textAlign = "center";
    ctx.fillText(name, x, y);
  };
};
drawImage("images/img-f.jpeg", "1", name, x, y);
drawImage("images/img-m.jpeg", "2", name, x, y);
function addName() {
  let name = document.getElementById("name").value;
  drawImage("images/img-f.jpeg", "1", name, x, y);
  drawImage("images/img-m.jpeg", "2", name, x, y);
}

changeImg = (value) => {
  console.log(value);
};

document.getElementById("img-f").style.display = "none";

document
  .getElementById("customRadioInline1")
  .addEventListener("click", function () {
    document.getElementById("img-f").style.display = "none";
    document.getElementById("img-m").style.display = "block";
    drawImage("images/img-m.jpeg", "2", name, x, y);
  });
document
  .getElementById("customRadioInline2")
  .addEventListener("click", function () {
    document.getElementById("img-m").style.display = "none";
    document.getElementById("img-f").style.display = "block";
    drawImage("images/img-f.jpeg", "1", name, x, y);
  });

saveImg1 = function (el) {
  let canvas = document.getElementById("canvas1");
  let img = canvas.toDataURL("image/jpg");
  console.log(img);
  el.href = img;
};
saveImg2 = function (el) {
  let canvas = document.getElementById("canvas2");
  let img = canvas.toDataURL("image/jpg");
  console.log(img);
  el.href = img;
};
