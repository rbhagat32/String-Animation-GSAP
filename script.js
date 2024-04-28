var initialPath =  `M 100 200 Q 500 200 900 200`
var finalPath =  `M 100 200 Q 500 200 900 200`
var string = document.querySelector('svg')

string.addEventListener('mousemove', function(dets) {
    finalPath = `M 100 200 Q ${dets.clientX} ${dets.clientY} 900 200`
    gsap.to('svg path', {
        attr: {d: finalPath},
        duration: 0.1,
        ease: "power3.out",
    })
})

string.addEventListener('mouseleave', function(dets) {
    gsap.to('svg path', {
        attr: {d: initialPath},
        duration: 1.5,
        ease: "elastic.out(1, 0.1)",
    })
})