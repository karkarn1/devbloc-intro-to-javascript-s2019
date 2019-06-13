const axios = require('axios');
const base64 = require('base-64');
require("./style/style.scss");

function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
        axios.post('http://localhost:5000/upload', {
            img: reader.result
        })
            .then(function (response) {
                console.log(response);
            });
    };


    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}


function displayImg(e) {
    var imgSrc = URL.createObjectURL(e.target.files[0]);
    var container = document.getElementById("imgContainer");
    var imgHTML = "<img src='" + imgSrc + "'/>";
    container.innerHTML = imgHTML;
    // console.log(base64.encode(e.target.files[0]));
    console.log(getBase64(e.target.files[0]));
}

var imgUploadInput = document.getElementById("imgUploadInput");
imgUploadInput.addEventListener("change", displayImg);
