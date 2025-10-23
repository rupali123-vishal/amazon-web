let sliderBtnLeft = document.getElementById("slide-btn-left")
let sliderBtnright = document.getElementById("slide-btn-right")
let imagItem = document.querySelectorAll(".image-item")

console.log(imagItem.length-1)

let startSlider = 0
let endSlider = (imagItem.length-1)*100

sliderBtnLeft.addEventListener("click",()=> {
   if(startSlider < 0){
      startSlider = startSlider + 100;
    }
 
    imagItem.forEach(element => {
       element.style.transform = `translateX(${startSlider}%)`;
    })
})
sliderBtnright.addEventListener("click",()=>{
   if(startSlider >= -endSlider+100){
     startSlider = startSlider - 100;
   }

   imagItem.forEach(element => {
      element.style.transform = `translateX(${startSlider}%)`;
   })
})
