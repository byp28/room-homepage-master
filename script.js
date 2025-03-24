const sliders = document.querySelectorAll(".slider")
const desktop_sliders_img = document.querySelectorAll(".desktop-slider-img")
const mobile_slider_img = document.querySelectorAll(".mobile-slider-img")
let index = 0;
const btn_next = document.querySelector('.btn-next');
const btn_prev = document.querySelector('.btn-prev');
const mobile_btn_next = document.querySelector('.mobile-btn-next');
const mobile_btn_prev = document.querySelector('.mobile-btn-prev');
const overlay = document.querySelector('#overlay');
const open_menu = document.querySelector('#open-menu');
const close_menu = document.querySelector('#close-menu');

function next(){
    sliders[index].classList.add("hidden");
    desktop_sliders_img[index].classList.add("hidden");
    mobile_slider_img[index].classList.add("hidden");
    if(index>1){
        index = 0;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
        mobile_slider_img[index].classList.remove("hidden");
    }else{
        index+=1;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
        mobile_slider_img[index].classList.remove("hidden");
    }
}

function previous(){
    sliders[index].classList.add("hidden");
    desktop_sliders_img[index].classList.add("hidden");
    mobile_slider_img[index].classList.add("hidden");
    if(index<1){
        index = sliders.length-1;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
        mobile_slider_img[index].classList.remove("hidden");
    }else{
        index-=1;
        sliders[index].classList.remove("hidden");
        desktop_sliders_img[index].classList.remove("hidden");
        mobile_slider_img[index].classList.remove("hidden");
    }
}

btn_next.addEventListener("click",()=> next())
btn_prev.addEventListener("click",()=> previous())

mobile_btn_next.addEventListener("click",()=> next())
mobile_btn_prev.addEventListener("click",()=> previous())

open_menu.addEventListener("click",()=>{
    overlay.classList.toggle('hidden');
})
close_menu.addEventListener("click",()=>{
    overlay.classList.toggle('hidden');
})
