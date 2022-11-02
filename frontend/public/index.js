let variable = `
    <div class='container'>
      <h1>Starship Generator Prototype for ${user.username}!</h1>
      <h1 id='BPU'>BPU: No BPU set</h1>
      <h1>PCU: 0</h1>
      <label for='tier'>Select a tier: </label>
      <select id='tier' onchange='handleSelectedTier(this.value)'>
        <option selected='true' disabled='disabled'>Choose Tier</option>
      </select>
      <br />
      <form onsubmit='return false'>
        <label>Manual Override:  
          <input type='text' onchange='setTierBpuLimiter(this.value)'/>
        </label>
      </form>
      <div class='input'>
        Frame: 
        <select id='frame' onchange={handleSelectedFrame}>
          <option selected='true' disabled='disabled'>Choose Frame</option>   
        </select>
        <br />
        Core: 
        <select id='power' onchange={handleSelectedCore}>
          <option selected='true' disabled='disabled'>Choose Core</option>   
        </select>
        <br />
        Thruster: 
        <select id='thruster' onchange={handleSelectedThruster}>
          <option selected='true' disabled='disabled'>Choose Thrusters</option>   
        </select>
        <br />
        Drift Engine: 
        <select id='drift' onchange={handleSelectedDriftEngine}>
          <option selected='true' disabled='disabled'>Choose Drift Engine</option>   
        </select>
        <br />
        Sensors:
        <select id='sensor' onchange={handleSelectedSensor}>
          <option selected='true' disabled='disabled'>Choose Sensor</option>
        </select>
        <br />
        <br />
        Computers:
        <select id='computer' onchange={handleSelectedComputer}>
        </select>
        <br />
        Crew Quarters: 
        <select id='crewquarter' onchange={handleSelectedCrewQuarter}>
        </select>
        <br />
        <br />
        Armor: 
        <select id='armor' onchange={handleSelectedArmor}>
          <option selected='true' disabled='disabled'>Choose Armor</option>
        </select>
        <br />
        Defensive Countermeasures: 
        <select id='defense' onchange={handleSelectedDefenseiveCountermeasure}>
          <option selected='true' disabled='disabled'>Choose Defenses</option>
        </select>
        <br />
        Security: 
        <select id='security' onchange='handleSelectedSecurity(this.value)'>
          <option selected='true' disabled='disabled'>Choose Security</option>
        </select>
        <br />
        &nbsp;
        <select id='longarm' style='display:none' onchange={handleLongarmCosts}>
          <option selected='true' disabled='disabled'>Choose Longarm Turret</option>
        </select>
        <select id='heavy' style='display:none' onchange={handleHeavyCosts}>
          <option selected='true' disabled='disabled'>Choose Heavy Turret</option>
        </select>
        <br />
        Shields: 
        <select id='shield' onchange={handleSelectedShield}>
          <option selected='true' disabled='disabled'>Choose Shields</option>
        </select>
        <br />
        Weapons: 
        <select id='weapon' onchange={handleSelectedWeapon}>
          <option selected='true' disabled='disabled'>Choose Weapons</option>
        </select>
        <br />
        Expansion Bay: 
        <select id='expansionbay' multiple onchange={handleSelectedExpansionBay}>
        </select>
      </div>
    </div>`

let element = document.getElementById("root").insertAdjacentHTML("afterbegin", variable);

let tiersSelect = document.getElementById("tier");
for (tier of Tiers){
    let option = document.createElement("option");
    option.value = tier.bpuLimiter;
    option.text = `Tier: ${tier.tier} BP Limit: ${tier.bpuLimiter} HP increases: ${tier.special}`;
    tiersSelect.appendChild(option);
}

// repeat this process for all of the select options - add in BPU and PCU counter later
let frameSelect = document.getElementById("frame");
for (frame of Frames){
  let option = document.createElement("option");
  option.value = frame.size + ', ' + frame.cost + ', ' + frame.id;
  option.title = `  Size: ${frame.size}  
  Maneuverability: ${frame.maneuverability}  
  HP: ${frame.hp}  
  DT: ${frame.dt}  
  Mounts: ${frame.mounts}  
  Expansion Bays: ${frame.expansionBays}  
  Minimum Crew: ${frame.minimumCrew}  
  Maximum Crew ${frame.maximumCrew}  `;
  option.text = `${frame.frame} Increment: ${frame.increment} Cost: ${frame.cost}`;
  frameSelect.appendChild(option);
}

