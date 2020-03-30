 var zoom = 1;
    var zoomSize = 0.1;

    document.getElementById("zoomIn").addEventListener("click",function(){
        zoom += zoomSize;
        document.getElementById("zoomSection").style.transform = "scale(" + zoom + ")";
    });
    document.getElementById("zoomOut").addEventListener("click", function(){
        if (zoom > zoomSize) {
            zoom -= zoomSize;
            document.getElementById("zoomSection").style.transform = "scale(" + zoom + ")"
        }
    });
 

 
 musicB = document.querySelector(".Music");
 movieB = document.querySelector(".Movies");
 tvB = document.querySelector(".TvShows");
 contentSection = document.querySelector(".contentSection");

 function showMusic(){
     contentSection.innerHTML = "";
     contentSection.innerHTML =  '<h3>Queen - I want it all </h3> <iframe src="https://www.youtube.com/embed/Odkv4aE3pTI" frameborder="0" allowfullscreen></iframe>';
 }

 function showMovie(){
    contentSection.innerHTML = "";
    contentSection.innerHTML =  '<h3>The Lion King Trailer </h3> <iframe src="https://www.youtube.com/embed/lFzVJEksoDY?cc_load_policy=1" frameborder="0" allowfullscreen></iframe>';
 }

function showShows(){
    contentSection.innerHTML = "";
    contentSection.innerHTML = '<h3>Friends Trailer</h3> <iframe src="https://www.youtube.com/embed/p8rU4ysw-5M?cc_load_policy=1" frameborder="0" allowfullscreen></iframe>';

}

musicB.addEventListener("click", showMusic);
movieB.addEventListener("click", showMovie);
tvB.addEventListener("click", showShows);


 
 
