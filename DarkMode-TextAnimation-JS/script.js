const dayNight = document.querySelector(".dayNight");
const banner = document.querySelector(".banner");

dayNight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})