
window.addEventListener("load", function (event) {
    var scene = document.getElementById('parallax');
    var parallaxInstance = new Parallax(scene,{
        relativeInput: true
    });

    parallaxInstance.scalar(100, 100);
});