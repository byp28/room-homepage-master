const sliders = document.querySelectorAll(".slider")
const desktop_sliders_img = document.querySelectorAll(".desktop-slider-img")
let index = 0;
const btn_next = document.querySelector('.btn-next');
const btn_prev = document.querySelector('.btn-prev');

btn_next.addEventListener("click",()=>{
    sliders[index].classList.add("hidden");
    desktop_sliders_img[index].classList.add("hidden");
    if(index>1){
        index = 0;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
    }else{
        index+=1;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
    }
})

btn_prev.addEventListener("click",()=>{
    sliders[index].classList.add("hidden");
    desktop_sliders_img[index].classList.add("hidden");
    if(index<1){
        index = sliders.length-1;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
    }else{
        index-=1;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
    }
})
