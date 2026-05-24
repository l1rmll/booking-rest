let cards = document.querySelectorAll(".card");
let overlay = document.querySelector(".overlay");

cards.forEach(card => {

    card.onclick = () => {
        card.classList.add("active");
        overlay.classList.add("active");
    }

});

overlay.onclick = () => {

    cards.forEach(card => {
        card.classList.remove("active");
    });

    overlay.classList.remove("active");

}