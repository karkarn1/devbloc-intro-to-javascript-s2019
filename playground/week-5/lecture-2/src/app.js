require("./style/style.scss");

const axios = require('axios');

function updateContent(id, content){
    var element = document.getElementById(id);
    element.innerText = content;
}

axios.get('http://a3b59cec.ngrok.io/info')
    .then(function (response) {
        const data = response.data;
        console.log(data);
        updateContent('name',data.name);
        updateContent('age',data.age);
        updateContent('title',data.title);
        updateContent('company',data.company);
    });
