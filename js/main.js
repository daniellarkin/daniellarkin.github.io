"use strict";

var ctx  = document.getElementById('canvas').getContext('2d');
//var ctx2 = document.getElementById('canvas2').getContext('2d');
window.onload = function() {
  ctx.canvas.width  = window.innerWidth-10;
  ctx.canvas.height = window.innerHeight-88;
  //ctx2.canvas.width  = window.innerWidth-10;
  //ctx2.canvas.height = window.innerHeight-88;
  //window.addEventListener('resize', resizeCanvas);
};

window.addEventListener("touchmove", function(event) { 
    event.preventDefault();
}, false);

var img   = new Image;
var input = document.getElementById('fileOpen');
input.addEventListener('change', handleFiles);

var tabID =1;
var selectedTab =1;

canvas.addEventListener('DOMMouseScroll',zoom,false);
canvas.addEventListener('mousewheel',zoom,false);

var scale   = 1;
var originx = 0;
var originy = 0;
var mX      = 0;
var mY      = 0;
var lastX;
var lastY;

document.getElementById("close").onclick = function() {
  window.close();
}

document.getElementById("rotClk").onclick = function() {
  drawRotated(90);
}
document.getElementById("rotAclk").onclick = function() {
  drawRotated(270);
}
document.getElementById("z100").onclick = function() {
  zoomX(100);
}
document.getElementById("z200").onclick = function() {
  zoomX(200);
}
document.getElementById("z400").onclick = function() {
  zoomX(400);
}
document.getElementById("z800").onclick = function() {
  zoomX(800);
}
document.getElementById("zFull").onclick = function() {
  reloadImg();
}
document.getElementById("reload").onclick =function() {
  reloadImg();
};


//------------------------------------------------------------------------------
// Handle the popup dialog boxes
//------------------------------------------------------------------------------

// document.getElementById('showVersion').onclick = function() {
//   dialog.show();
// };
// document.getElementById('closeVersion').onclick = function() {
//   dialog.close();
// };

// document.getElementById('showSupport').onclick = function() {
//   support.show();
// };
// document.getElementById('closeSupport').onclick = function() {
//   support.close();
// };

// document.getElementById('showBug').onclick = function() {
//   bug.show();
// };
// document.getElementById('closeBug').onclick = function() {
//   bug.close();
// };

// document.getElementById('showSuggest').onclick = function() {
//   suggest.show();
// };
// document.getElementById('closeSuggest').onclick = function() {
//   suggest.close();
// };

// document.getElementById('showAbout').onclick = function() {
//   about.show();
// };
// document.getElementById('closeAbout').onclick = function() {
//   about.close();
// };

// var dialog  = document.getElementById('version');
// var support = document.getElementById('support');
// var bug     = document.getElementById('bug');
// var about   = document.getElementById('about');
// var suggest = document.getElementById('suggest');
//------------------------------------------------------------------------------

function handleFiles(e) {
  ctx.canvas.width  = window.innerWidth-10;
  ctx.canvas.height = window.innerHeight-88;

  img.src = URL.createObjectURL(e.target.files[0]);
  var fileName = e.target.files[0].name;
  var fileSize = e.target.files[0].size;

  $('#fName').html("Filename: "+fileName);
  //$('#tab_1').html(fileName+' <a href=#><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>'); // this is nice, but not sure how to hook the close icon into main processing
  $('#tab_1').html(fileName);
  $('#fSize').html("File size: " + fileSize.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " bytes");

  // Create a new tab and draw the image on that...
  tabID++;
  var canvasName = "canvas"+tabID;
  var tabName = "tab_"+tabID;
  var newTabURL = "#tab"+tabID

  //$('#ulTabs').append('<li><a href="#tab'+tabID+'" id="'+tabName+'"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></a>');
  $('#ulTabs').prepend('<li draggable="true"><a href="#tab'+tabID+'" id="'+tabName+'">'+fileName+'</a></li>');
  $('#canvasContainer').append('<div id="tab'+tabID+'"><div class="container-mainStage"><center><canvas id="'+canvasName+'"/></center></div></div>');
  $(newTabURL).hide(); // Hide the new content so that we can still see the status bar

  var c = document.getElementById(canvasName).getContext('2d');
  c.canvas.width  = window.innerWidth-10;
  c.canvas.height = window.innerHeight-88;

  img.onload = function() {
    drawMainStage(img,c);
  }
}


//function allowDrop(ev) {
//    ev.preventDefault();
//}

//function drag(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//}

//function drop(ev) {
//    ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));
// }

