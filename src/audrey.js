const audrey = document.getElementById("audrey")



document.addEventListener("scroll", function () {
    let positionWidth = window.scrollY / 3; 
    let positionHeight = window.scrollY / 4;

    audrey.style.width = `${positionWidth}px`;
    audrey.style.height = `${positionHeight}px`;
})