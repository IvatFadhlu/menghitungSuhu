function MenghitungSuhu() {
  var Temperatur = prompt("Berapa tempteraturnya?\n");
  var satuan = prompt("apa satuannya?\n");
  var konversi = prompt("Mau dikonversi ke mana?\n");

  let Temperatur = 36,
    satuan = "C",
    konversi = "F",
    hasil;

  if (satuan == "C" && konversi == "F") {
    hasil = (9 / 5) * Temperatur + 32;
    console.log(hasil);
  } else if (satuan == "C" && konversi == "R") {
    hasil = (5 / 4) * Temperatur;
    console.log(hasil);
  } else if (satuan == "R" && konversi == "F") {
    hasil = (4 / 9) * (Temperatur - 32);
    console.log(hasil);
  } else if (satuan == "F" && konversi == "C") {
    hasil = (5 / 9) * (Temperatur - 32);
    console.log(hasil);
  } else if (satuan == "R" && konversi == "C") {
    hasil = (4 / 5) * Temperatur;
    console.log(hasil);
  } else if (satuan == "F" && konversi == "R") {
    hasil = (9 / 4) * Temperatur + 32;
    console.log(hasil);
  }
  return hasil;
}

console.log(MenghitungSuhu);
