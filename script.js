let voterName = prompt(" Enter the voter name: ");

let voters = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
  ["Iva", false],
];

function findVoter(name) {
  for (let i = 0; i < voters.length; i++) {
    if (name === voters[i][0]) {
      for (let j = 0; j < voters[i].length; j++) {
        if (j === 1) {
          if (voters[i][j] === true) {
            let table = document.createElement("table");
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerText = voters[i][0];

            let td2 = document.createElement("td");
            td2.innerText = voters[i][1];

            let td3 = document.createElement("td");
            td3.innerText = voters[i][2];

            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);

            table.appendChild(tr);

            document.getElementById("table-info").appendChild(table);
          } else {
            let table = document.createElement("table");
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerText = voters[i][0];

            let td2 = document.createElement("td");
            td2.innerText = voters[i][1];

            tr.appendChild(td1);
            tr.appendChild(td2);

            table.appendChild(tr);

            document.getElementById("table-info").appendChild(table);
          }
        }
      }
    }
  }
}
findVoter(voterName);
