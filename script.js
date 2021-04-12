var selectetStyle = localStorage.getItem('selectetStyle');;

var darkmode = "darkmode.css";
var lightmode = "lightmode.css";


function getStyle() {

    if (selectetStyle == null) {
        return lightmode;
    }
    return selectetStyle;
}

function choosMode(modename) {
    switch (modename) {
        case "darkmode":
            selectetStyle = darkmode;
            localStorage.setItem('selectetStyle', darkmode.valueOf());

            break;
        case "lightmode":
            selectetStyle = lightmode;
            localStorage.setItem('selectetStyle', lightmode.valueOf());



    }
}