// //------------------------------------------------------------------------------
// // KEYBOARD SHORTCUTS
// //CTRL-Q to quit, etc
// //------------------------------------------------------------------------------
// $(window).bind('keydown', function(event) {
//     if (event.ctrlKey || event.metaKey) {
//         switch (String.fromCharCode(event.which).toLowerCase()) {
//         case 's':
//             event.preventDefault();
//             //alert('ctrl-s');
//             break;
//         case 'f':
//             event.preventDefault();
//             reloadImg();//Zoom Full / Reload Image
//             break;
//         case 'w':
//             event.preventDefault();
//             //alert('ctrl-w');
//             break;
//         case 'q':
//             event.preventDefault();
//             window.close();
//             break;
//         case 'r':
//             event.preventDefault();
//             reloadImg();
//             break;
// //        case '[':
// //            event.preventDefault();
// //            drawRotated(90);
// //            break;
// //        case ']':
// //            event.preventDefault();
// //            drawRotated(270);
// //            break;
//         case '1':
//             event.preventDefault();
//             zoomX(100);
//             break;
//         case '2':
//             event.preventDefault();
//             zoomX(200);
//             break;
//         case '3':
//             event.preventDefault();
//             zoomX(400);
//             break;
//         case '4':
//             event.preventDefault();
//             zoomX(800);
//             break;
//         case 'o':
//             event.preventDefault();
//             $('fileOpen').trigger('change');
//             handleFiles;
//             break;
//         }
//     }
// });

//------------------------------------------------------------------------------
// DrawMainStage(img)
//------------------------------------------------------------------------------
function drawMainStage(img,c){

  var h             = img.height;
  var w             = img.width;
  var image_ratio   = h/w;
  var canvas_ratio  = Math.round(c.canvas.height/c.canvas.width);

  if (c.canvas.width >= c.canvas.height){
    // Landscape canvas, scale using height of canvas
    if (h > c.canvas.height){

		  // Image larger in at least one dimension compared to the canvas
		  var width_scaled  = Math.round((c.canvas.height/h)*w);
      var height_scaled = c.canvas.height;

      if ( w > h ){
        if ( width_scaled > c.canvas.width ){
          height_scaled = Math.round((c.canvas.width/w)*h);
          width_scaled  = c.canvas.width;
        }
      }
      var x1 = c.canvas.width/2 - width_scaled/2;
      var y1 = c.canvas.height/2 - height_scaled/2;

      c.drawImage(img, 0,0, w,h, x1,y1, width_scaled, height_scaled);

      //originx = x1;
      //originy = y1;

      $('#mouseInfo').html("ZOOM="+Math.round((width_scaled/img.width)*100)+"%");
    }
    else
    {
      // Images smaller than the canvas
      var x1 = Math.round(c.canvas.width/2  - w/2);
      var y1 = Math.round(c.canvas.height/2 - h/2);
      c.drawImage(img, x1,y1);
      $('#mouseInfo').html("ZOOM=100%");
      //originx = x1;
      //originy = y1;
    }
  }
  // else {
  //   if (ctx.canvas.width < ctx.canvas.height){
	//   var width_scaled  = Math.round(ctx.canvas.width*image_ratio);
  //   	var height_scaled = ctx.canvas.height;
  //   }
  //   else
  //   {
  //   	var width_scaled  = ctx.canvas.width;
  //   	var height_scaled = Math.round(ctx.canvas.height*image_ratio);
  //   }
  // }
  $('#imgDim').html("Image Dimensions: "+img.height+"x"+img.width);
}



//------------------------------------------------------------------------------
// resizeCanvas : resize the canvas after the main window is resized
//------------------------------------------------------------------------------

function drawRotated(degrees){

    //ctx.clearRect(0,0,canvas.width,canvas.height);

    // save the unrotated context of the canvas so we can restore it later
    // the alternative is to untranslate & unrotate after drawing
    ctx.save();

    // move to the center of the canvas
    ctx.translate(canvas.width/2,canvas.height/2);

    // rotate the canvas to the specified degrees
    ctx.rotate(degrees*Math.PI/180);

    // draw the image
    // since the context is rotated, the image will be rotated also
    ctx.drawImage(img,-img.width/2,-img.width/2);
    //drawMainStage(img);

    // we’re done with the rotating so restore the unrotated context
    ctx.restore();
    //ctx.translate(-canvas.width/2,-canvas.height/2);
    //ctx.rotate(-degrees*Math.PI/180);
}

//------------------------------------------------------------------------------
// resizeCanvas : resize the canvas after the main window is resized
//------------------------------------------------------------------------------
function resizeCanvas(){

  // BUG this doesn't take account of the previous zoom level!!! to be fixed

  //ctx.canvas.width  = window.innerWidth-10;
  //ctx.canvas.height = window.innerHeight-85;
  //ctx.clearRect(0,0,canvas.width,canvas.height);
  //drawMainStage(img);
}

//------------------------------------------------------------------------------
// reloadImg : reload the image
//------------------------------------------------------------------------------
function reloadImg(){
  scale =1;
  //ctx.scale(1,1);
  originx = 0;
  originy = 0;
  ctx.canvas.width  = window.innerWidth-10;
  ctx.canvas.height = window.innerHeight-88;

  ctx.clearRect(0,0,canvas.width,canvas.height);
  drawMainStage(img,ctx);
}

