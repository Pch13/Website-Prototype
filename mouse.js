document.addEventListener("DOMContentLoaded", function(){
    const stalker = document.getElementById("cursor-stalker");
    document.addEventListener("mousemove", function(e){
        const x = e.clientX;
        const y = e.clientY;
        const links = document.querySelectorAll("a");

        //マウス追従
        stalker.style.opacity = ".6";
        stalker.style.transform = "translate(" + x + "px, " + y +"px)";

        //リンクに反応する
        links.forEach(function(link){
            link.addEventListener("mouseenter", function(){
                stalker.classList.add("cursor-hover");
            });
            link.addEventListener("mouseleave", function(){
                stalker.classList.remove("cursor-hover");
            });
        });
    });
});