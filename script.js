(function(glob){
  glob.body.addEventListener("click", function(event){

    var audio = document.createElement("audio");
    audio.src = "despair2.mp3";
    if (typeof audio.loop == 'boolean'){
    audio.loop = true;
    }
    else {
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    }
    audio.play();

  	var element = document.createElement("img");
    var x = event.clientX;
    var y = event.clientY;
    var width;
    var height;

    var random = Math.floor(Math.random() * 12) + 1;
    if(random == 1){
    	element.src = "rick.gif";
    	width = 159;
    	height = 128;
    }
    else if(random == 2){
    	element.src = "spong.gif";
    	width = 250;
    	height = 147.5;
    }
    else if(random == 3){
    	element.src = "whoa.gif";
    	width = 143.25;
    	height = 159;
    }
    else if(random == 4){
    	element.src = "shark.gif";
    	width = 250;
    	height = 141;
    }
    else if(random == 5){
    	element.src = "pepe.gif";
    	width = 90;
    	height = 119;
    }
    else if(random == 6){
    	element.src = "dead.gif";
    	width = 130;
    	height = 166;
    }
    else if(random == 7){
    	element.src = "club.gif";
    	width = 200;
    	height = 138.5;
    }
    else if(random == 8){
    	element.src = "snoop.gif";
    	width = 78;
    	height = 160;
    }
    else if(random == 9){
    	element.src = "miku.gif";
    	width = 109;
    	height = 150;
    }
    else if(random == 10){
    	element.src = "pony.gif";
    	width = 150;
    	height = 150;
    }
    else if(random == 11){
    	element.src = "spider.gif";
    	width = 170;
    	height = 162.5;
    }
    else if(random == 12){
    	element.src = "dance.gif";
    	width = 136;
    	height = 160;
    }

    element.style.top = (y - height/2).toString() + "px";
    element.style.left = (x - width/2).toString() + "px";
    element.style.height = height.toString() + "px";
    element.style.width = width.toString() + "px";
    glob.body.appendChild(element);
  });
})(window.document);
