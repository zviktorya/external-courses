const images = [
    { id: 100, url: "./imgSlider/cat2.jpg" },
    { id: 101, url: "./imgSlider/cat1.jpg" },
    { id: 102, url: "./imgSlider/cat4.jpg" }
];
let currentId;

function prev() {
    const index = images.findIndex(function (item) {
        return item.id === currentId;
    });
    let nextIndex = index - 1;
    if (nextIndex < 0) {
        nextIndex = images.length - 1;
    }
    changeImage(images[nextIndex]);
}
function next() {
    const index = images.findIndex(function (item) {
        return item.id === currentId;
    });
    let nextIndex = index + 1;
    if (nextIndex > images.length - 1) {
        nextIndex = 0;
    }
    changeImage(images[nextIndex]);
}

function changeImage(image) {
    const newImg = document.createElement("img");
    const prevImg = document.getElementById('image');
    newImg.src = image.url;
    newImg.className = "animate";
    newImg.id = "image";
    newImg.alt = "cats";

    if (prevImg) {
        prevImg.replaceWith(newImg);
    } else {
        document.getElementById("imageViewport").appendChild(newImg);
    }
    currentId = image.id;
}

document.addEventListener('DOMContentLoaded', function() {
    changeImage(images[0]);
});