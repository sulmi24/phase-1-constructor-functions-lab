function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

let objOne = new scooter(2015, "red", "swoosh");
let objTwo = new driver("Allison", "16 years", "2 years");
let obj = new PickupLocation("123 Broadway", "New York City");

console.log(obj.year);
obj.color;
obj.model;
