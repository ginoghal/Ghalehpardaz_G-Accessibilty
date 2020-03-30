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
 
 
 
 
 
