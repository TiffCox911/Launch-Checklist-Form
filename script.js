// Write your JavaScript code he
// Not to self completed the first task but functionality isn't working propoerly

window.addEventListener("load", function(){
 fetch('https://handlers.education.launchcode.org/static/planets.json').
 then((response) => {
  response.json().then((json) => {
      const missions = document.getElementById('missionTarget');
      const indexValue  = Math.round(Math.random()* 10);

      while(indexValue >= json.length)
      {
         indexValue >= Math.round(Math.random() * 10)
      }

      if (missions)
      {
         let displayInfo = `<h2>Mission Destination</h2>

         <ol>
               <li>Name: ${json[indexValue].name}</li>
               <li>Diameter: ${json[indexValue].diameter}</li>
               <li>Star: ${json[indexValue].star}</li>
               <li>Distance from Earth: ${json[indexValue].distance}</li>
               <li>Number of Moons: ${json[indexValue].moons}</li>
         </ol>
               <img src="${json[indexValue].image}">`;
               missions.innerHTML = displayInfo;
      }
      else
      {
         console.log("Not Found!")
      }
   

   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
   event.preventDefault(); 

   let pilotInfo = document.querySelector("input[name=pilotName]");
   let copilotInfo= document.querySelector("input[name=copilotName]");
   let fuelLevelInfo = document.querySelector("input[name=fuelLevel]");
   let cargoMassInfo = document.querySelector("input[name=cargoMass]")

   
     
   if((pilotInfo.value !== '' )||(copilotInfo.value !== '')||(fuelLevelInfo.value === '')||(cargoMassInfo.value === ''))
   {
      alert("All fields are required")
      event.preventDefault();
   }    

   else if (isNan(pilotInfo.value) !== true || isNan(copilotInfo.value) !== true)
   {
      alert("Invalid Name!")
      event.preventDefault();
   }

   
   else if (isNan(fuelLevelInfo.value) !== true || isNan(cargoMassInfo.value) !== true)
   {
     alert("Invalid entry");
     event.preventDefault();
      
   }

   else
   {
      document.getElementById("pilotStatus").innerHTML =`Pilot ${pilotInfo.value} is ready`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotInfo.value} ready`;

   }

      if(fuelLevelInfo.value <= 10000)
      {
         document.getElementById("faultItems").style.visibility = "visible";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready`;
         document.getElementById("launchStatus").style.color = 'red';
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low`;
      }
      else
      {
         document.getElementById("fuelStatus").innerHTML = `Fuel level is high enough`
      }

   
     if (cargoMassInfo.value >= 10000)
      {
         document.getElementById("faultyItems").style.visibility = 'visible';
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("cargoStatus").innerHTML = `Cargo mass level is too high`;
      }
      else
      {
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
      }

      if (fuelLevelInfo.value >= 10000 && cargoMassInfo.value <= 10000)
      {
         document.getElementById("launchStatus").innerHTML = `Shuttle ready for launch`;
         document.getElementById("launchStatus").style.color = `green`;
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
         document.getElementById("faultyItems").style.visibility = `hidden`;
      }

      event.preventDefault();
   });
  });
});
});
   
      
   