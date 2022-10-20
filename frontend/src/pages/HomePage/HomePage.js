import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [tiers, setTier] = useState([]);
  const [frames, setFrame] = useState([]);
  const [powercores, setPowercore] = useState([]);
  const [thrusters, setThruster] = useState([]);
  const [armors, setArmor] = useState([]);
  const [computers, setComputer] = useState([]);
  const [crewquarters, setCrewquarter] = useState([]);
  const [driftengines, setDriftengine] = useState([]);
  const [expansionbays, setExpansionbay] = useState([]);
  const [security, setSecurity] = useState([]);
  const [sensors, setSensor] = useState([]);
  const [shields, setShield] = useState([]);
  const [weapons, setWeapon] = useState([]);

  useEffect(() => {
    const fetchTiers = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/tiers/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
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
        let response = await axios.get("http://127.0.0.1:8000/api/powercores/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
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
        let response = await axios.get("http://127.0.0.1:8000/api/crewquarters/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCrewquarter(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCrewquarters();

    const fetchDriftengines = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/driftengines/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setDriftengine(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchDriftengines();

    const fetchExpansionbays = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/expansionbays/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
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

  }, [token]);
  return (
    <div className="container">
      <h1>Starship Generator Protoype for {user.username}!</h1>
      <select>
        {tiers &&
          tiers.map((item) => {
            
            return (
              <option>
                Tier: {item.tier} BP Limit: {item.bpuLimiter} HP increases: {item.special}
              </option>

            )

            })}
        </select>
        <select>
        {frames &&
          frames.map((item) => {
            
            return (
              <option>
                Frame: {item.frame} Size: {item.size} Maneuverability: {item.maneuverability} HP: {item.hp} Increment: {item.increment} DT: {item.dt} CT: {item.ct} Mounts: {item.mounts} Expansion Bays: {item.expansionBays} Minimum Crew: {item.minimumCrew} Maximum Crew: {item.maximumCrew} Cost: {item.cost}
              </option>

            )
            

            })}
        </select>
        <select>
        {powercores &&
          powercores.map((item) => {
            
            return (
              <option>
                Core: {item.core} Size: {item.size} PCU: {item.pcu} Cost {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {thrusters &&
          thrusters.map((item) => {
            
            return (
              <option>
                Thruster: {item.thruster} Size: {item.size} Speed (in hexes): {item.speed} Piloting Modifier: {item.piloting} PCU: {item.pcu} Cost (in BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {armors &&
          armors.map((item) => {
            
            return (
              <option>
                Armor: {item.armor} AC: {item.ac} Special: {item.specialTL} TL, {item.specialTD} turn distance
              </option>

            )

            })}
        </select>
        <select>
        {computers &&
          computers.map((item) => {
            
            return (
              <option>
                Computer {item.computer} Bonus: {item.bonus} Nodes: {item.nodes} PCU: {item.pcu} Cost (in BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {crewquarters &&
          crewquarters.map((item) => {
            
            return (
              <option>
                Crew Quarters: {item.crewQuarters} Cost (In BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {driftengines &&
          driftengines.map((item) => {
            
            return (
              <option>
                Drift Engine: {item.driftEngine} Engine Rating: {item.rating} Min. PCU {item.pcuRequirement} Max. Size {item.maxSize}
              </option>

            )

            })}
        </select>
        <select>
        {expansionbays &&
          expansionbays.map((item) => {
            
            return (
              <option>
                Expansion Bay: {item.expansionBay} PCU: {item.pcu} Cost (In BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {security &&
          security.map((item) => {
            
            return (
              <option>
                Security: {item.security} Cost (In BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {sensors &&
          sensors.map((item) => {
            
            return (
              <option>
                Sensors: {item.sensors} Range: {item.range} Modifier: {item.modifier} Cost (in BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {shields &&
          shields.map((item) => {
            
            return (
              <option>
                Shield Name: {item.shield} Total SP: {item.totalSP} Regen.: {item.regen} PCU: {item.pcu} Cost(in BP): {item.cost}
              </option>

            )

            })}
        </select>
        <select>
        {weapons &&
          weapons.map((item) => {
            
            return (
              <option>
                Name: {item.weapon} Range: {item.range} Speed: {item.speed} Damage: {item.damage} PCU: {item.pcu} Cost (In BP): {item.cost} Special: {item.special}
              </option>

            )

            })}
        </select>
    </div>
  );
};

export default HomePage;