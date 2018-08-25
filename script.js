(function(glob){
  glob.body.addEventListener("click", function(event){

  	var audio = document.createElement("audio");
    audio.src = "despair.mp3";
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

    var random = Math.floor(Math.random() * 5) + 1;
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

    element.style.top = (y - height/2).toString() + "px";
    element.style.left = (x - width/2).toString() + "px";
    element.style.height = height.toString() + "px";
    element.style.width = width.toString() + "px";
    glob.body.appendChild(element);
  });
})(window.document);
