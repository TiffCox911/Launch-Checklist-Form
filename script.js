// Write your JavaScript code here!
let flagFuel= false;
let flagCargo = false;
let boolFlag = false;

window.addEventListener("load", function() {
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let index = Math.floor(Math.random() * 10);
         console.log(json[index].name);
         document.getElementById("missionTarget").innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
         `;
      });
   });

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName]");
      let coPilot = document.querySelector("input[name=copilotName]");
      let fuel = document.querySelector("input[name=fuelLevel]");
      let cargo = document.querySelector("input[name=cargoMass]");

      document.getElementById('launchStatus').innerText = 'Awaiting Information Before Launch';
      document.getElementById('launchStatus').style.color= "black";
      document.getElementById("pilotStatus").innerText = `Pilot ${pilot.value} is Ready for Launch`;
      document.getElementById("copilotStatus").innerText = `Co-Pilot ${coPilot.value} is Ready for Launch`;
      document.getElementById("fuelStatus").innerText = "Fuel Level High Enough for Launch";
      document.getElementById("cargoStatus").innerText = "Cargo Mass Low Enough for Launch";

      

      if (pilot.value.trim() === "" || coPilot.value.trim() === "" || fuel.value.trim() === "" || cargo.value.trim() === "") {
         alert("All fields are required!");
         event.preventDefault();
        
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof String(pilot.value) !== "string" || pilot.value.trim().length === 0) {
         alert("Pilot name is required");
         event.preventDefault();
        
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (!isNaN(Number(pilot.value)) && pilot.value.trim().length > 0) {
         alert("Invalid Pilot Entry!");
         event.preventDefault();
       
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof String(coPilot.value) !== "string" || coPilot.value.trim().length === 0) {
         alert("Invalid Co-Pilot entry!");
         event.preventDefault();
        
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (!isNaN(Number(coPilot.value)) && coPilot.value.trim().length > 0) {
         alert("Invalid Co-pilot entry!");
         event.preventDefault();
        
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof Number(fuel.value) !== "number" || isNaN(Number(fuel.value))) {
         alert("Invalid Fuel Entry! Must be a numeric value");
         event.preventDefault();
        
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else if (typeof Number(cargo.value) !== "number" || isNaN(Number(cargo.value))) {
         alert("Invalid Cargo Entry! Must be a numeric value");
         event.preventDefault();
         
         document.getElementById("faultyItems").style.visibility = "hidden";
      } else {
         boolFlag = true;
      }

      if (Number(fuel.value) < 10000 && boolFlag) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerText = `Fuel level too low for launch`
         document.getElementById('launchStatus').innerText = 'Shuttle Not Ready for Launch!';
         document.getElementById('launchStatus').style.color= "red";
         
         event.preventDefault();
      } else {
         flagFuel = true;
      }
      if (Number(cargo.value) > 10000 && boolFlag) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerText = `Cargo mass too high for launch`
         document.getElementById('launchStatus').innerText = 'Shuttle Not Ready for Launch!';
         document.getElementById('launchStatus').style.color= "red";
       
         event.preventDefault();
      } else {
         flagCargo = true;
      }
      if (flagCargo && flagFuel && boolFlag) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById('launchStatus').innerText = 'Shuttle is Ready for Launch!';
         document.getElementById('launchStatus').style.color= "green";
         event.preventDefault() 
      }
   });
});