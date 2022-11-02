let variable = `
    <div class='container'>
    <br />
      Select which part you want to add:<br />
      <select id='menu' onChange='SelectionMenu(this.value)'>
        <option selected='true' disabled='disabled'>Select item</option> 
      </select>
      <div id='input'>
        <br />
        <form id="powercore" onsubmit='PowercoreInput()'>
          <label for="name">Core name:</label>
          <input type="text" id="powercorename" name="name" value="Name" /><br />
          <label for="size">Size:</label>
          <input type="text" id="powercoresize" name="size" value="Size limitation" /><br />
          <label for="pcu">PCU:</label>
          <input type="number" id="powercorepcu" name="pcu" value="PCU generated" placeholder="PCU generated" /><br />
          <label for="cost">Cost:</label>
          <input type="number" id="powercorecost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="thruster" onsubmit='ThrusterInput()'>
          <label for="name">Thruster name:</label>
          <input type="text" id="thrustername" name="name" value="Name" /><br />
          <label for="size">Size:</label>
          <input type="text" id="thrustersize" name="size" value="Size limitation" /><br />
          <label for="speed">Speed:</label>
          <input type="text" id="thrusterspeed" name="speed" value="Hex grid movement" /><br />
          <label for="piloting">Piloting:</label>
          <input type="text" id="thrusterpiloting" name="piloting" value="Piloting bonus" /><br />
          <label for="pcu">PCU:</label>
          <input type="text" id="thrusterpcu" name="pcu" value="PCU requirement" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="thrustercost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="armor" onsubmit='ArmorInput()'>
          <label for="name">Armor name:</label>
          <input type="text" id="armorname" name="name" value="Name" /><br />
          <label for="ac">AC:</label>
          <input type="text" id="armorac" name="ac" value="Armor class bonus" /><br />
          <label for="specialTL">TL:</label>
          <input type="text" id="armorspecialTL" name="specialTL" value="Tracking Lock Debuff" /><br />
          <label for="specialTD">TD:</label>
          <input type="text" id="armorspecialTD" name="specialTD" value="Turn Distance Debuff" /><br />
          <label for="cost">Cost (x Size Category):</label>
          <input type="text" id="armorcost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="computer" onsubmit='ComputerInput()' >
          <label for="name">Computer name:</label>
          <input type="text" id="computername" name="name" value="Name" /><br />
          <label for="bonus">Bonus:</label>
          <input type="text" id="computerbonus" name="bonus" value="Bonus" /><br />
          <label for="nodes">Nodes:</label>
          <input type="text" id="computernodes" name="nodes" value="Nodes" /><br />
          <label for="pcu">PCU:</label>
          <input type="text" id="computerpcu" name="pcu" value="PCU" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="computercost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="crewQuarter" onsubmit='CrewQuarterInput()'>
          <label for="name">Name:</label>
          <input type="text" id="crewQuartername" name="name" value="Name" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="crewQuartercost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="defensiveCountermeasure" onsubmit='DefenseInput()'>
          <label for="name">Name:</label>
          <input type="text" id="defensiveCountermeasurename" name="name" value="Name" /><br />
          <label for="tlBonus">TL Bonus:</label>
          <input type="text" id="defensiveCountermeasuretlBonus" name="tlBonus" value="Bonus to TL" /><br />
          <label for="pcu">PCU:</label>
          <input type="text" id="defensiveCountermeasurepcu" name="pcu" value="PCU cost" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="defensiveCountermeasurecost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="driftEngine" onsubmit='DriftInput()'>
          <label for="name">Name:</label>
          <input type="text" id="driftEnginename" name="name" value="Name" /><br />
          <label for="rating">Rating:</label>
          <input type="text" id="driftEnginerating" name="rating" value="Rating" /><br />
          <label for="pcurequirement">PCU Requirement:</label>
          <input type="text" id="driftEnginepcurequirement" name="pcurequirement" value="PCU Requirement" /><br />
          <label for="maxsize">Max Size:</label>
          <input type="text" id="driftEnginemaxsize" name="maxsize" value="Maximum size allowed" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="driftEnginecost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="expansionBay" onsubmit='ExpansionInput()'>
          <label for="name">Name:</label>
          <input type="text" id="expansionBayname" name="name" value="Name" /><br />
          <label for="pcu">PCU:</label>
          <input type="text" id="expansionBaypcu" name="pcu" value="PCU cost" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="expansionBaycost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="security" onsubmit='SecurityInput()'>
          <label for="name">Name:</label>
          <input type="text" id="securityname" name="name" value="Name" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="securitycost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="sensor" onsubmit='SensorInput()'>
          <label for="name">Name:</label>
          <input type="text" id="sensorname" name="name" value="Name" /><br />
          <label for="range">Range:</label>
          <input type="text" id="sensorrange" name="range" value="Range" /><br />
          <label for="modifier">Modifier:</label>
          <input type="text" id="sensormodifier" name="modifier" value="Modifier" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="sensorcost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="shield" onsubmit='ShieldInput()'>
          <label for="name">Name:</label>
          <input type="text" id="shieldname" name="name" value="Name" /><br />
          <label for="totalsp">Total SP:</label>
          <input type="text" id="shieldtotalsp" name="totalsp" value="SP" /><br />
          <label for="regen">Regen:</label>
          <input type="text" id="shieldregen" name="regen" value="Regeneration" /><br />
          <label for="pcu">PCU:</label>
          <input type="text" id="shieldpcu" name="pcu" value="PCU cost" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="shieldcost" name="cost" value="BP Cost" /><br />
          <button type ='submit'>Click me</button>
        </form>
        <form id="weapon" onsubmit='WeaponInput()'>
          <label for="name">Name:</label>
          <input type="text" id="weaponname" name="name" value="Name" /><br />
          <label for="weaponclass">Weapon Class:</label>
          <input type="text" id="weaponclass" name="weaponclass" value="Class of weapon" /><br />
          <label for="weapontype">Weapon Type:</label>
          <input type="text" id="weapontype" name="weapontype" value="Type of weapon" /><br />
          <label for="speed">Speed:</label>
          <input type="text" id="weaponspeed" name="speed" value="Speed" /><br />
          <label for="range">Range:</label>
          <input type="text" id="weaponrange" name="range" value="Range" /><br />
          <label for="damage">Damage:</label>
          <input type="text" id="weapondamage" name="damage" value="Damage of weapon" /><br />
          <label for="pcu">PCU:</label>
          <input type="text" id="weaponpcu" name="pcu" value="PCU cost" /><br />
          <label for="cost">Cost:</label>
          <input type="text" id="weaponcost" name="cost" value="BP Cost" /><br />
          <label for="special">Special:</label>
          <input type="text" id="weaponspecial" name="special" value="Special Attributes" /><br />
          <button type ='submit'>Click me</button>
        </form>
      </div>
    </div>
`
document.getElementById("root").insertAdjacentHTML("afterbegin", variable);

