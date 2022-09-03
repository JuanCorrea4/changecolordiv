function GetColor() {
  var colorSelect = document.getElementById("color").value;
  console.log(colorSelect);
  return colorSelect;
}

function ChangeColor() {
  let headerColor = document.getElementById("changeColorID");
  let buttomColor = document.getElementById("changeColorIDMycv");
  let folder = document.getElementById("folder");

  headerColor.style.backgroundColor = GetColor();

  buttomColor.style.backgroundColor = GetColor();

  folder.style.color = GetColor();
}
let subtract = document.getElementById("subtract");

let add = document.getElementById("add");

let numberId = document.getElementById("numberPx").value;

function subtractPixels() {
  if (subtract) {
    console.log(subtract)
    for (i = 0; i > 1; i++) {
        subtract.style.borderRadius = i+"px";
        numberId.innerHTML = i;
        return i;
    }
  }
}

function addPixels() {
  if (add) {
    console.log(add)
    for (i = 0; i > 1; i++) {
        add.style.borderRadius = i+"px";
        numberId.innerHTML = i;
    }
  }
}
