const items = document.querySelectorAll ('.accordeon__item');

for (item of items) {
    item.addEventListener ('click', e => {
        const curItem = e.currentTarget;
        const content = curItem.querySelector(".accordeon__label");
        const textBlock = content.firstElementChild;
        const reqHeight = textBlock.getBoundingClientRect().height;

        if (curItem.classList.contains("active")) {
            curItem.classList.remove("active")
            content.style.height = 0;
            event.preventDefault()
        } else {
        curItem.classList.add("active")
        content.style.height = `${reqHeight}px`;
        event.preventDefault();
    }
    }
     ); 
}

