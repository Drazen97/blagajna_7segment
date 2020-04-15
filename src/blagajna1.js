import drawRectangle, {
  doit,
  dolje1,
  dolje2,
  dolje3,
  desno1,
  desno2,
  lijevo1,
  lijevo2
} from "/src/index.js";
import {
  nula,
  jedan,
  dva,
  tri,
  cetiri,
  pet,
  sest,
  sedam,
  osam,
  devet,
  A,
  a,
  B,
  b,
  C,
  c,
  D,
  d,
  E,
  F,
  crtaj_gore
} from "/src/index.js";
document.clear();
var pomak = 0; //svaki put kad dodajemo znak pomicemo se desno
function artikal(sifra, cijena, popust) {
  return {
    sifra: sifra,
    cijena: cijena,
    popust: popust
  };
}
var blagajna = {
  lipe: 99,
  kune: 50,
  dvice: 50,
  petice: 50,
  stotice: 100,
  stanje: function() {
    return (
      this.kune +
      this.dvice * 2 +
      this.petice * 5 +
      this.stotice * 100 +
      "kn i " +
      this.lipe +
      " lipa"
    );
  }
};

var kosarica = [];
function racunaj(lista) {
  let cijena = 0;
  for (var i = 0; i < lista.length; i++) {
    cijena += lista[i].cijena * (1 - lista[i].popust / 100);
    kosarica.push(lista[i].sifra);
  }
  if (cijena > 1000) {
    for (i = 0; i < lista.length; i++) {
      if (lista[i].popust === 0) {
        cijena -= lista[i].cijena;
      }
    }
  }
  console.log(" cijena iznosi " + cijena.toFixed(2));
  return cijena.toFixed(2);
}

function suma_apoena(apoeni) {
  var suma = 0;
  for (var i = 0; i < apoeni.length; i++) {
    suma += apoeni[i];
  }
  return suma;
}
function odluka(apoeni, lista) {
  console.log(kosarica);
  let suma = racunaj(lista);
  sredi_blagajnu(apoeni);
  let poruka = " placeno ";
  let razlika = 0;
  if (suma_apoena(apoeni) > suma) {
    razlika = (suma_apoena(apoeni) - suma).toFixed(2);
    poruka = "platili ste viska " + razlika + "kn";
    crtaj_gore(lista[lista.length - 1].cijena.toString(), 10);
    crtaj_gore(suma, 95);
    //moramo vratiti novce i ponovo srediti blagajnu nakon vracenih novaca
    sredi_blagajnu2(
      vrati_novce(
        blagajna.stotice,
        blagajna.petice,
        blagajna.dvice,
        blagajna.kune,
        Math.floor(razlika)
      )
    );

    blagajna.lipe -= (100 * (razlika - Math.floor(razlika))).toFixed(2);
    return poruka;
  } else if (suma_apoena(apoeni) < suma) {
    let a = suma_apoena(apoeni);
    razlika = (suma - suma_apoena(apoeni)).toFixed(2);
    document.clear();
    crtaj_gore("Ed  ." + razlika, 10);
    crtaj_gore(suma, 95);
    poruka = "duzni ste jos " + razlika + "kn:";
    poruka += " mozete izbaciti sljedece artikle kako bi iznos bio dovoljan: ";
    while (a < suma) {
      poruka += " " + lista[najskuplji(lista)].sifra + " ";
      suma = suma - lista[najskuplji(lista)].cijena;
      lista.splice(najskuplji(lista), 1);
    }
  }

  return poruka;
}

function najskuplji(lista) {
  var najveci = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].cijena > lista[najveci].cijena) {
      najveci = i;
    }
  }
  return najveci;
}
function sredi_blagajnu(apoeni) {
  for (var i = 0; i < apoeni.length; i++) {
    switch (apoeni[i]) {
      case 1:
        blagajna.kune++;
        break;
      case 2:
        blagajna.dvice++;
        break;
      case 100:
        blagajna.stotice++;
        break;
      default:
        blagajna.petice++;
    }
  }
}
function sredi_blagajnu2(apoeni) {
  for (var i = 0; i < apoeni.length; i++) {
    switch (apoeni[i]) {
      case 1:
        blagajna.kune--;
        break;
      case 2:
        blagajna.dvice--;
        break;
      case 100:
        blagajna.stotice--;
        break;
      default:
        blagajna.petice--;
    }
  }
}
//sada koristimo funkciju iz  proslog domaceg rada

function vrati_novce(a, b, c, d, n) {
  let lista_povrat = [];
  let lista1 = [a, b, c, d];
  let lista = [100, 5, 2, 1];
  let k = 0;

  while (n > 0) {
    if (n >= lista[k]) {
      if (lista1[k] > 0) {
        n = n - lista[k];
        lista_povrat.push(lista[k]);
        lista1[k]--;
      } else {
        k++;
      }
    } else {
      k++;
    }
  }

  return lista_povrat;
}

var cokolada = artikal("cokolada", 100, 5);
var margarin = artikal("margarin", 12, 0);
console.log(
  odluka([5, 2, 5, 1, 100, 100], [margarin, cokolada, cokolada, margarin])
);
console.log("stanje po apoenima u blagajni");
console.log(blagajna);
console.log("ukupnno stanje u blagajni iznosi " + blagajna.stanje());
