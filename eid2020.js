
x=270;
y=450;
name="أسرار";
const drawImage = (url,canvasNumber,name,x,y) => {
    let canvas = document.getElementById("canvas"+canvasNumber);
let ctx = canvas.getContext("2d"); 
    let image = new Image();
    image.src = url;
    var hRatio = canvas.width  / image.width    ;
    var vRatio =  canvas.height / image.height  ;
    var ratio  = Math.max ( hRatio, vRatio );
    var centerShift_x = ( canvas.width - image.width*ratio ) / 2;
    var centerShift_y = ( canvas.height - image.height*ratio ) / 2;  
    ctx.clearRect(0,0,canvas.width, canvas.height);
    image.onload = () => {
       ctx.drawImage(image, 0, 0, image.width,    image.height,     // source rectangle
        0, 0, canvas.width, canvas.height);
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "#fff";
        ctx.direction = "rtl";
        ctx.textAlign = 'center';
        ctx.fillText(name, x, y);
   
    }
}
drawImage("images/Eid-1.jpg","1","",x,y);
drawImage("images/Eid-2.jpg","2","",x,y);
function addName(){
    let name=document.getElementById("name").value;
    drawImage("images/Eid-1.jpg","1",name,x,y);
    drawImage("images/Eid-2.jpg","2",name,x,y);

}
saveImg1=function (el){
    let canvas = document.getElementById("canvas1");
    let img=canvas.toDataURL("image/jpg");
    console.log(img);
  el.href = img;
}
saveImg2=function (el){
    let canvas = document.getElementById("canvas2");
    let img=canvas.toDataURL("image/jpg");
    console.log(img);
  el.href = img;
}


