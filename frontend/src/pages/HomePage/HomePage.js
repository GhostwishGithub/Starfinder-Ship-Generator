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
  const [weaponToggleHeavy, setWeaponToggleHeavy] = useState(false)

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
    console.log(selectedOption);
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
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedThruster(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function swapShipSize(event) {
    let sizeCategory = 0;
    if (shipSize == "Tiny") {
      sizeCategory = 1;
    }
    if (shipSize == "Small") {
      sizeCategory = 2;
    }
    if (shipSize == "Medium") {
      sizeCategory = 3;
    }
    if (shipSize == "Large") {
      sizeCategory = 4;
    }
    if (shipSize == "Huge") {
      sizeCategory = 5;
    }
    if (shipSize == "Gargantuan") {
      sizeCategory = 6;
    } 
    else if (shipSize == "Colossal") {
      sizeCategory = 7;
    }
    return sizeCategory;
  }
  function handleSelectedArmor(event) {
    let selectedOption = event.target.value * swapShipSize();
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  } //DO NOT FORGET TO UPDATE YOUR SERIALIZERS!!!
  function handleSelectedComputer(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedCrewQuarter(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedDefenseiveCountermeasure(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedDriftEngine(event) {
    let selectedOption = event.target.value * swapShipSize();
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedExpansionBay(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedSensor(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedShield(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption);
    setTierBpuLimiter((tierBpuLimiter) => tierBpuLimiter - selectedOption);
  }
  function handleSelectedSecurity(event) {
    debugger
    let selectedOption = event.target.value;
    console.log(selectedOption.security)
    handleSelectedSecurityLongarm(selectedOption);
    handleSelectedSecurityHeavy(selectedOption);
  }
  function handleSelectedSecurityLongarm(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption.security)
    if (selectedOption.security === 'Antipersonnel weapon (longarm)') {
      console.log(selectedOption);
      setWeaponToggleLongarm(true);
    }
    // else if (selectedOption.security === 'Antipersonnel weapon (heavy)') {
    //   console.log(selectedOption);
    //   setWeaponToggleHeavy(true);
    //}
  }
  function handleSelectedSecurityHeavy(event) {
    let selectedOption = event.target.value;
    console.log(selectedOption.security)
    if (selectedOption.security === 'Antipersonnel weapon (heavy)') {
      console.log(selectedOption);
      setWeaponToggleHeavy(true);
  }}
  return (
    <div className="container">
      <h1>Starship Generator Protoype for {user.username}!</h1>
      <h1>BPU: {tierBpuLimiter}</h1>
      <select onChange={handleSelectedTier}>
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
      <div class="input">
        <select onChange={handleSelectedFrame}>
          {frames &&
            frames.map((item) => {
              return (
                <option value={[item.size, item.cost]}>
                  Frame: {item.frame} Size: {item.size} Maneuverability:{" "}
                  {item.maneuverability} HP: {item.hp} Increment:{" "}
                  {item.increment} DT: {item.dt} CT: {item.ct} Mounts:{" "}
                  {item.mounts} Expansion Bays: {item.expansionBays} Minimum
                  Crew: {item.minimumCrew} Maximum Crew: {item.maximumCrew}{" "}
                  Cost: {item.cost}
                </option>
              );
            })}
        </select>
        <br />
        Core:{" "}
        <select onChange={handleSelectedCore}>
          {powercores &&
            powercores.map((item) => {
              let tempTitle =
                "Size: " +
                item.size +
                " PCU: " +
                item.pcu +
                " Cost: " +
                item.cost;
              //spread this around tomorrow!
              return (
                <option title={tempTitle} value={item.cost}>
                  {item.core}
                </option>
              );
            })}
        </select>
        <br />
        <select onChange={handleSelectedThruster}>
          {thrusters &&
            thrusters.map((item) => {
              return (
                <option value={item.cost}>
                  Thruster: {item.thruster} Size: {item.size} Speed (in hexes):{" "}
                  {item.speed} Piloting Modifier: {item.piloting} PCU:{" "}
                  {item.pcu} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedArmor}>
          {armors &&
            armors.map((item) => {
              return (
                <option value={item.cost}>
                  Armor: {item.armor} AC: {item.ac} Special: {item.specialTL}{" "}
                  TL, {item.specialTD} turn distance Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedComputer}>
          {computers &&
            computers.map((item) => {
              return (
                <option value={item.cost}>
                  Computer {item.computer} Bonus: {item.bonus} Nodes:{" "}
                  {item.nodes} PCU: {item.pcu} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedCrewQuarter}>
          {crewquarters &&
            crewquarters.map((item) => {
              return (
                <option value={item.cost}>
                  Crew Quarters: {item.crewQuarters} Cost (In BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedDefenseiveCountermeasure}>
          {defensivecountermeasures &&
            defensivecountermeasures.map((item) => {
              return (
                <option value={item.cost}>
                  Name: {item.defensiveCountermeasures} Bonus to TL:{" "}
                  {item.TLbonus} PCU: {item.pcu} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedDriftEngine}>
          {driftengines &&
            driftengines.map((item) => {
              return (
                <option value={item.cost}>
                  Drift Engine: {item.driftEngine} Engine Rating: {item.rating}{" "}
                  Min. PCU {item.pcuRequirement} Max. Size {item.maxSize}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedExpansionBay}>
          {expansionbays &&
            expansionbays.map((item) => {
              return (
                <option value={item.cost}>
                  Expansion Bay: {item.expansionBay} PCU: {item.pcu} Cost (In
                  BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedSecurity}>
          {security &&
            security.map((item) => {
              return (
                <option>
                  Security: {item.security} Cost (In BP): {item.cost}
                </option>
              );
            })}
        </select>

        {weaponToggleLongarm === true && (
          <select>
            {personnelweaponslongarm &&
              personnelweaponslongarm.map((item) => {
                return (
                  <option>
                    Weapon: {item.weapon} Item Level: {item.level}
                    
                  </option>
                );
              })}
          </select>
        )}

        {weaponToggleHeavy === true && (
          <select>
            {personnelweaponsheavy &&
              personnelweaponsheavy.map((item) => {
                return (
                  <option>
                    Weapon: {item.weapon} Item Level: {item.level}
                    
                  </option>
                );
              })}
          </select>
        )}

        <select onChange={handleSelectedSensor}>
          {sensors &&
            sensors.map((item) => {
              return (
                <option value={item.cost}>
                  Sensors: {item.sensors} Range: {item.range} Modifier:{" "}
                  {item.modifier} Cost (in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select onChange={handleSelectedShield}>
          {shields &&
            shields.map((item) => {
              return (
                <option value={item.cost}>
                  Shield Name: {item.shield} Total SP: {item.totalSP} Regen.:{" "}
                  {item.regen} PCU: {item.pcu} Cost(in BP): {item.cost}
                </option>
              );
            })}
        </select>
        <select>
          {weapons &&
            weapons.map((item) => {
              return (
                <option>
                  Name: {item.weapon} Range: {item.range} Speed: {item.speed}{" "}
                  Damage: {item.damage} PCU: {item.pcu} Cost (In BP):{" "}
                  {item.cost} Special: {item.special}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default HomePage;
