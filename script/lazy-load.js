// const images = document.querySelectorAll('[data-src]');

// let preloadImage=(img)=>{
//     const src = img.getAttribute("data-src");
//     if(!src){
//         return;
//     }

//     img.src = src;
// }


// let imgOptions = {};

// const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
//     entries.forEach(entry =>{
//         if(!entry.isIntersecting){
//             return;
//         }else{
//             preloadImage(entry.target);
//             imgObserver.unobserve(entry.target);

//         }
//     })
// }, imgOptions);

// images.forEach(image =>{
//     imgObserver.observe(image);
// })

window.addEventListener('load',(event)=>{
    lazyLoad();
});

function lazyLoad(){
    const images = document.querySelectorAll("[data-src]");
    for(const image of images){
        image.src = image.getAttribute("data-src");
    }
    // console.log(images);
}