let powerSelect = document.getElementById("power");
for (power of PowerCores){
  let option = document.createElement("option");
  option.value = power.cost + '. ' + power.pcu;
  option.title = `  Size: ${power.size}  
  PCU: ${power.pcu}  
  Cost: ${power.cost}  `;
  option.text = `${power.core}`;
  powerSelect.appendChild(option);
}

let thrusterSelect = document.getElementById("thruster");
for (thruster of Thrusters){
  let option = document.createElement("option");
  option.value = thruster.cost + '. ' + thruster.pcu;
  option.title = `  Speed: ${thruster.speed}  
  Piloting: ${thruster.piloting}  
  PCU: ${thruster.pcu}  `;
  option.text = `${thruster.thruster} Size: ${thruster.size} Cost (in BP): ${thruster.cost}`;
  thrusterSelect.appendChild(option);
}

let driftSelect = document.getElementById("drift");
for (drift of DriftEngine){
  let option = document.createElement("option");
  option.value = drift.cost;
  option.title = `  Rating: ${drift.rating}  
  Min. PCU: ${drift.pcuRequirement}  
  Max. Size: ${drift.maxSize}  `;
  option.text = `${drift.driftEngine} Cost: ${drift.cost} x size category`;
  driftSelect.appendChild(option);
}

let sensorSelect = document.getElementById("sensor");
for (sensor of Sensors){
  let option = document.createElement("option");
  option.value = sensor.cost;
  option.title = `  Range: ${sensor.range}  
  Modifier: ${sensor.modifier}  `;
  option.text = `${sensor.sensors} Cost (in BP): ${sensor.cost}`;
  sensorSelect.appendChild(option);
}

let computerSelect = document.getElementById("computer");
for (computer of Computers){
  let option = document.createElement("option");
  option.value = computer.cost + '. ' + computer.pcu;
  option.title = `  Bonus: ${computer.bonus}  
  Nodes: ${computer.nodes}  
  PCU: ${computer.pcu}  `;
  option.text = `${computer.computer} Cost (in BP): ${computer.cost}`;
  computerSelect.appendChild(option);
}

let crewquarterSelect = document.getElementById("crewquarter");
for (crewquarter of CrewQuarters){
  let option = document.createElement("option");
  option.value = crewquarter.cost;
  option.text = `${crewquarter.crewQuarters} Cost (in BP): ${crewquarter.cost}`;
  crewquarterSelect.appendChild(option);
}

let armorSelect = document.getElementById("armor");
for (armor of Armors){
  let option = document.createElement("option");
  option.value = armor.cost;
  option.title = `  AC: ${armor.armor}  
  Special: 
    Target Lock: ${armor.specialTL}  
    Turn Distance: ${armor.specialTD}  `;
  option.text = `${armor.armor} Cost (in BP): ${armor.cost}`;
  armorSelect.appendChild(option);
}

let defenseSelect = document.getElementById("defense");
for (defense of DefensiveCountermeasures){
  let option = document.createElement("option");
  option.value = defense.cost + ', ' + defense.pcu;
  option.title = `  Bonus to Target Lock: ${defense.TLbonus}  
  PCU: ${defense.pcu}  `;
  option.text = `${defense.defensiveCountermeasures} Cost (in BP): ${defense.cost}`;
  defenseSelect.appendChild(option);
}

let securitySelect = document.getElementById("security");
for (security of Securitys){
  let option = document.createElement("option");
  option.value = security.security;
  option.text = `${security.security} Cost (in BP): ${security.cost}`;
  securitySelect.appendChild(option);
}

let longarmSelect = document.getElementById("longarm");
for (longarm of PersonnelWeaponsLongarms){
  let option = document.createElement("option");
  option.value = longarm.level;
  option.text = `${longarm.weapon} Item Level: ${longarm.level}`;
  longarmSelect.appendChild(option);
}

let heavySelect = document.getElementById("heavy");
for (heavy of PersonnelWeaponsHeavys){
  let option = document.createElement("option");
  option.value = heavy.level;
  option.text = `${heavy.weapon} Item Level: ${heavy.level}`;
  heavySelect.appendChild(option);
}

let shieldSelect = document.getElementById("shield");
for (shield of Shields){
  let option = document.createElement("option");
  option.value = shield.cost + ', ' + shield.pcu;
  option.title = `  Total SP: ${shield.totalSP}  
  Regen.: ${shield.regen}  
  PCU: ${shield.pcu}  `;
  option.text = `${shield.shield} Cost (in BP): ${shield.cost}`;
  shieldSelect.appendChild(option);
}

