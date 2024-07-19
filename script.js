let buttonElement = document.getElementById("likeButton");
let iconElement = document.getElementById("likeIcon");
let puppyImageElement = document.getElementById("puppyImage");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        iconElement.style.color = "#0967d2";
        buttonElement.style.backgroundColor = "#0967d2";
        buttonElement.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        iconElement.style.color = "#cbd2d9";
        buttonElement.style.backgroundColor = "#cbd2d9";
        buttonElement.style.color = "#9aa5b1";
        isImageLiked = false;
    }
}