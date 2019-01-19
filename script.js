

$("#news").click(function(){
  console.log("test");
  $("#news").css({
      "display":"none"
  })
  $("#nyt").css({
    "display": "inline"
  })
});

var click = false;
$("#nyt").click(function(){
  if(click == false){
    $("#rssFeed").css({
        "display": "inline"
    })
    click = true;

  }else{
    $("#rssFeed").css({
      "display":"none"
    })
    click = false;
  }
});


/*--------------------------------------------------------------------------*/
// Make the DIV element draggable:
dragElement(document.getElementById("rssFeed"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
     //if present, the header is where you move the DIV from:

    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    console.log("here");
    // otherwise, move the DIV from anywhere inside the DIV:
  elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/*----------------------control button--------------------------------------*/
$(document).ready(function(){
  $(".control").hover(function(){
    $(".control").animate({
      bottom: '0px',
      height: '500px',
      width: '500px'
    });
  },
  function(){
    $(".control").animate({
      bottom: '-350px',
      height: '500px',
      width: '500px',
    });
  });
});
