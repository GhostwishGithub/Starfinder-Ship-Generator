let variable = `
    <div class='container'>
      <h1>Starship Generator Prototype for ${user.username}!</h1>
      <h1 id='BPU'>BPU: No BPU set</h1>
      <h1>PCU: 0</h1>
      <label for='ships'>Edit a ship: </label>
      <select id='ships' onchange=''>
        <option selected='true' disabled='disabled'>No ship saved</option>
      </select><br />
      <label>Shipname:   
        <input id='name' type='text' value='Name' />
      </label>
      <br />
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
        <select id='security' onchange='handleSelectedSecurity(event)'>
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
        <select id='weapon' multiple onchange={handleSelectedWeapon}>
        </select>
        <br />
        Expansion Bay: 
        <select id='expansionbay' multiple onchange={handleSelectedExpansionBay}>
        </select>
        <br />
        <button type='submit' onclick='handleSaving()'>Save</button>
        <button type='submit' onclick='handlePrinting()'>PRINT</button>
      </div>
    </div>
    <div id='printOut'>

    </div>`
    

document.getElementById("root").insertAdjacentHTML("afterbegin", variable);

let shipSelect = document.getElementById("ships");
for (ship in user.ships){
    let option = document.createElement("option");
    option.value = ship;
    option.text = ship;
    shipSelect.appendChild(option);
}

