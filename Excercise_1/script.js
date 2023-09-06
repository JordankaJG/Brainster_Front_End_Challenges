// Excercise one:

let personArr = [];

function PersonInfo(_name, _companyName, _jobPosition, _salary) {
  this.name = _name;
  this.companyName = _companyName;
  this.jobPosition = _jobPosition;
  this.salary = _salary;
}

let person1 = new PersonInfo("Jordy", "MEGEO Trade", "Director", "20 000$");

let person2 = new PersonInfo("Mike", "EBET Inc", "Boss", "350 000$");

let person3 = new PersonInfo("John", "Leo Vegas", "Employee", "14 000$");

personArr.push(person1, person2, person3);

let body = document.querySelector("body");

personArr.forEach((person) => {
  let ul = document.createElement("ul");
  body.appendChild(ul);
  let li1 = document.createElement("li");
  li1.innerHTML += "Name" + ":" + " " + person.name;
  let li2 = document.createElement("li");
  li2.innerHTML += "Company Name" + ":" + " " + person.companyName;
  let li3 = document.createElement("li");
  li3.innerHTML += "Job Position" + ":" + " " + person.jobPosition;
  let li4 = document.createElement("li");
  li4.innerHTML += "Salary" + ":" + " " + person.salary;
  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
});
