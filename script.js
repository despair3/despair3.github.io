document.getElementById("background").onmousedown = function(e){
    var audio = document.createElement("audio");

    var randomGif = Math.floor(Math.random() * 3) + 1;
    if(randomGif == 1){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 2){
        audio.src = "songs/boom.mp3";
    }
    else if(randomGif == 3){
        audio.src = "songs/sad.mp3";
    }/*
    else if(randomGif == 4){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 5){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 6){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 7){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 8){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 9){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 10){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 11){
        audio.src = "songs/despair.mp3";
    }
    else if(randomGif == 12){
        audio.src = "songs/despair.mp3";
    }*/
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
    var x = e.clientX;
    var y = e.clientY;
    var width;
    var height;

    var randomGif = Math.floor(Math.random() * 12) + 1;
    if(randomGif == 1){
        element.src = "gifs/rick.gif";
        width = 159;
        height = 128;
    }
    else if(randomGif == 2){
        element.src = "gifs/spong.gif";
        width = 250;
        height = 147.5;
    }
    else if(randomGif == 3){
        element.src = "gifs/whoa.gif";
        width = 143.25;
        height = 159;
    }
    else if(randomGif == 4){
        element.src = "gifs/shark.gif";
        width = 250;
        height = 141;
    }
    else if(randomGif == 5){
        element.src = "gifs/pepe.gif";
        width = 90;
        height = 119;
    }
    else if(randomGif == 6){
        element.src = "gifs/dead.gif";
        width = 130;
        height = 166;
    }
    else if(randomGif == 7){
        element.src = "gifs/club.gif";
        width = 200;
        height = 138.5;
    }
    else if(randomGif == 8){
        element.src = "gifs/snoop.gif";
        width = 78;
        height = 160;
    }
    else if(randomGif == 9){
        element.src = "gifs/miku.gif";
        width = 109;
        height = 150;
    }
    else if(randomGif == 10){
        element.src = "gifs/pony.gif";
        width = 150;
        height = 150;
    }
    else if(randomGif == 11){
        element.src = "gifs/spider.gif";
        width = 170;
        height = 162.5;
    }
    else if(randomGif == 12){
        element.src = "gifs/dance.gif";
        width = 136;
        height = 160;
    }

    element.style.top = (y - height/2).toString() + "px";
    element.style.left = (x - width/2).toString() + "px";
    element.style.height = height.toString() + "px";
    element.style.width = width.toString() + "px";
    document.getElementById("gifs").appendChild(element);
}