//------------------------------------------------------------------------------
// ZOOM ZOOM ZOOM ...
//------------------------------------------------------------------------------
function zoom(event){
    var mousex = event.clientX - canvas.offsetLeft;
    var mousey = event.clientY - canvas.offsetTop;
    var wheel  = event.wheelDelta/120;//n or -n

    ctx.clearRect(0,0,canvas.width,canvas.height);

    var zoom = Math.pow(1 + Math.abs(wheel)/8 , wheel > 0 ? 1 : -1);

    ctx.translate(originx,originy );

    ctx.imageSmoothingEnabled = 0;
    ctx.scale(zoom,zoom);

    ctx.translate(
         -( mousex / scale + originx - mousex / ( scale * zoom ) ),
         -( mousey / scale + originy - mousey / ( scale * zoom ) )
    );

    // Update the origin
    originx = ( mousex / scale + originx - mousex / ( scale * zoom ) );
    originy = ( mousey / scale + originy - mousey / ( scale * zoom ) );
    scale *= zoom;

     drawMainStage(img,ctx);

     $('#mouseInfo').html("ZOOM="+Math.round((canvas.width/img.width)*scale*100)
                        + "% MX="+mousex
                        +" MY="+mousey
                        +" CanvasOffset("+canvas.offsetLeft+","+canvas.offsetTop+")");

}


//------------------------------------------------------------------------------
// ZOOMX
//------------------------------------------------------------------------------
function zoomX(value){

  var h             = img.height;
  var w             = img.width;
  var width_scaled  = Math.round((ctx.canvas.height/h)*w);
  var height_scaled = ctx.canvas.height;

  if ( w > h ){
    if ( width_scaled > ctx.canvas.width ){
      height_scaled = Math.round((ctx.canvas.width/w)*h);
      width_scaled  = ctx.canvas.width;
    }
  }

  var z = value/100 * (h/height_scaled);

  // Clear the canvas
  ctx.canvas.width  = window.innerWidth-10;
  ctx.canvas.height = window.innerHeight-88;
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // Get the middle point of the image
  c_x = img.width /2;
  c_y = img.height/2;
  // Get the middle point of the Canvas
  dx  = canvas.width/2;
  dy  = canvas.height/2;

  //ctx.translate(-(c_x-img.width/2),-(c_y-img.height) );

  ctx.imageSmoothingEnabled = 0;
  //ctx.translate(canvas.width/2, canvas.height/2);
  ctx.scale(z,z);

  ctx.drawImage(img,0,0,img.width,img.height, 0,0, 2*dx,2*dy)

  // Update the origin
  drawMainStage(img,ctx);

  //ctx.translate(-dx,-dy );
}

//------------------------------------------------------------------------------
// Image panning
//------------------------------------------------------------------------------

  var dragging = false;

  canvas.addEventListener('mousemove',function(event){
    mX = event.clientX - canvas.offsetLeft;
    mY = event.clientY - canvas.offsetTop;
    var deltaX = 0;
    var deltaY = 0;
      
    if (dragging) {
      // Panning the image around
      event.target.style.cursor = 'move';

      deltaX = lastX/scale-mX/scale;
      deltaY = lastY/scale-mY/scale;

      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.translate(-deltaX,-deltaY);
      drawMainStage(img,ctx);
      $('#mouseInfo').html("upX="+mX+" upY="+mY+" ZOOM="+Math.round(scale*100) +"% CanvasOffset("+canvas.offsetLeft+","+canvas.offsetTop+")");
      originx = ( deltaX + originx  );
      originy = ( deltaY + originy  );
      lastX = mX;
      lastY = mY;
    }
  },false);


  canvas.addEventListener('mousedown',function(event){
    lastX = event.clientX - canvas.offsetLeft;
    lastY = event.clientY - canvas.offsetTop;
    dragging = true;
  },false);

  canvas.addEventListener('mouseup',function(event){
    var upX = event.clientX - canvas.offsetLeft;
    var upY = event.clientY - canvas.offsetTop;

    var deltaX = Math.round(lastX/scale-upX/scale);
    var deltaY = Math.round(lastY/scale-upY/scale);
      event.target.style.cursor = 'default';

    $('#mouseInfo').html("upX="+upX+" upY="+upY+" ZOOM="+Math.round(scale*100) +"% CanvasOffset("+canvas.offsetLeft+","+canvas.offsetTop+")");

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.translate(-deltaX,-deltaY);
    drawMainStage(img,ctx);

    originx = ( deltaX + originx  );
    originy = ( deltaY + originy  );
    dragging=false;
  },false);
//------------------------------------------------------------------------------
 $('ul.tabs').each(function(){
    // For each set of tabs, we want to keep track of
    // which tab is active and it's associated content
    var $active, $content, $links = $(this).find('a');

    // If the location.hash matches one of the links, use that as the active tab.
    // If no match is found, use the first link as the initial active tab.
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    // Hide the remaining content
    $links.not($active).each(function () {
      $(this.hash).hide();
    });

    // Bind the click event handler
    $(this).on('click', 'a', function(e){
      // Make the old tab inactive.
      $active.removeClass('active');
      $content.hide();

      // Update the variables with the new link and content
      $active = $(this);
      $content = $(this.hash);

      // Make the tab active.
      $active.addClass('active');
      $content.show();

      // Prevent the anchor's default click action
      e.preventDefault();
    });
  });