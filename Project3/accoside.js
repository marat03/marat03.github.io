const accoside = document.querySelectorAll ('.menu__item');

for (item of accoside) {
    item.addEventListener ('click', e => {
        const curItem = e.currentTarget;
        const content = curItem.querySelector(".menu__accordeon");

        if (curItem.classList.contains("active")) {
            curItem.classList.remove("active")
            content.style.width = 0;
            e.preventDefault()
        } else {
        Array.from(accoside).forEach(elem => {
            elem.classList.remove("active");
            elem.querySelector(".menu__accordeon").style.width = 0;
        });    
        curItem.classList.add("active");
        content.style.width = `550px`;
        e.preventDefault();
    }
    }
     ); 
}