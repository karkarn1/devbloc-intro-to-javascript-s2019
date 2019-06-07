function displayImg(e) {
    var imgSrc = URL.createObjectURL(e.target.files[0]);
    var container = document.getElementById("imgContainer");
    var imgElement = document.createElement('img');
    imgElement.src=imgSrc;
    container.appendChild(imgElement);
}
var imgUploadInput = document.getElementById("imgUploadInput");
imgUploadInput.addEventListener("change", displayImg);
