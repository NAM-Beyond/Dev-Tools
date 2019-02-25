var Eventlistener = false;
var Colorinterval;
var RedColor = 0;
var GreenColor = 0;
var BlueColor = 0;
var HexRed = "00";
var HexGreen = "00";
var HexBlue = "00";
var LetterList = ["a", "b", "c", "d", "e", "f"];
var Color = "";
var DecColor = 0;
var HexColor = "";
var x = 0;
function Light(x,y,z) {
    document.getElementById(x).style.color = y;
    document.getElementById(x).style.backgroundColor = z;
}
function KeyCodes() {
    BackOption();
    document.getElementById("MainBox").innerHTML = "";
    document.getElementById("Title").innerHTML = "Key Codes";
    let InputField = document.createElement("input");
    InputField.type = "text";
    InputField.setAttribute("onkeypress", "WhichKey(event)");
    let OutputField = document.createElement("div");
    OutputField.id = "OutputField";
    document.getElementById("MainBox").appendChild(InputField);
    document.getElementById("MainBox").appendChild(OutputField);
}
function WhichKey(event) {
    let x = event.which || event.keyCode;
    document.getElementById("OutputField").innerHTML = "The key pressed is : " + event.key + ". Which keycode is : " + x;
}
function ColorCodes() {
    BackOption();
    document.getElementById("Title").innerHTML = "Color Hex Codes";
    document.getElementById("MainBox").innerHTML = "<table border=\"1\" style=\"border-collapse:collapse; text-align:center; background-color:#FFFFFF;\"><tr><th><button class=\"boxes\" ontouchstart=\"changeColor(2)\" ontouchend=\"stopchangeColor()\" onmousedown=\"changeColor(2)\" onmouseup=\"stopchangeColor()\">-</button>&nbsp;Red&nbsp;<button class=\"boxes\" ontouchstart=\"changeColor(1)\" ontouchend=\"stopchangeColor()\" onmousedown=\"changeColor(1)\" onmouseup=\"stopchangeColor()\">+</button></th><th><button class=\"boxes\" ontouchstart=\"changeColor(4)\" ontouchend=\"stopchangeColor()\" onmousedown=\"changeColor(4)\" onmouseup=\"stopchangeColor()\">-</button>&nbsp;Green&nbsp;<button class=\"boxes\" ontouchstart=\"changeColor(3)\" ontouchend=\"stopchangeColor()\" onmousedown=\"changeColor(3)\" onmouseup=\"stopchangeColor()\">+</button></th><th><button class=\"boxes\" onmousedown=\"changeColor(6)\" onmouseup=\"stopchangeColor()\" ontouchstart=\"changeColor(6)\" ontouchend=\"stopchangeColor()\">-</button>&nbsp;Blue&nbsp;<button class=\"boxes\" onmousedown=\"changeColor(5)\" onmouseup=\"stopchangeColor()\" ontouchstart=\"changeColor(5)\" ontouchend=\"stopchangeColor()\">+</button></th></tr><tr><td id=\"Red\">00</td><td id=\"Green\">00</td><td id=\"Blue\">00</td></tr><tr><td colspan=\"3\" id=\"HexColor\">#000000</td></tr></table>";
    document.body.style.backgroundColor = "#000000";
    Eventlistener = true;
}
function changeColor(y) {
    Colorinterval = setInterval(() => {
        if (y == 1 && RedColor < 255) {
            Color = "Red";
            DecColor = RedColor;
            x = 1;
        }
        else if (y == 2 && RedColor > 0) {
            Color = "Red";
            DecColor = RedColor;
            x = -1;
        }
        else if (y == 3 && GreenColor < 255) {
            Color = "Green";
            DecColor = GreenColor;
            x = 1;
        }
        else if (y == 4 && GreenColor > 0) {
            Color = "Green";
            DecColor = GreenColor;
            x = -1;
        }
        else if (y == 5 && BlueColor < 255) {
            Color = "Blue";
            DecColor = BlueColor;
            x = 1;
        }
        else if (y == 6 && BlueColor > 0) {
            Color = "Blue";
            DecColor = BlueColor;
            x = -1;
        }
        else {
            return;
        }
        DecColor += x;
        HexColor = DecColor.toString(16);
        if (HexColor < 10 || LetterList.includes(HexColor)) {
            HexColor = "0" + HexColor;
        }
        if (y == 1 || y == 2) {
            RedColor = DecColor;
            HexRed = HexColor;
        }
        else if (y == 3 || y == 4) {
            GreenColor = DecColor;
            HexGreen = HexColor;
        }
        else if (y == 5 || y == 6) {
            BlueColor = DecColor;
            HexBlue = HexColor;
        }
        document.body.style.backgroundColor = "#" + HexRed + HexGreen + HexBlue;
        document.getElementById(Color).innerHTML = DecColor;
        document.getElementById("HexColor").innerHTML = "#" + HexRed + HexGreen + HexBlue;
    }, 50);
}
function stopchangeColor() {
    clearInterval(Colorinterval);
}
function BackOption() {
    document.getElementById("Browse").innerHTML = "";
    let BackButton = document.createElement("button");
    BackButton.innerHTML = "Back to the main menu";
    BackButton.setAttribute("onclick", "BackToMenu()");
    document.getElementById("Browse").appendChild(BackButton);
}
function BackToMenu() {
    if (Eventlistener === true) {
        Eventlistener = false;
        RedColor = 0;
        GreenColor = 0;
        BlueColor = 0;
        HexRed = "00";
        HexGreen = "00";
        HexBlue = "00";
    }
    document.body.style.backgroundColor = "#FFFFFF";
    document.getElementById("Title").innerHTML = "Dev Tools";
    document.getElementById("Browse").innerHTML = "<b>Which tool do you want to use ?</b>";
    document.getElementById("MainBox").innerHTML = "<button id=\"KeyCodes\" class=\"boxes\" style=\"grid-column: 1 / 1; grid-row: 1;\" onclick=\"KeyCodes()\" onmouseover=\"Light(\'KeyCodes\', \'#FFFFFF\', \'#0099FF\')\" onmouseout=\"Light(\'KeyCodes\', \'#000000\', \'#FFFFFF\')\">Key Codes</button><button id=\"ColorCodes\" class=\"boxes\" style=\"grid-column: 2 / 2; grid-row: 1;\" onclick=\"ColorCodes()\" onmouseover=\"Light(\'ColorCodes\', \'#FFFFFF\', \'#0099FF\')\" onmouseout=\"Light(\'ColorCodes\', \'#000000\', \'#FFFFFF\')\">Color Hex Codes</button>";
}