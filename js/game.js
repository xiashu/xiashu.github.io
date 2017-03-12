
var image,container,bitmap,stage,bgImg;
var cjs = createjs; 
var w = 1200;
var h = 600;
var speedY = -10;
var mabg;
var copybg;
 
function init(){
 var canvas = document.getElementById("myCanvas");
 stage = new cjs.Stage(canvas);
 container = new cjs.Container(); 
 stage.addChild(container);
 
 
 image = new Image();
 image.src = "img/timg.png";
 image.onload = onImageLoadComplete;

 bgImg = new Image();
 bgImg.src = "img/mabg.jpg";
 bgImg.onload = onLoadBgComplete;
 
  
  
 cjs.Ticker.setFPS(60); 

	
}


function onLoadBgComplete(event) {
   
   mabg = new cjs.Bitmap(event.target);
   copybg = new cjs.Bitmap(event.target);
   
   copybg.x = copybg.getBounds().width;
   container.addChildAt(mabg,0);
   container.addChildAt(copybg,0);
   
   stage.update();
   createjs.Ticker.addEventListener("tick", tick);

}



function onImageLoadComplete(event) {
   
   bitmap = new createjs.Bitmap(event.target);
   container.addChildAt(bitmap,0);
   bitmap.x = w - bitmap.getBounds().width >>1;
   bitmap.y = h - 170;
   stage.update();
 
}


function tick(event){
	
 
  mabg.x-=1;
  copybg.x -=1;
  
  if(mabg.x<=-w)
  {
  	mabg.x = w;
  }
  
  if(copybg.x<=-w)
  {
    copybg.x =w;
  }
   
  
  stage.update();
}


