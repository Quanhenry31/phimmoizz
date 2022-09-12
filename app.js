{/* <i class="fa-solid fa-chevron-right arrow"></i> */}

const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");



arrows.forEach((arrow,i)=>{
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if (itemNumber - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${
                movieLists[i].computedStyleMap().get("transform")[0].x.value
            -302}px)`;
        } else {
            movieLists[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
    });
    console.log(movieLists[i].querySelectorAll("img").length);
});


// console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value)



const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.movie-list-title,.navbar-container,.sidebar,.toggle-ball,.left-menu-icon,.togger");

ball.addEventListener("click",()=>{
    items.forEach(item =>{
        item.classList.toggle("active")
    })
})