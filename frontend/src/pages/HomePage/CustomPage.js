import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const CustomPage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  /*const [tiers, setTier] = useState([]);
  const [frames, setFrame] = useState([]);
  const [powercores, setPowercore] = useState([]);
  const [thrusters, setThruster] = useState([]);
  const [armors, setArmor] = useState([]);
  const [computers, setComputer] = useState([]);
  const [crewquarters, setCrewquarter] = useState([]);
  const [defensivecountermeasures, setDefensiveCountermeasure] = useState([]);
  const [driftengines, setDriftengine] = useState([]);
  const [expansionbays, setExpansionbay] = useState([]);
  const [security, setSecurity] = useState([]);
  const [sensors, setSensor] = useState([]);
  const [shields, setShield] = useState([]);
  const [weapons, setWeapon] = useState([]);
  const [personnelweaponslongarm, setPersonnelweaponlongarm] = useState([]);
  const [personnelweaponsheavy, setPersonnelweaponheavy] = useState([]);
  const [tierBpuLimiter, setTierBpuLimiter] = useState(0);
  const [shipSize, setShipSize] = useState(0);
  const [weaponToggleLongarm, setWeaponToggleLongarm] = useState(false);
  const [weaponToggleHeavy, setWeaponToggleHeavy] = useState(false);
  const [pcuCounter, setpcuCounter] = useState(0);*/
  const [CustomSelect, setCustomSelect] = useState([])

  useEffect(() => {
    /*const fetchTiers = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tiers/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setTier(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchTiers();

    const fetchFrames = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/frames/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setFrame(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchFrames();

    const fetchPowercores = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/powercores/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setPowercore(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchPowercores();

    const fetchThrusters = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/thrusters/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setThruster(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchThrusters();

    const fetchArmors = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/armors/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setArmor(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchArmors();

    const fetchComputers = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/computers/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComputer(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchComputers();

    const fetchCrewquarters = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/crewquarters/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setCrewquarter(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCrewquarters();

    const fetchDefensiveCountermeasures = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/defensivecountermeasures/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setDefensiveCountermeasure(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDefensiveCountermeasures();

    const fetchDriftengines = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/driftengines/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setDriftengine(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDriftengines();

    const fetchExpansionbays = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/expansionbays/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setExpansionbay(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchExpansionbays();

    const fetchSecurity = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/security/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setSecurity(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchSecurity();

    const fetchSensors = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/sensors/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setSensor(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchSensors();

    const fetchShields = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/shields/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setShield(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchShields();

    const fetchWeapons = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/weapons/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setWeapon(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchWeapons();

    const fetchPersonnelWeaponsLongarm = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/personnelweaponslongarm/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPersonnelweaponlongarm(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchPersonnelWeaponsLongarm();
    
    const fetchPersonnelWeaponsHeavy = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/personnelweaponsheavy/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setPersonnelweaponheavy(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchPersonnelWeaponsHeavy();
*/
  const fetchCustomSelect = async () => {
    try {
      let response = await axios.get("http://127.0.0.1:8000/api/customselect/", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      //console.log(response.data)
      setCustomSelect(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  fetchCustomSelect();
  }, [token]);
/*
  function handleSelectedTier(event) {
    // console.log(event.target.value);
    let selectedOption = event.target.value;
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
  function handleSelectedSecurity(event) {
    let selectedOption = event.target.value;
    handleSelectedSecurityLongarm(selectedOption);
    handleSelectedSecurityHeavy(selectedOption);
  }
  function handleSelectedSecurityLongarm(event) {
    if (event === 'Antipersonnel weapon (longarm)') {
      setWeaponToggleLongarm(true);
    }
  }
  function handleSelectedSecurityHeavy(event) {
    if (event === 'Antipersonnel weapon (heavy)') {
      setWeaponToggleHeavy(true);
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
  */
  function SelectionMenu(event) {
    console.log("Is this working?")
    console.log(CustomSelect)
    for (let item of CustomSelect) {
      if(event === {item}){
        document.getElementById({item}).hidden = "false";
      }
      else{
        document.getElementById({item}).hidden = "true";
      }
    };
  }
  function doSomethingFunction(event) {
    return("");
  }
  return (
    
    <div>
      Select which part you want to add:
      <select onChange={SelectionMenu}>
        {console.log("What about this?")}
        {CustomSelect &&
          CustomSelect.map((item) => 
            <option name={item}>{item}</option>
          )}
      </select>
      <div id="IDK">
        <form id="powercore" onSubmit={doSomethingFunction}>
          <label for="name">Core name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="size">Size:</label><br />
          <input type="text" id="size" name="size"/>Size limitation
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu"/>PCU generated
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost"/>BP Cost
          <button type ='submit'>Click me</button>
        </form>
        <form id="thruster">
          <label for="name">Thruster name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="size">Size:</label><br />
          <input type="text" id="size" name="size" />Size limitation
          <label for="speed">Speed:</label><br />
          <input type="text" id="speed" name="speed" />Hex grid movement
          <label for="piloting">Piloting:</label><br />
          <input type="text" id="piloting" name="piloting" />Piloting bonus
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu" />PCU requirement
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost:
        </form>
        <form id="armor">
          <label for="name">Armor name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="ac">AC:</label><br />
          <input type="text" id="ac" name="ac"/>Armor class bonus
          <label for="specialTL">TL:</label><br />
          <input type="text" id="specialTL" name="specialTL" />Tracking Lock Debuff
          <label for="specialTD">TD:</label><br />
          <input type="text" id="specialTD" name="specialTD"/>Turn Distance Debuff
          <label for="cost">Cost (x Size Catergory):</label><br />
          <input type="text" id="cost" name="cost" />BP cost
        </form>
        <form id="computer">
          <label for="name">Computer name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="bonus">Bonus:</label><br />
          <input type="text" id="bonus" name="bonus" />Bonus
          <label for="nodes">Nodes:</label><br />
          <input type="text" id="nodes" name="nodes" />Nodes
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu" />PCU
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP cost
        </form>
        <form id="crewQuarter">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP cost
        </form>
        <form id="defensiveCountermeasure">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="tlBonus">TL Bonus:</label><br />
          <input type="text" id="tlBonus" name="tlBonus" />Bonus to TL
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu" />PCU cost
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
        </form>
        <form id="driftEngine">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="rating">Rating:</label><br />
          <input type="text" id="rating" name="rating" />Rating
          <label for="pcurequirement">PCU Requirement:</label><br />
          <input type="text" id="pcurequirement" name="pcurequirement" />PCU Requirement
          <label for="maxsize">Max Size:</label><br />
          <input type="text" id="maxsize" name="maxsize" />Maximum size allowed
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
        </form>
        <form id="expansionBay">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu" />PCU cost
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
        </form>
        <form id="security">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
        </form>
        <form id="sensor">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="range">Range:</label><br />
          <input type="text" id="range" name="range" />Range
          <label for="modifier">Modifier:</label><br />
          <input type="text" id="modifier" name="modifier" />Modifier
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
        </form>
        <form id="shield">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="totalsp">Total SP:</label><br />
          <input type="text" id="totalsp" name="totalsp" />SP
          <label for="regen">Regen:</label><br />
          <input type="text" id="regen" name="regen" />Regeneration
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu" />PCU cost
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
        </form>
        <form id="weapon">
          <label for="name">Name:</label><br />
          <input type="text" id="name" name="name" />Name
          <label for="weaponclass">Weapon Class:</label><br />
          <input type="text" id="weaponclass" name="weaponclass" />Class of weapon
          <label for="weapontype">Weapon Type:</label><br />
          <input type="text" id="weapontype" name="weapontype" />Type of weapon
          <label for="speed">Speed:</label><br />
          <input type="text" id="speed" name="speed" />Speed
          <label for="range">Range:</label><br />
          <input type="text" id="range" name="range" />Range
          <label for="damage">Damage:</label><br />
          <input type="text" id="damage" name="damage" />Damage of weapon
          <label for="pcu">PCU:</label><br />
          <input type="text" id="pcu" name="pcu" />PCU cost
          <label for="cost">Cost:</label><br />
          <input type="text" id="cost" name="cost" />BP Cost
          <label for="special">Special:</label><br />
          <input type="text" id="special" name="special" />Special Attributes
        </form>
      </div>
    </div>
  );
};

export default CustomPage;
