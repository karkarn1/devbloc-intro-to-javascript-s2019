function updateContent(id, name){
    var element = document.getElementById(id);
    element.innerText = name;
}

var button = document.getElementById("changeHtml");
button.addEventListener("click", function (e) {
    updateContent("name", e.altKey);
});
