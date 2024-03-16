console.log("hello i am in")

var tl = gsap.timeline()

tl.from("#logo , .listitems , .navbox button" , {
y:-20,
opacity:0,
duration:1 ,
delay:1,
stagger:0.2

})

tl.from(".hero h1", {

    duration:1,
    y:100,
    opacity:0,
    stagger:.3
})

tl.from("#bodyImage1",{
    scale:0,
    // x:100,
    opacity:.5,
    borderRadius:30,
    rotate:20
    
})
tl.from("#bodyImage2",{
    scale:0,
    // x:100,
    opacity:.5,
    borderRadius:30,
    duration:1,
    rotate:-20
   
})

tl.from(".scroll_down",{
scale:0,
opacity:0
})
tl.from(".scroll_down",{
y:-20,
repeat:-1,
yoyo:true,
duration:1
})