
window.addEventListener("load", function (event) {
    var scene = document.getElementById('parallax');
    var parallaxInstance = new Parallax(scene,{
        relativeInput: true
    });

    parallaxInstance.scalar(100, 100);

    var scene2 = document.getElementById('aboutMePic');
    var parallaxInstance2 = new Parallax(scene2,{
        relativeInput: true
    });

    parallaxInstance2.scalar(100, 100);

});