let videos  = ["https://drive.google.com/file/d/19LG6JyEw8eTKBwn1Fz7_K1AXdVn-fXXy/preview", "https://drive.google.com/file/d/1ngMTwABS2LRICiqpwlkr3_c1pmc87MN9/preview"];

let videoIndex = 0;


function trocarVideo() {

    let video = document.querySelector('iframe');
    video.src = videos[videoIndex];
    videoIndex = (videoIndex + 1) % videos.length;

}

let botaoTrocarVideo = document.getElementById("trocarVideo");
botaoTrocarVideo.addEventListener("click", trocarVideo);