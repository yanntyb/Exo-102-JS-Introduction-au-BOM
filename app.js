let button = document.getElementById("button");
let fermer = document.getElementById("button2");

button.addEventListener("click",function(){
    let features = "menubar=no, scrollbars=no, width=500, height=200";
    let newWindow = window.open("http://www.google.fr","",features);
    newWindow.moveBy(100,100)
})

fermer.addEventListener("click",function(){
    newWindow.close()
})