let menuSelect = document.getElementById("menu");
for (item of Menus){
    let option = document.createElement("option");
    option.value = item.title;
    option.text = `${item.title}`;
    menuSelect.appendChild(option);
}
function SelectionMenu(value) {
    for (let item of Menus) {
        if(value === item.title){
            //console.log(item.title)
            document.getElementById(item.title).style.display = "block";
        }
        else{
            document.getElementById(item.title).style.display = "none";
        }
      };
}
function PowercoreInput(value) {
    let object ={
        core:document.getElementById('powercorename').value,
        size:document.getElementById('powercoresize').value,
        pcu:document.getElementById('powercorepcu').value,
        cost:document.getElementById('powercorecost').value
    }
    if (object.core!=="Name"
    &&object.size!="Size limitation"
    &&object.pcu!="PCU generated"
    &&object.cost!="BP Cost"
    &&user.parts.powercore[object.core]==undefined){
        user.parts.powercore[object.core]=object;
        SaveToStorage();
    }
}
function ThrusterInput(value) {
    let object ={
        thruster:document.getElementById('thrustername').value,
        size:document.getElementById('thrustersize').value,
        speed:document.getElementById('thrusterspeed').value,
        piloting:document.getElementById('thrusterpiloting').value,
        pcu:document.getElementById('thrusterpcu').value,
        cost:document.getElementById('thrustercost').value
    }
    if (object.thruster!=="Name"
    &&object.size!="Size limitation"
    &&object.speed!="Hex grid movement"
    &&object.piloting!="Piloting bonus"
    &&object.pcu!="PCU requirement"
    &&object.cost!="BP Cost"
    &&user.parts.thruster[object.thruster]==undefined){
        user.parts.thruster[object.thruster]=object;
        SaveToStorage();
    }
}
function ArmorInput(value) {
    let object ={
        armor:document.getElementById('armorname').value,
        ac:document.getElementById('armorac').value,
        specialTL:document.getElementById('armorspecialTL').value,
        specialTD:document.getElementById('armorspecialTD').value,
        cost:document.getElementById('armorcost').value
    }
    if (object.armor!=="Name"
    &&object.ac!="Armor class bonus"
    &&object.specialTL!="Tracking Lock Debuff"
    &&object.specialTD!="Turn Distance Debuff"
    &&object.cost!="BP Cost"
    &&user.parts.armor[object.armor]==undefined){
        user.parts.armor[object.armor]=object;
        SaveToStorage();
    }
}
function ComputerInput(value) {
    let object ={
        computer:document.getElementById('computername').value,
        bonus:document.getElementById('computerbonus').value,
        nodes:document.getElementById('computernodes').value,
        pcu:document.getElementById('thrusterpcu').value,
        cost:document.getElementById('thrustercost').value
    }
    if (object.computer!=="Name"
    &&object.bonus!="Bonus"
    &&object.nodes!="Nodes"
    &&object.piloting!="Piloting bonus"
    &&object.pcu!="PCU"
    &&object.cost!="BP Cost"
    &&user.parts.computer[object.computer]==undefined){
        user.parts.computer[object.computer]=object;
        SaveToStorage();
    }
}
function CrewQuarterInput(value) {
    let object ={
        crewQuarters:document.getElementById('crewQuartername').value,
        cost:document.getElementById('crewQuartercost').value
    }
    if (object.crewQuarters!=="Name"
    &&object.cost!="BP Cost"
    &&user.parts.crewQuarter[object.crewQuarters]==undefined){
        user.parts.crewQuarter[object.crewQuarters]=object;
        SaveToStorage();
    }
}
function DefenseInput(value) {
    let object ={
        defensiveCountermeasures:document.getElementById('defensiveCountermeasurename').value,
        TLbonus:document.getElementById('defensiveCountermeasuretlBonus').value,
        pcu:document.getElementById('defensiveCountermeasurepcu').value,
        cost:document.getElementById('defensiveCountermeasurecost').value
    }
    if (object.defensiveCountermeasures!=="Name"
    &&object.TLbonus!="Bonus to TL"
    &&object.pcu!="PCU cost"
    &&object.cost!="BP Cost"
    &&user.parts.defensiveCountermeasure[object.defensiveCountermeasures]==undefined){
        user.parts.defensiveCountermeasure[object.defensiveCountermeasures]=object;
        SaveToStorage();
    }
}
function DriftInput(value) {
    let object ={
        driftEngine:document.getElementById('driftEnginename').value,
        rating:document.getElementById('driftEnginerating').value,
        pcuRequirement:document.getElementById('driftEnginepcurequirement').value,
        maxSize:document.getElementById('driftEnginemaxsize').value,
        cost:document.getElementById('driftEnginecost').value
    }
    if (object.driftEngine!=="Name"
    &&object.rating!="Rating"
    &&object.pcuRequirement!="PCU Requirement"
    &&object.maxSize!="Maximum size allowed"
    &&object.cost!="BP Cost"
    &&user.parts.driftEngine[object.driftEngine]==undefined){
        user.parts.driftEngine[object.driftEngine]=object;
        SaveToStorage();
    }
}
function ExpansionInput(value) {
    let object ={
        expansionBay:document.getElementById('expansionBayname').value,
        pcu:document.getElementById('expansionBaypcu').value,
        cost:document.getElementById('expansionBaycost').value
    }
    if (object.expansionBay!=="Name"
    &&object.pcu!="PCU cost"
    &&object.cost!="BP Cost"
    &&user.parts.expansionBay[object.expansionBay]==undefined){
        user.parts.expansionBay[object.expansionBay]=object;
        SaveToStorage();
    }
}
function SecurityInput(value) {
    let object ={
        security:document.getElementById('securityname').value,
        cost:document.getElementById('securitycost').value
    }
    if (object.security!=="Name"
    &&object.cost!="BP Cost"
    &&user.parts.security[object.security]==undefined){
        user.parts.security[object.security]=object;
        SaveToStorage();
    }
}
function SensorInput(value) {
    let object ={
        sensors:document.getElementById('sensorname').value,
        range:document.getElementById('sensorrange').value,
        modifier:document.getElementById('sensormodifier').value,
        cost:document.getElementById('sensorcost').value
    }
    if (object.sensors!=="Name"
    &&object.range!="Range"
    &&object.modifier!="Modifier"
    &&object.cost!="BP Cost"
    &&user.parts.sensor[object.sensors]==undefined){
        user.parts.sensor[object.sensors]=object;
        SaveToStorage();
    }
}
function ShieldInput(value) {
    let object ={
        shield:document.getElementById('shieldname').value,
        totalSP:document.getElementById('shieldtotalsp').value,
        regen:document.getElementById('shieldregen').value,
        pcu:document.getElementById('shieldpcu').value,
        cost:document.getElementById('shieldcost').value
    }
    if (object.shield!=="Name"
    &&object.totalSP!="SP"
    &&object.regen!="Regeneration"
    &&object.pcu!="PCU cost"
    &&object.cost!="BP Cost"
    &&user.parts.shield[object.shield]==undefined){
        user.parts.shield[object.shield]=object;
        SaveToStorage();
    }
}
function WeaponInput(value) {
    let object ={
        weapon:document.getElementById('weaponname').value,
        weaponClass:document.getElementById('weaponclass').value,
        weaponType:document.getElementById('weapontype').value,
        speed:document.getElementById('weaponspeed').value,
        range:document.getElementById('weaponrange').value,
        damage:document.getElementById('weapondamage').value,
        pcu:document.getElementById('weaponpcu').value,
        cost:document.getElementById('weaponcost').value,
        special:document.getElementById('weaponspecial').value
    }
    if (object.weapon!=="Name"
    &&object.weaponClass!="Class of weapon"
    &&object.weaponType!="Type of weapon"
    &&object.speed!="Speed"
    &&object.range!="Range"
    &&object.damage!="Damage of weapon"
    &&object.pcu!="PCU cost"
    &&object.cost!="BP Cost"
    &&object.special!="Special Attributes"
    &&user.parts.weapon[object.weapon]==undefined){
        user.parts.weapon[object.weapon]=object;
        SaveToStorage();
    }
}