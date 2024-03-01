let body = document.querySelector("body");
let backgroundColorPicker = document.querySelector("#backgroundColorPicker");
let textColorPicker = document.querySelector("#textColorPicker");

let originalBackgroundColor = localStorage.getItem("colorBackground");
body.style.backgroundColor = originalBackgroundColor;
backgroundColorPicker.value = originalBackgroundColor;

let originalTextColor = localStorage.getItem("colorText");
body.style.color = originalTextColor;
textColorPicker.value = originalTextColor;



function changeColorBackground() {
    let newColor = backgroundColorPicker.value;
    body.style.backgroundColor = newColor;

    localStorage.setItem("colorBackground", newColor);
};

function changeColorText() {
    let newColor = textColorPicker.value;
    body.style.color = newColor;

    localStorage.setItem("colorText", newColor);
};

let titles = document.querySelectorAll("h1");
titles.addEventListener('click', scrollClick);
    function scrollClick(){
        this.scrollIntoView();
    }

backgroundColorPicker.addEventListener('change', changeColorBackground);
textColorPicker.addEventListener('change', changeColorText);



