document.getElementById("registration-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  var currentDate = new Date();
  var formattedDate = currentDate.toLocaleDateString();

  addParticipant(name, formattedDate);
});
function addParticipant(name, registrationDate) {
  var table = document.getElementById("participants");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = name;
  cell2.innerHTML = registrationDate;
  cell3.innerHTML = "Ainda não realizado";
  cell4.innerHTML = '<button onclick="checkIn(this)"> Confirmar Check-in</button>';
}

function checkIn(button) {
  var row = button.parentNode.parentNode;
  var currentDate = new Date();
  var formattedDateTime = currentDate.toLocaleString();
  row.cells[2].innerHTML = formattedDateTime;
  button.disabled = true;
}

function addInitialParticipants() {
  var initialParticipants = [
    { name: "Kanye West", registrationDate: "2024-04-23", checkInDateTime: "2024-04-23 10:00:00" },
    { name: "Rafaela Melgado", registrationDate: "2024-04-22", checkInDateTime: "2024-04-22 09:30:00" },
    // Adicione mais participantes conforme necessário
  ];

  initialParticipants.forEach(function(participant) {
    addParticipantWithCheckIn(participant.name, participant.registrationDate, participant.checkInDateTime);
  });
}
window.addEventListener("load", addInitialParticipants);

function addParticipantWithCheckIn(name, registrationDate, checkInDateTime) {
  var table = document.getElementById("participants");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = name;
  cell2.innerHTML = registrationDate;
  cell3.innerHTML = checkInDateTime;
  cell4.innerHTML = '<button disabled>Check-in Realizado</button>';
}