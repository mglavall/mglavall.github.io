const names = [
  "Marçal",
  "Marsa",
  "Marsupesa",
  "Marsi",
  "Marsa Calamarsa",
  "Marsu",
  "La Marsellesa",
  "DJ Marsa",
  "Marsupas",
  "Bruno Marsa",
  "Marsupilami",
  "Marsa ttack",
  "Marcelo",
  "Marcelino",
  "The good old Marsi",
  "Marsupiskas",
  "Marsupuesto que sí",
  "Marshmellow",
  "U.S. Marshal"
];
var name = "Marçal";

function getRandomName() {
  var aux = false;

  while (!aux) {
    var newName = names[Math.floor(Math.random() * names.length)];
    if (newName != name) {
      aux = true;
    }
  }
  document.getElementById("name").innerHTML = newName;
  name = newName;
}