let weaponSelect = document.getElementById("weapon");
for (weapon of Weapons){
  let option = document.createElement("option");
  option.value = weapon.cost + ', ' + weapon.pcu;
  option.title = `  Range: ${weapon.range}  
  Speed: ${weapon.speed}  
  Damage: ${weapon.damage}  
  PCU: ${weapon.pcu}  
  Special: ${weapon.special}  `;
  option.text = `${weapon.weapon} Cost (in BP): ${weapon.cost}`;
  weaponSelect.appendChild(option);
}

let expansionbaySelect = document.getElementById("expansionbay");
for (expansionbay of ExpansionBays){
  let option = document.createElement("option");
  option.value = expansionbay.cost + ', ' + expansionbay.pcu;
  option.title = `  PCU: ${expansionbay.pcu}  `;
  option.text = `${expansionbay.expansionBay} Cost (in BP): ${expansionbay.cost}`;
  expansionbaySelect.appendChild(option);
}

localStorage.setItem('example', 'sample')
let tierBpuLimiter = 0;

function setTierBpuLimiter(value) {
    tierBpuLimiter = value;
    document.getElementById("BPU").innerText = "BPU: " + tierBpuLimiter;
}



function handleSelectedTier(value) {
    // console.log(event.target.value);
    let selectedOption = value;
    setTierBpuLimiter(selectedOption);
}
function handleSelectedFrame(event) {
  let selectedOption = event.target.value;
  //Create an array of items.
  let itemsPassedInToArray = selectedOption.split(",");
  //creates an array of the values passed in ex: ["size","bp"]
  //this splits the array at the comma, effectively making two stings
  let size = itemsPassedInToArray[0];
  setShipSize(size);
  //this takes the first variable, which is still a string
  let cost = parseInt(itemsPassedInToArray[1]);
  //this takes the second variable, but makes it an Int
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedCore(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter(pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedThruster(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function swapShipSize(event) {
  let sizeCategory = 0;
  if (shipSize === "Tiny") {
    sizeCategory = 1;
  }
  if (shipSize === "Small") {
    sizeCategory = 2;
  }
  if (shipSize === "Medium") {
    sizeCategory = 3;
  }
  if (shipSize === "Large") {
    sizeCategory = 4;
  }
  if (shipSize === "Huge") {
    sizeCategory = 5;
  }
  if (shipSize === "Gargantuan") {
    sizeCategory = 6;
  } 
  else if (shipSize === "Colossal") {
    sizeCategory = 7;
  }
  return sizeCategory;
}

function handleSelectedDriftEngine(event) {
  let selectedOption = event.target.value * swapShipSize();
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedSensor(event) {
  let selectedOption = event.target.value;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedArmor(event) {
  let selectedOption = event.target.value * swapShipSize();
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
} //DO NOT FORGET TO UPDATE YOUR SERIALIZERS!!!
function handleSelectedComputer(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedCrewQuarter(event) {
  let selectedOption = event.target.value;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedDefenseiveCountermeasure(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedExpansionBay(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedShield(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedSecurity(value) {
  if (value === 'Antipersonnel weapon (longarm)') {
    document.getElementById("longarm").style.display = '';
    document.getElementById("heavy").style.display = 'none';
    document.getElementById("heavy").selectedIndex = 0;
    //TODO: fix this so it doesn't retain values
  }
  else if (value === 'Antipersonnel weapon (heavy)') {
    document.getElementById("heavy").style.display = '';
    document.getElementById("longarm").style.display = 'none';
    document.getElementById("longarm").selectedIndex = 0;
  }
  else {
    document.getElementById("longarm").style.display = 'none';
    document.getElementById("heavy").style.display = 'none';
    document.getElementById("heavy").selectedIndex = 0;
    document.getElementById("longarm").selectedIndex = 0;
  }
}
function handleHeavyCosts(event){
  let selectedOption =  event.target.value;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - (5 + parseInt(selectedOption)));
}
function handleLongarmCosts(event){
  let selectedOption = event.target.value;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedWeapon(event) {
  let selectedOption = event.target.value;
  let itemsPassedInToArray = selectedOption.split(",");
  let cost = parseInt(itemsPassedInToArray[0]);
  let pcu = parseInt(itemsPassedInToArray[1]);
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}