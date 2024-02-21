const imagesContainer = document.querySelector('.images');
let images = document.querySelectorAll('.image');
let primaryImage = images[1];
let secondaryImages = [...images].slice(2);

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

function nextImage() {
    imagesContainer.prepend(images[images.length - 1]);
    updateImages();
}
function prevImage() {
    imagesContainer.appendChild(images[0]);
    updateImages();
}
function updateImages() {
    images = document.querySelectorAll('.image');
    primaryImage = images[1];
    secondaryImages = [...images].slice(2);
    addImageHoverEffect();
}

function addImageHoverEffect() {
    secondaryImages.forEach((image) => {
        image.style.backgroundPosition = `50% 50%`;
        image.addEventListener('mousemove', handleImageMouseMove);
    });
}

function handleImageMouseMove(e) {
    const { offsetX: x, offsetY: y } = e;

    const middleX = this.offsetWidth / 2;
    const middleY = this.offsetHeight / 2;

    const rotateXOffset = ((x - middleX) / middleX) * 10;
    const rotateYOffset = ((y - middleY) / middleY) * 10 * -1;

    this.style.setProperty('--rotateX', rotateYOffset + 'deg');
    this.style.setProperty('--rotateY', rotateXOffset + 'deg');
}

function handleWindowMouseMove(e) {
    const { clientX: x, clientY: y } = e;

    const middleX = primaryImage.offsetWidth / 2;
    const middleY = primaryImage.offsetHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 5;
    const offsetY = ((y - middleY) / middleY) * 5;

    primaryImage.style.backgroundPosition = `${50 - offsetX}% ${50 - offsetY}%`;
}

nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);
window.addEventListener('mousemove', handleWindowMouseMove);
addImageHoverEffect();
