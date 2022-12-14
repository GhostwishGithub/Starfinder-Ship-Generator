import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [tiers, setTier] = useState([]);
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
  const [pcuCounter, setpcuCounter] = useState(0);

  useEffect(() => {
    const fetchTiers = async () => {
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

  }, [token]);

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
  
  return (
    <div className="container">
      <h1>Starship Generator Protoype for {user.username}!</h1>
      <h1>BPU: {tierBpuLimiter}</h1>
      <h1>PCU: {pcuCounter}</h1>
      {/* <label for="tier">Select a tier: </label> */}
      <select id="tier" onChange={handleSelectedTier}>
        <option selected="true" disabled="disabled">Choose Tier</option>    
        {tiers &&
          tiers.map((item) => {
            return (
              <option value={item.bpuLimiter}>
                Tier: {item.tier} BP Limit: {item.bpuLimiter} HP increases:
                {item.special}
              </option>
            );
          })}
      </select>
      <br />
      <form>
        <label>Manual Override:{" "} 
          <input
          type="text"
          onChange={(e) => setTierBpuLimiter(e.target.value)}
          />
        </label>
      </form>
      <div class="input">
        Frame:{" "}
        <select onChange={handleSelectedFrame}>
        <option selected="true" disabled="disabled">Choose Frame</option>   
          {frames &&
            frames.map((item) => {
              let frametitle =
                "Size: " + item.size +
                " Maneuverability: " + item.maneuverability +
                " HP: " + item.hp +
                " DT: " + item.dt +
                " Mounts: " + item.mounts +
                " Expansion Bays: " + item.expansionBays +
                " Minimum Crew: " + item.minimumCrew +
                " Maximum Crew: " + item.maximumCrew;
              return (
                <option title={frametitle} value={[item.size, item.cost, item.id]}>
                  {item.frame} Increment:{" "}{item.increment} Cost: {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Core:{" "}
        <select onChange={handleSelectedCore}>
        <option selected="true" disabled="disabled">Choose Core</option>   
          {powercores &&
            powercores.map((item) => {
              let coreTitle =
                "Size: " + item.size +
                " PCU: " + item.pcu +
                " Cost: " + item.cost;
              return (
                <option title={coreTitle} value={[item.cost, item.pcu]}>
                  {item.core}
                </option>
              );
            })}
        </select>
        <br />
        Thruster:{" "}
        <select onChange={handleSelectedThruster}>
          <option selected="true" disabled="disabled">Choose Thrusters</option>   
          {thrusters &&
            thrusters.map((item) => {
              let thrusterTitle =
              "Speed: " + item.speed +
              " Piloting Bonus: " + item.piloting +
              " PCU: " + item.pcu;
              return (
                <option title = {thrusterTitle} value={[item.cost, item.pcu]}>
                  {item.thruster} Size: {item.size} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Drift Engine:{" "}
        <select onChange={handleSelectedDriftEngine}>
          <option selected="true" disabled="disabled">Choose Drift Engine</option>   
          {driftengines &&
            driftengines.map((item) => {
              let driftTitle =
              "Engine rating: " + item.rating +
              " Min. PCU: " + item.pcuRequirement +
              " Max. Size: " + item.maxSize;
              return (
                <option title = {driftTitle} value={item.cost}>
                  {item.driftEngine} Cost: {item.cost} x size category
                </option>
              );
            })}
        </select>
        <br />
        Sensors:{" "}
        <select onChange={handleSelectedSensor}>
          <option selected="true" disabled="disabled">Choose Sensor</option>
          {sensors &&
            sensors.map((item) => {
              let sensorTitle =
              "Range: " + item.range + 
              " Modifier: " + item.modifier;
              return (
                <option title={sensorTitle} value={item.cost}>
                  {item.sensors} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        <br />
        Computers:{" "}
        <select onChange={handleSelectedComputer}>
          {computers &&
            computers.map((item) => {
              let computerTitle =
              "Bonus: " + item.bonus +
              " Nodes: " + item.nodes +
              " PCU: " + item.pcu;
              return (
                <option title={computerTitle} value={[item.cost, item.pcu]}>
                  {item.computer} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Crew Quarters:{" "}
        <select onChange={handleSelectedCrewQuarter}>
          {crewquarters &&
            crewquarters.map((item) => {
              return (
                <option value={item.cost}>
                  {item.crewQuarters} Cost (In BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        <br />
        Armor:{" "}
        <select onChange={handleSelectedArmor}>
          <option selected="true" disabled="disabled">Choose Armor</option>
          {armors &&
            armors.map((item) => {
              let armorTitle =
              "AC: " + item.armor +
              " Special: " + item.specialTL + " TL " + item.specialTD + " turn distance"; 
              return (
                <option title={armorTitle} value={item.cost}>
                  {item.armor} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Defensive Countermeasures:{" "}
        <select onChange={handleSelectedDefenseiveCountermeasure}>
          <option selected="true" disabled="disabled">Choose Defenses</option>
          {defensivecountermeasures &&
            defensivecountermeasures.map((item) => {
              let defensiveTitle =
              "Bonus to TL: " + item.TLbonus +
              " PCU: " + item.pcu;
              return (
                <option title={defensiveTitle} value={[item.cost, item.pcu]}>
                  {item.defensiveCountermeasures} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Security:{" "}
        <select onChange={handleSelectedSecurity}>
          <option selected="true" disabled="disabled">Choose Security</option>
          {security &&
            security.map((item) => {
              return (
                <option value={item.security}>
                  Security: {item.security} Cost (In BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        {weaponToggleLongarm === true && (
          <select onChange={handleLongarmCosts}>
            <option selected="true" disabled="disabled">Choose Longarm Turret</option>
            {personnelweaponslongarm &&
              personnelweaponslongarm.map((item) => {
                return (
                  <option value={item.level}>
                    Weapon: {item.weapon} Item Level: {item.level}
                    
                  </option>
                );
              })}
          </select>
        )}

        {weaponToggleHeavy === true && (
          <select onChange={handleHeavyCosts}>
            <option selected="true" disabled="disabled">Choose Heavy Turret</option>
            {personnelweaponsheavy &&
              personnelweaponsheavy.map((item) => {
                return (
                  <option value={item.level}>
                    Weapon: {item.weapon} Item Level: {item.level}
                    
                  </option>
                );
              })}
          </select>
        )}
        <br />
        Shields:{" "}
        <select onChange={handleSelectedShield}>
          <option selected="true" disabled="disabled">Choose Shields</option>
          {shields &&
            shields.map((item) => {
              let shieldTitle =
              "Total SP: " + item.totalSP +
              " Regen.: " + item.regen + 
              " PCU: " + item.pcu;
              return (
                <option title={shieldTitle} value={[item.cost, item.pcu]}>
                  Shield Name: {item.shield} Cost(in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Weapons:{" "}
        <select onChange={handleSelectedWeapon}>
          <option selected="true" disabled="disabled">Choose Weapons</option>
          {weapons &&
            weapons.map((item) => {
              let weaponTitle =
              "Range: " + item.range +
              " Speed: " + item.speed +
              " Damage: " + item.damage +
              " PCU: " + item.pcu +
              " Special: " + item.special;
              return (
                <option title={weaponTitle} value={[item.cost, item.pcu]}>
                  Name: {item.weapon} Cost (In BP):{" "}{item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Expansion Bay:{" "}
        <select multiple onChange={handleSelectedExpansionBay}>
          {expansionbays &&
            expansionbays.map((item) => {
              let expansionTitle =
              "PCU: " + item.pcu;
              return (
                <option title={expansionTitle} value={[item.cost, item.pcu]}>
                  {item.expansionBay} Cost (In BP): {item.cost}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default HomePage;
