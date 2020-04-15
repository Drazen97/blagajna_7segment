export default function drawRectangle(left, top, width, height) {
  if (document.createElement) {
    var newdiv = document.createElement("div");
    newdiv.style.position = "absolute";
    newdiv.style.left = left + "px";
    newdiv.style.top = top + "px";
    newdiv.style.width = width + "px";
    newdiv.style.height = height + "px";
    newdiv.style.backgroundColor = "black";
    newdiv.style.visibility = "visible";
    newdiv.id = "newdiv";
    newdiv.innerHTML = "";
    document.body.appendChild(newdiv);
  }
}

function doit(b, y) {
  var a = b;
  dolje1(a, y);
  dolje2(a, y);
  dolje3(a, y);
  lijevo1(a, y);
  lijevo2(a, y);
  desno1(a, y);
  desno2(a, y);
  var myrect = document.getElementById("newdiv");
  myrect.innerHTML = myrect.innerHTML + "<h1>   </h1>";
}
export { doit };
/*let botun = document.createElement("button");
botun.innerText = "doit";
botun.addEventListener("click", doit);
document.body.appendChild(botun);*/
//doit(50, 7);
//doit(10, 8);
export function dolje1(x, y) {
  drawRectangle(x, 42 + y, 34, 4);
}
export function dolje2(x, y) {
  drawRectangle(x, 68 + y, 34, 4);
}
export function dolje3(x, y) {
  drawRectangle(x, 95 + y, 34, 4);
}
export function lijevo1(x, y) {
  drawRectangle(x, 49 + y, 4, 18);
}
export function lijevo2(x, y) {
  drawRectangle(x, 75 + y, 4, 19);
}
export function desno1(x, y) {
  drawRectangle(x + 31, 49 + y, 4, 18);
}
export function desno2(x, y) {
  drawRectangle(x + 31, 75 + y, 4, 19);
}

export function nula(x, y) {
  dolje1(x, y);
  dolje3(x, y);
  lijevo1(x, y);
  lijevo2(x, y);
  desno1(x, y);
  desno2(x, y);
}
export function jedan(x, y) {
  desno1(x, y);
  desno2(x, y);
}
export function dva(a, y) {
  dolje1(a, y);
  dolje2(a, y);
  dolje3(a, y);
  lijevo2(a, y);
  desno1(a, y);
}
export function tri(a, y) {
  dolje1(a, y);
  dolje2(a, y);
  dolje3(a, y);
  desno2(a, y);
  desno1(a, y);
}
export function cetiri(a, y) {
  dolje2(a, y);
  desno2(a, y);
  lijevo1(a, y);
}
export function pet(a, y) {
  dolje1(a, y);
  dolje2(a, y);
  dolje3(a, y);
  desno2(a, y);
  lijevo1(a, y);
}
export function sest(a, y) {
  dolje1(a, y);
  dolje2(a, y);
  dolje3(a, y);
  desno2(a, y);
  lijevo1(a, y);
  lijevo2(a, y);
}
export function sedam(a, y) {
  dolje1(a, y);
  desno2(a, y);
  desno1(a, y);
}
export function osam(a, y) {
  doit(a, y);
}
export function devet(a, y) {
  tri(a, y);
  lijevo1(a, y);
}
export function A(a, y) {
  dolje1(a, y);
  dolje2(a, y);
  lijevo1(a, y);
  lijevo2(a, y);
  desno1(a, y);
  desno2(a, y);
}
export function a(x, y) {
  dolje2(x, y);
  dolje3(x, y);
  lijevo2(x, y);
  desno2(x, y);
}
export function B(a, y) {
  osam(a, y);
}
export function b(x, y) {
  a(x, y);
  lijevo1(x, y);
}
export function C(a, y) {
  dolje1(a, y);
  dolje3(a, y);
  lijevo1(a, y);
  lijevo2(a, y);
}
export function c(a, y) {
  dolje2(a, y);
  dolje3(a, y);
  lijevo2(a, y);
}
export function D(a, y) {
  nula(a, y);
}
export function d(x, y) {
  a(x, y);
  desno1(x, y);
}

export function E(a, y) {
  C(a, y);
  dolje2(a, y);
}
export function F(a, y) {
  dolje1(a, y);
  dolje2(a, y);
  lijevo1(a, y);
  lijevo2(a, y);
}
var pomak = 5;
export function crtaj_gore(broj, y) {
  pomak = 10;
  for (let i = 0; i < broj.length; i++) {
    switch (broj[i]) {
      case "0":
        nula(pomak, y);
        pomak += 30;
        break;
      case "1":
        jedan(pomak, y);
        pomak += 30;
        break;
      case "2":
        dva(pomak, y);
        pomak += 30;
        break;
      case "3":
        tri(pomak, y);
        pomak += 30;
        break;
      case "4":
        cetiri(pomak, y);
        pomak += 30;
        break;
      case "5":
        pet(pomak, y);
        pomak += 30;
        break;
      case "6":
        sest(pomak, y);
        pomak += 30;
        break;
      case "7":
        sedam(pomak, y);
        pomak += 30;
        break;
      case "8":
        osam(pomak, y);
        pomak += 30;
        break;
      case "9":
        devet(pomak, y);
        pomak += 30;
        break;
      case "A":
        A(pomak, y);
        pomak += 30;
        break;
      case "a":
        a(pomak, y);
        pomak += 30;
        break;
      case "B":
        B(pomak, y);
        pomak += 30;
        break;
      case "b":
        b(pomak, y);
        pomak += 30;
        break;
      case "C":
        C(pomak, y);
        pomak += 30;
        break;
      case "c":
        c(pomak, y);
        pomak += 30;
        break;
      case "D":
        D(pomak, y);
        pomak += 30;
        break;
      case "d":
        d(pomak, y);
        pomak += 30;
        break;
      case "E":
        E(pomak, y);
        pomak += 30;
        break;
      case "F":
        F(pomak, y);
        pomak += 30;
        break;
      default:
        drawRectangle(pomak, 95 + y, 8, 5);
    }
    pomak += 10;
  }
}
