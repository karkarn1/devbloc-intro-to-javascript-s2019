function displayImg(e) {
    var imgSrc = URL.createObjectURL(e.target.files[0]);
    var container = document.getElementById("imgContainer");
    var imgHTML = "<img src='" + imgSrc + "'/>";
    container.innerHTML=imgHTML;
}
var imgUploadInput = document.getElementById("imgUploadInput");
imgUploadInput.addEventListener("change", displayImg);
