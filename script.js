function slideCircle(){
    document.querySelectorAll(".slide")
    .forEach(function(elem){
    elem.addEventListener("mousemove",function (dets) {
        var dim = this.getBoundingClientRect();
        
        this.children[1].style.clipPath = `circle(30% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px) `
    })

    elem.addEventListener("mouseleave",function (dets) {
        var dim = this.getBoundingClientRect();
        
        this.children[1].style.clipPath = `circle(0% at ${dets.clientX-dim.left}px ${dets.clientY-dim.top}px) `
    })
})
}
slideCircle();

function skewer(){
    var dim = document.querySelector(".slide").getBoundingClientRect();
    var prev = dim.left;
    document.querySelector("#projects").addEventListener("scroll",function(){
        var dim2 = document.querySelector(".slide").getBoundingClientRect();
        var diff = prev - dim2.left;
        // console.log(diff);
        
        
        document.querySelectorAll(".slide").forEach(function(every){
            every.style.transform = `skew(${diff*.15}deg)`
        })
        prev = dim2.left;
})
}
skewer();

function loco(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
loco();