let tiersSelect = document.getElementById("tier");
let increment = 0;
for (tier of Tiers){
    let option = document.createElement("option");
    option.value = increment; increment++;
    option.text = `Tier: ${tier.tier} BP Limit: ${tier.bpuLimiter} HP increases: ${tier.special}`;
    tiersSelect.appendChild(option);
}
increment = 0;
// repeat this process for all of the select options - add in BPU and PCU counter later
let frameSelect = document.getElementById("frame");
for (frame of Frames){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
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
increment = 0;
let powerSelect = document.getElementById("power");
for (power of PowerCores){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Size: ${power.size}  
  PCU: ${power.pcu}  
  Cost: ${power.cost}  `;
  option.text = `${power.core}`;
  powerSelect.appendChild(option);
}
increment = 0;
let thrusterSelect = document.getElementById("thruster");
for (thruster of Thrusters){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Speed: ${thruster.speed}  
  Piloting: ${thruster.piloting}  
  PCU: ${thruster.pcu}  `;
  option.text = `${thruster.thruster} Size: ${thruster.size} Cost (in BP): ${thruster.cost}`;
  thrusterSelect.appendChild(option);
}
increment = 0;
let driftSelect = document.getElementById("drift");
for (drift of DriftEngine){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Rating: ${drift.rating}  
  Min. PCU: ${drift.pcuRequirement}  
  Max. Size: ${drift.maxSize}  `;
  option.text = `${drift.driftEngine} Cost: ${drift.cost} x size category`;
  driftSelect.appendChild(option);
}
increment = 0;
let sensorSelect = document.getElementById("sensor");
for (sensor of Sensors){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Range: ${sensor.range}  
  Modifier: ${sensor.modifier}  `;
  option.text = `${sensor.sensors} Cost (in BP): ${sensor.cost}`;
  sensorSelect.appendChild(option);
}
increment = 0;
let computerSelect = document.getElementById("computer");
for (computer of Computers){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Bonus: ${computer.bonus}  
  Nodes: ${computer.nodes}  
  PCU: ${computer.pcu}  `;
  option.text = `${computer.computer} Cost (in BP): ${computer.cost}`;
  computerSelect.appendChild(option);
}
increment = 0;
let crewquarterSelect = document.getElementById("crewquarter");
for (crewquarter of CrewQuarters){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.text = `${crewquarter.crewQuarters} Cost (in BP): ${crewquarter.cost}`;
  crewquarterSelect.appendChild(option);
}
increment = 0;
let armorSelect = document.getElementById("armor");
for (armor of Armors){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  AC: ${armor.armor}  
  Special: 
    Target Lock: ${armor.specialTL}  
    Turn Distance: ${armor.specialTD}  `;
  option.text = `${armor.armor} Cost (in BP): ${armor.cost}`;
  armorSelect.appendChild(option);
}
increment = 0;
let defenseSelect = document.getElementById("defense");
for (defense of DefensiveCountermeasures){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Bonus to Target Lock: ${defense.TLbonus}  
  PCU: ${defense.pcu}  `;
  option.text = `${defense.defensiveCountermeasures} Cost (in BP): ${defense.cost}`;
  defenseSelect.appendChild(option);
}
increment = 0;
let securitySelect = document.getElementById("security");
for (security of Securitys){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.text = `${security.security} Cost (in BP): ${security.cost}`;
  securitySelect.appendChild(option);
}
increment = 0;
let longarmSelect = document.getElementById("longarm");
for (longarm of PersonnelWeaponsLongarms){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.text = `${longarm.weapon} Item Level: ${longarm.level}`;
  longarmSelect.appendChild(option);
}
increment = 0;
let heavySelect = document.getElementById("heavy");
for (heavy of PersonnelWeaponsHeavys){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.text = `${heavy.weapon} Item Level: ${heavy.level}`;
  heavySelect.appendChild(option);
}
increment = 0;
let shieldSelect = document.getElementById("shield");
for (shield of Shields){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  Total SP: ${shield.totalSP}  
  Regen.: ${shield.regen}  
  PCU: ${shield.pcu}  `;
  option.text = `${shield.shield} Cost (in BP): ${shield.cost}`;
  shieldSelect.appendChild(option);
}
increment = 0;
let weaponSelect = document.getElementById("weapon");
for (weapon of Weapons){
  let option = document.createElement("option");
  option.value = increment;
  increment++;
  option.title = `  Range: ${weapon.range}  
  Speed: ${weapon.speed}  
  Damage: ${weapon.damage}  
  PCU: ${weapon.pcu}  
  Special: ${weapon.special}  `;
  option.text = `${weapon.weapon} Cost (in BP): ${weapon.cost}`;
  weaponSelect.appendChild(option);
}
increment = 0;
let expansionbaySelect = document.getElementById("expansionbay");
for (expansionbay of ExpansionBays){
  let option = document.createElement("option");
  option.value = increment;
  increment++; 
  option.title = `  PCU: ${expansionbay.pcu}  `;
  option.text = `${expansionbay.expansionBay} Cost (in BP): ${expansionbay.cost}`;
  expansionbaySelect.appendChild(option);
}
increment = 0;
let tierBpuLimiter = 0;

function setTierBpuLimiter(value) {
    tierBpuLimiter = value;
    document.getElementById("BPU").innerText = "BPU: " + tierBpuLimiter;
}



function handleSelectedTier(value) {
    // console.log(event.target.value);
    let selectedOption = Tiers[value].bpuLimiter;
    setTierBpuLimiter(selectedOption);
}
function handleSelectedFrame(event) {
  let selectedOption = Frames[event.target.value].frame;
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
  let selectedOption = PowerCores[event.target.value];
  let cost = selectedOption.cost;
  let pcu = selectedOption.pcu;
  setpcuCounter(pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedThruster(event) {
  let selectedOption = PowerCores[event.target.value];
  let cost = selectedOption.cost;
  let pcu = selectedOption.pcu;
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
  let selectedOption = DriftEngine[event.target.value].cost * swapShipSize();
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedSensor(event) {
  let selectedOption = Sensors[event.target.value].cost;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedArmor(event) {
  let selectedOption = Armors[event.target.value].cost * swapShipSize();
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedComputer(event) {
  let selectedOption = Computers[event.target.value];
  let cost = selectedOption.cost;
  let pcu = selectedOption.pcu;
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedCrewQuarter(event) {
  let selectedOption = CrewQuarters[event.target.value].cost;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedDefenseiveCountermeasure(event) {
  let selectedOption = DefensiveCountermeasures[event.target.value];
  let cost = selectedOption.cost;
  let pcu = selectedOption.pcu;
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedExpansionBay(event) {
  let array = event.target.selectedOptions;
  for (option of array) {
    let selectedOption = ExpansionBays[option.value];
    let cost = selectedOption.cost;
    let pcu = selectedOption.pcu;
    setpcuCounter((pcuCounter) => pcuCounter - pcu);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
  }
}
function handleSelectedShield(event) {
  let selectedOption = Shields[event.target.value];
  let cost = selectedOption.cost;
  let pcu = selectedOption.pcu;
  setpcuCounter((pcuCounter) => pcuCounter - pcu);
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
}
function handleSelectedSecurity(event) {
  let selectedOption = Securitys[event.target.value];
  if (selectedOption.security === 'Antipersonnel weapon (longarm)') {
    document.getElementById("longarm").style.display = '';
    document.getElementById("heavy").style.display = 'none';
    document.getElementById("heavy").selectedIndex = 0;
    //TODO: fix this so it doesn't retain values
  }
  else if (selectedOption.security === 'Antipersonnel weapon (heavy)') {
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
  let selectedOption = PersonnelWeaponsHeavys[event.target.value].cost;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - (5 + parseInt(selectedOption)));
}
function handleLongarmCosts(event){
  let selectedOption = PersonnelWeaponsLongarms[event.target.value].cost;
  setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
}
function handleSelectedWeapon(event) {
  let array = event.target.selectedOptions;
  for (option of array) {
    let selectedOption = Weapons[option.value];
    let cost = selectedOption.cost;
    let pcu = selectedOption.pcu;
    setpcuCounter((pcuCounter) => pcuCounter - pcu);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - cost);
  }
}
function handlePrinting(value) {
  let object ={
    name:document.getElementById('name').value,
    tier:Tiers[document.getElementById('tier').value].tier,
    frame:Frames[document.getElementById('frame').value],
    power:PowerCores[document.getElementById('power').value],
    thruster:Thrusters[document.getElementById('thruster').value],
    drift:DriftEngine[document.getElementById('drift').value],
    sensor:Sensors[document.getElementById('sensor').value],
    computer:Computers[document.getElementById('computer').value],
    crewquarter:CrewQuarters[document.getElementById('crewquarter').value].crewQuarters,
    armor:Armors[document.getElementById('armor').value],
    defense:DefensiveCountermeasures[document.getElementById('defense').value],
    security:Securitys[document.getElementById('security').value].security,
    shield:Shields[document.getElementById('shield').value].shield,
    weapon:"",
    expansionbay:""
  }
  let weaponsAR = document.getElementById('weapon').selectedOptions;
  for (option of weaponsAR) {
    let selectedOption = Weapons[option.value];
    object.weapon+=`, ${selectedOption.weapon}`
  }
  let expansionAR = document.getElementById('expansionbay').selectedOptions;
  for (option of expansionAR) {
    let selectedOption = ExpansionBays[option.value];
    object.expansionbay+=`, ${selectedOption.expansionBay}`
  }
  if (object.security === 'Antipersonnel weapon (longarm)') {
    object.security = PersonnelWeaponsLongarms[document.getElementById('longarm').value].weapon;
  }
  if (object.security === 'Antipersonnel weapon (heavy)') {
    object.security = PersonnelWeaponsHeavys[document.getElementById('heavy').value].weapon;
  }
  //Print the object into the printOut div.
  let computers = object.computer.bonus + object.sensor.modifier;
  let piloting = object.thruster.piloting + object.frame.maneuverability;
  let output = `
  <h1>${object.name} TIER ${object.tier}</h1>
  <pre><blockquote>
  ${object.frame.size} ${object.frame.frame}
  Speed ${object.thruster.speed}; Maneuverability ${object.frame.maneuverability}; Drift ${object.drift.rating}
  AC ${object.armor.ac}; TL ${object.defense.TLbonus}
  HP ${object.frame.hp}; DT ${object.frame.dt}; CT ${object.frame.ct}
  Shields ${object.shield}
  Attack ${object.weapon}
  Power Core ${object.power.core} (${object.power.pcu} PCU); Drift Engine ${object.drift.driftEngine};
  Systems ${object.sensor.sensors}, ${object.computer.computer},
  crew quarters (${object.crewquarter}), ${object.armor.armor}, ${object.defense.defensiveCountermeasures}, security
  (${object.security}); 
  Expansion Bays ${object.expansionbay}
  Modifiers ${computers} Computers, ${piloting} Piloting; Complement ${object.frame.maximumCrew}
  </blockquote></pre>`;
  document.getElementById("printOut").insertAdjacentHTML("afterbegin", output);
}

function handleSaving(value) {
  let object ={
    name:document.getElementById('name').value,
    tier:document.getElementById('tier').value,
    frame:document.getElementById('frame').value,
    power:document.getElementById('power').value,
    thruster:document.getElementById('thruster').value,
    drift:document.getElementById('drift').value,
    sensor:document.getElementById('sensor').value,
    computer:document.getElementById('computer').value,
    crewquarter:document.getElementById('crewquarter').value,
    armor:document.getElementById('armor').value,
    defense:document.getElementById('defense').value,
    security:document.getElementById('security').value,
    shield:document.getElementById('shield').value,
    weapon:[],
    expansionbay:[],
    longarm:document.getElementById('longarm').value,
    heavy:document.getElementById('heavy').value
  }
  let weaponsAR = document.getElementById('weapon').selectedOptions;
  for (option of weaponsAR) {
    object.weapon.push(option.value)
  }
  let expansionAR = document.getElementById('expansionbay').selectedOptions;
  for (option of expansionAR) {
    object.expansionbay.push(option.value)
  }
  if (object.name !== "Name"
  &&user.ships[object.name]==undefined){
      user.ships[object.name]=object;
      SaveToStorage();
      let option = document.createElement("option");
      option.value = object.name;
      option.text = object.name;
      shipSelect.appendChild(option);
  }
}