let nav=document.getElementById("nav")
window.addEventListener("scroll",function(){
    if( window.scrollY >= 50){
nav.classList.add("sticky")
    }else{
        nav.classList.remove("sticky")

    }
})

let h3=document.querySelector("h3");
let screen=document.querySelector("#full-screen")
// let drop=document.getElementById("dropp")

// window.addEventListener("scroll",function(){
//     if( window.scrollY >= 5){
//         // drop.style.top="-200%"
//     }
// })



let flag=0;
h3.addEventListener("click",()=>{
    if (flag==0){
        screen.style.top=0;
        
        h3.innerHTML=`<i class="ri-close-fill"></i>`;
        h3.style.zIndex=""
        flag=1;
    }else{
        screen.style.top = `-140%`
        h3.innerHTML =`<i class="ri-menu-line"></i>`;
        flag=0
    }
})

// gsap.from("#sec-image",{
//     opacity:0,
//     scale:0,
//     duration:1
// })