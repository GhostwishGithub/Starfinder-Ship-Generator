let user = {username:"Bane"}
if (localStorage.getItem("starfindershipgenerator") !=null){
    user=JSON.parse(localStorage.getItem("starfindershipgenerator"));
}
if (user.parts==undefined){
    user.parts={
        powercore:{},
        thruster:{},
        armor:{},
        computer:{},
        crewQuarter:{},
        defensiveCountermeasure:{},
        driftEngine:{},
        expansionBay:{},
        security:{},
        sensor:{},
        shield:{},
        weapon:{}
    }
}
function SaveToStorage() {
    localStorage.setItem('starfindershipgenerator', JSON.stringify(user))
}

Armors=JSON.parse(`
[{"id":1, "armor":"Mk 1 Armor", "ac":1, "specialTL":0, "specialTD":0, "cost":1},
 {"id":2, "armor":"Mk 2 Armor", "ac":2, "specialTL":0, "specialTD":0, "cost":2},
 {"id":3, "armor":"Mk 3 Armor", "ac":3, "specialTL":0, "specialTD":0, "cost":3},
 {"id":4, "armor":"Mk 4 Armor", "ac":4, "specialTL":0, "specialTD":0, "cost":5},
 {"id":5, "armor":"Mk 5 Armor", "ac":5, "specialTL":-1, "specialTD":0, "cost":7},
 {"id":6, "armor":"Mk 6 Armor", "ac":6, "specialTL":-1, "specialTD":0, "cost":9},
 {"id":7, "armor":"Mk 7 Armor", "ac":7, "specialTL":-1, "specialTD":0, "cost":12},
 {"id":8, "armor":"Mk 8 Armor", "ac":8, "specialTL":-1, "specialTD":0, "cost":15},
 {"id":9, "armor":"Mk 9 Armor", "ac":9, "specialTL":-2, "specialTD":1, "cost":18},
 {"id":10, "armor":"Mk 10 Armor", "ac":10, "specialTL":-2, "specialTD":1, "cost":21},
 {"id":11, "armor":"Mk 11 Armor", "ac":11, "specialTL":-2, "specialTD":1, "cost":25},
 {"id":12, "armor":"Mk 12 Armor", "ac":12, "specialTL":-3, "specialTD":2, "cost":30},
 {"id":13, "armor":"Mk 13 Armor", "ac":13, "specialTL":-3, "specialTD":2, "cost":35},
 {"id":14, "armor":"Mk 14 Armor", "ac":14, "specialTL":-3, "specialTD":2, "cost":40},
 {"id":15, "armor":"Mk 15 Armor", "ac":15, "specialTL":-4, "specialTD":3, "cost":45}]
`);

Computers=JSON.parse(`
[{"id":1, "computer":"Basic Computer", "bonus":"0", "nodes":0, "pcu":0, "cost":0},
{"id":2, "computer":"Mk 1 mononode", "bonus":"1", "nodes":1, "pcu":10, "cost":1},
{"id":3, "computer":"Mk 1 duonode", "bonus":"+1/+1", "nodes":2, "pcu":10, "cost":2},
{"id":4, "computer":"Mk 1 trinode", "bonus":"+1/+1/+1", "nodes":3, "pcu":10, "cost":3},
{"id":5, "computer":"Mk 1 tetranode", "bonus":"+1/+1/+1/+1", "nodes":4, "pcu":10, "cost":4},
{"id":6, "computer":"Mk 2 mononode", "bonus":"+2", "nodes":1, "pcu":15, "cost":4},
{"id":7, "computer":"Mk 2 duonode", "bonus":"+2/+2", "nodes":2, "pcu":15, "cost":8},
{"id":8, "computer":"Mk 2 tricode", "bonus":"+2/+2/+2", "nodes":3, "pcu":15, "cost":12},
{"id":9, "computer":"Mk 2 tetranode", "bonus":"+2/+2/+2/+2", "nodes":4, "pcu":15, "cost":16},
{"id":10, "computer":"Mk 3 monocode", "bonus":"+3", "nodes":1, "pcu":20, "cost":9},
{"id":11, "computer":"Mk 3 duonode", "bonus":"+3/+3", "nodes":2, "pcu":20, "cost":18},
{"id":12, "computer":"Mk 3 trinode", "bonus":"+3/+3/+3", "nodes":3, "pcu":20, "cost":27},
{"id":13, "computer":"Mk 3 tetranode", "bonus":"+3/+3/+3/+3", "nodes":4, "pcu":20, "cost":36},
{"id":14, "computer":"Mk 4 mononode", "bonus":"+4", "nodes":1, "pcu":25, "cost":16},
{"id":15, "computer":"Mk 4 duonode", "bonus":"+4/+4", "nodes":2, "pcu":25, "cost":32},
{"id":16, "computer":"Mk 4 trinode", "bonus":"+4/+4/+4", "nodes":3, "pcu":25, "cost":48},
{"id":17, "computer":"Mk 5 mononode", "bonus":"+5", "nodes":1, "pcu":30, "cost":25},
{"id":18, "computer":"Mk 5 duonode", "bonus":"+5/+5", "nodes":2, "pcu":30, "cost":50},
{"id":19, "computer":"Mk 5 trinode", "bonus":"+5/+5/+5", "nodes":3, "pcu":30, "cost":75},
{"id":20, "computer":"Mk 6 mononode", "bonus":"+6", "nodes":1, "pcu":35, "cost":36},
{"id":21, "computer":"Mk 6 duonode", "bonus":"+6/+6", "nodes":2, "pcu":35, "cost":72},
{"id":22, "computer":"Mk 7 mononode", "bonus":"+7", "nodes":1, "pcu":40, "cost":49},
{"id":23, "computer":"Mk 7 duonode", "bonus":"+7/+7", "nodes":2, "pcu":40, "cost":98},
{"id":24, "computer":"Mk 8 mononode", "bonus":"+8", "nodes":1, "pcu":45, "cost":64},
{"id":25, "computer":"Mk 8 duonode", "bonus":"+8/+8", "nodes":2, "pcu":45, "cost":128},
{"id":26, "computer":"Mk 9 mononode", "bonus":"+9", "nodes":1, "pcu":50, "cost":81},
{"id":27, "computer":"Mk 9 duonode", "bonus":"+9/+9", "nodes":2, "pcu":50, "cost":162},
{"id":28, "computer":"Mk 10 mononode", "bonus":"+10", "nodes":1, "pcu":55, "cost":100},
{"id":29, "computer":"Mk 10 duonode", "bonus":"+10/+10", "nodes":2, "pcu":55, "cost":200}]`);

CrewQuarters=JSON.parse(`
[{"id":1, "crewQuarters":"Common", "cost":0},
{"id":2, "crewQuarters":"Good", "cost":2},
{"id":3, "crewQuarters":"Luxurious", "cost":5}]
`);

DefensiveCountermeasures=JSON.parse(`
[{"id":1, "defensiveCountermeasures":"Mk 1 defenses", "TLbonus":1, "pcu":1, "cost":2},
 {"id":2, "defensiveCountermeasures":"Mk 2 defenses", "TLbonus":2, "pcu":1, "cost":3},
 {"id":3, "defensiveCountermeasures":"Mk 3 defenses", "TLbonus":3, "pcu":2, "cost":4},
 {"id":4, "defensiveCountermeasures":"Mk 4 defenses", "TLbonus":4, "pcu":3, "cost":6},
 {"id":5, "defensiveCountermeasures":"Mk 5 defenses", "TLbonus":5, "pcu":4, "cost":8},
 {"id":6, "defensiveCountermeasures":"Mk 6 defenses", "TLbonus":6, "pcu":5, "cost":11},
 {"id":7, "defensiveCountermeasures":"Mk 7 defenses", "TLbonus":7, "pcu":7, "cost":14},
 {"id":8, "defensiveCountermeasures":"Mk 8 defenses", "TLbonus":8, "pcu":9, "cost":18},
 {"id":9, "defensiveCountermeasures":"Mk 9 defenses", "TLbonus":9, "pcu":11, "cost":22},
 {"id":10, "defensiveCountermeasures":"Mk 10 defenses", "TLbonus":10, "pcu":13, "cost":27},
 {"id":11, "defensiveCountermeasures":"Mk 11 defenses", "TLbonus":11, "pcu":16, "cost":33},
 {"id":12, "defensiveCountermeasures":"Mk 12 defenses", "TLbonus":12, "pcu":20, "cost":40},
 {"id":13, "defensiveCountermeasures":"Mk 13 defenses", "TLbonus":13, "pcu":25, "cost":50},
 {"id":14, "defensiveCountermeasures":"Mk 14 defenses", "TLbonus":32, "pcu":32, "cost":65},
 {"id":15, "defensiveCountermeasures":"Mk 15 defenses", "TLbonus":15, "pcu":45, "cost":90}]
`);

DriftEngine=JSON.parse(`
[{"id":1, "driftEngine":"Signal Basic", "rating":1, "pcuRequirement":75, "maxSize":"N/A", "cost":2},
 {"id":2, "driftEngine":"Signal Booster", "rating":2, "pcuRequirement":100, "maxSize":"Huge", "cost":5},
 {"id":3, "driftEngine":"Signal Major", "rating":3, "pcuRequirement":150, "maxSize":"Large", "cost":10},
 {"id":4, "driftEngine":"Signal Superior", "rating":4, "pcuRequirement":175, "maxSize":"Large", "cost":15},
 {"id":5, "driftEngine":"Signal Ultra", "rating":5, "pcuRequirement":200, "maxSize":"Medium", "cost":20}]
`);

ExpansionBays=JSON.parse(`
[{"id":1, "expansionBay":"Arcane Laboratory", "pcu":1, "cost":1},
 {"id":2, "expansionBay":"Cargo Hold", "pcu":0, "cost":0},
 {"id":3, "expansionBay":"Escape Pods", "pcu":2, "cost":1},
 {"id":4, "expansionBay":"Guest Quarters", "pcu":1, "cost":1},
 {"id":5, "expansionBay":"Hanger Bay", "pcu":30, "cost":10},
 {"id":6, "expansionBay":"Life Boats", "pcu":5, "cost":3},
 {"id":7, "expansionBay":"Medical Bay", "pcu":4, "cost":8},
 {"id":8, "expansionBay":"Passenger seating", "pcu":0, "cost":0},
 {"id":9, "expansionBay":"Power core housing", "pcu":0, "cost":10},
 {"id":10, "expansionBay":"Recreation suite (gym)", "pcu":0, "cost":1},
 {"id":11, "expansionBay":"Recreation suite (trivid den)", "pcu":1, "cost":1},
 {"id":12, "expansionBay":"Recreation suite (HAC)", "pcu":3, "cost":1},
 {"id":13, "expansionBay":"Science lab", "pcu":2, "cost":1},
 {"id":14, "expansionBay":"Sealed environment chamber", "pcu":2, "cost":1},
 {"id":15, "expansionBay":"Shuttle bay", "pcu":10, "cost":4},
 {"id":16, "expansionBay":"Smuggler compartment", "pcu":4, "cost":2},
 {"id":17, "expansionBay":"Synthesis bay", "pcu":2, "cost":1},
 {"id":18, "expansionBay":"Tech workshop", "pcu":3, "cost":1}]
`);

Frames=JSON.parse(`
[{"id":1, "frame":"Racer", "size":"Tiny", "maneuverability":"perfect (+2 piloting, turn 0)", "hp":20, "increment":5, "dt":0, "ct":4, "mounts":"forward arc (1 light), aft arc (1 light)", "expansionBays":0, "minimumCrew":1, "maximumCrew":1, "cost":4},
 {"id":2, "frame":"Interceptor", "size":"Tiny", "maneuverability":"perfect (+2 piloting, turn 0)", "hp":30, "increment":5, "dt":0, "ct":6, "mounts":"forward arc (2 light)", "expansionBays":0, "minimumCrew":1, "maximumCrew":1, "cost":6},
 {"id":3, "frame":"Fighter", "size":"Tiny", "maneuverability":"Good (+1 Piloting, turn 1)", "hp":35, "increment":5, "dt":0, "ct":7, "mounts":"forward arc (2 light [1 must be a tracking weapon]), aft arc (1 light)", "expansionBays":0, "minimumCrew":1, "maximumCrew":2, "cost":8},
 {"id":4, "frame":"Shuttle", "size":"Small", "maneuverability":"perfect (+2 piloting, turn 0)", "hp":35, "increment":5, "dt":0, "ct":7, "mounts":"forward arc (1 light)", "expansionBays":3, "minimumCrew":1, "maximumCrew":4, "cost":6},
 {"id":5, "frame":"Light Freighter", "size":"Small", "maneuverability":"Good (+1 Piloting, turn 1)", "hp":40, "increment":10, "dt":0, "ct":8, "mounts":"forward arc (2 light), port arc (1 light), starboard arc (1 light)", "expansionBays":3, "minimumCrew":1, "maximumCrew":6, "cost":10},
 {"id":6, "frame":"Explorer", "size":"Medium", "maneuverability":"Good (+1 Piloting, turn 1)", "hp":55, "increment":10, "dt":0, "ct":11, "mounts":"forward arc (2 light), port arc (1 light), starboard arc (1 light) turret (1 light)", "expansionBays":4, "minimumCrew":1, "maximumCrew":6, "cost":12},
 {"id":7, "frame":"Transport", "size":"Medium", "maneuverability":"average (+0 Piloting, turn 2)", "hp":70, "increment":15, "dt":0, "ct":14, "mounts":"forward arc (1 heavy, 1 light), aft arc (1 light), turret (2 light)", "expansionBays":5, "minimumCrew":1, "maximumCrew":6, "cost":15},
 {"id":8, "frame":"Destroyer", "size":"Large", "maneuverability":"average (+0 Piloting, turn 2)", "hp":150, "increment":20, "dt":0, "ct":30, "mounts":"forward arc (2 heavy), port arc (1 light), starboard arc (1 light), aft arc (1 light), turret (1 light)", "expansionBays":4, "minimumCrew":6, "maximumCrew":20, "cost":30},
 {"id":9, "frame":"Heavy Freighter", "size":"Large", "maneuverability":"average (+0 Piloting, turn 2)", "hp":120, "increment":20, "dt":0, "ct":24, "mounts":"forward arc (1 heavy, 2 light), port arc (1 heavy), starboard arc (1 heavy)", "expansionBays":8, "minimumCrew":6, "maximumCrew":20, "cost":40},
 {"id":10, "frame":"Bulk Freighter", "size":"Huge", "maneuverability":"poor (-1 piloting, turn 3)", "hp":160, "increment":20, "dt":5, "ct":32, "mounts":"forward arc (1 heavy), aft arc (1 heavy), turret (2 light)", "expansionBays":10, "minimumCrew":20, "maximumCrew":50, "cost":55},
 {"id":11, "frame":"Cruiser", "size":"Huge", "maneuverability":"average (+0 Piloting, turn 2)", "hp":180, "increment":25, "dt":5, "ct":36, "mounts":"forward arc (1 capital), port arc (1 light), starboard arc (1 light), turret (1 heavy)", "expansionBays":6, "minimumCrew":20, "maximumCrew":100, "cost":60},
 {"id":12, "frame":"Carrier", "size":"Gargantuan", "maneuverability":"poor (-1 piloting, turn 3)", "hp":240, "increment":30, "dt":10, "ct":48, "mounts":"forward arc (1 capital), port arc (3 heavy), starboard arc (3 heavy), turret (2 light)", "expansionBays":10, "minimumCrew":75, "maximumCrew":200, "cost":120},
 {"id":13, "frame":"Battleship", "size":"Gargantuan", "maneuverability":"average (+0 Piloting, turn 2)", "hp":280, "increment":40, "dt":10, "ct":56, "mounts":"forward arc (1 capital, 2 heavy), port arc (2 heavy, 1 light), starboard arc (2 heavy, 1 light), aft arc (1 light), turret (2 heavy)", "expansionBays":8, "minimumCrew":100, "maximumCrew":300, "cost":150},
 {"id":14, "frame":"Dreadnaught", "size":"Colossal", "maneuverability":"clumsy (=2 Piloting, turn 4)", "hp":400, "increment":50, "dt":15, "ct":80, "mounts":"forward arc (2 capital, 2 heavy), port arc (1 capital, 3 heavy), starboard arc (1 capital, 3 heavy), turret (4 light)", "expansionBays":20, "minimumCrew":125, "maximumCrew":500, "cost":200}]
`);

PersonnelWeaponsHeavys=JSON.parse(`
[{"id":1, "weapon":"Zero cannon, tactical", "level":11},
 {"id":2, "weapon":"Zero cannon, advanced", "level":14},
 {"id":3, "weapon":"Zero cannon, elite", "level":18},
 {"id":4, "weapon":"Flamethrower, ifrit-class", "level":2},
 {"id":5, "weapon":"Flamethrower, salamander-class", "level":8},
 {"id":6, "weapon":"Flamethrower, hellhound-class", "level":12},
 {"id":7, "weapon":"Flamethrower, firedrake-class", "level":15},
 {"id":8, "weapon":"Flamethrower, phoenix-class", "level":18},
 {"id":9, "weapon":"Artillery laser, azimuth", "level":1},
 {"id":10, "weapon":"Artillery laser, corona", "level":6},
 {"id":11, "weapon":"Artillery laser, aphelion", "level":9},
 {"id":12, "weapon":"Autobeam artillery, tactical", "level":10},
 {"id":13, "weapon":"Artillery laser, perihelion", "level":13},
 {"id":14, "weapon":"Autobeam artillery, advanced", "level":16},
 {"id":15, "weapon":"Artillery laser, parallax", "level":17},
 {"id":16, "weapon":"Autobeam artillery, elite", "level":19},
 {"id":17, "weapon":"Artillery laser, zenith", "level":20},
 {"id":18, "weapon":"Plasma cannon, red star", "level":8},
 {"id":19, "weapon":"Plasma cannon, yellow star", "level":14},
 {"id":20, "weapon":"Plasma cannon, white star", "level":16},
 {"id":21, "weapon":"Plasma cannon, blue star", "level":20},
 {"id":22, "weapon":"Reaction cannon, light", "level":1},
 {"id":23, "weapon":"Machine gun, squad", "level":4},
 {"id":24, "weapon":"X-gen gun, tactical", "level":6},
 {"id":25, "weapon":"Reaction cannon, tactical", "level":7},
 {"id":26, "weapon":"Machine gun, light", "level":8},
 {"id":27, "weapon":"X-gen gun, advanced", "level":9},
 {"id":28, "weapon":"Reaction cannon, heavy", "level":10},
 {"id":29, "weapon":"Stellar cannon, light", "level":10},
 {"id":30, "weapon":"Crossbolter, advanced", "level":11},
 {"id":31, "weapon":"Machine gun, medium", "level":11},
 {"id":32, "weapon":"X-gen gun, elite", "level":13},
 {"id":33, "weapon":"Crossbolter, elite", "level":14},
 {"id":34, "weapon":"Reaction cannon, advanced", "level":14},
 {"id":35, "weapon":"Stellar cannon, heavy", "level":15},
 {"id":36, "weapon":"Machine gun, heavy", "level":17},
 {"id":37, "weapon":"Reaction cannon, elite", "level":17},
 {"id":38, "weapon":"Crossbolter, paragon", "level":18},
 {"id":39, "weapon":"Reaction cannon, paragon", "level":20},
 {"id":40, "weapon":"X-gen gun, paragon", "level":20},
 {"id":41, "weapon":"Shock caster, static", "level":6},
 {"id":42, "weapon":"Shock caster, aurora", "level":10},
 {"id":43, "weapon":"Shock caster, storm", "level":16},
 {"id":44, "weapon":"Shock caster, tempest", "level":20},
 {"id":45, "weapon":"Screamer, thunderstrike", "level":5},
 {"id":46, "weapon":"Screamer, LFD", "level":9},
 {"id":47, "weapon":"Screamer, HFD", "level":15},
 {"id":48, "weapon":"NIL grenade launcher, merc", "level":1},
 {"id":49, "weapon":"NIL grenade launcher, squad", "level":8},
 {"id":50, "weapon":"IMDS missile launcher", "level":10}]
`);

PersonnelWeaponsLongarms=JSON.parse(`
[{"id":1, "weapon":"Zero rifle, frostbite-class", "level":4},
 {"id":2, "weapon":"Zero rifle, hailstorm-class", "level":8},
 {"id":3, "weapon":"Zero rifle, blizzard-class", "level":14},
 {"id":4, "weapon":"Zero rifle, avalanche-class", "level":18},
 {"id":5, "weapon":"Flame rifle", "level":2},
 {"id":6, "weapon":"Laser rifle, azimuth", "level":1},
 {"id":7, "weapon":"Laser rifle, corona", "level":6},
 {"id":8, "weapon":"Laser rifle, aphelion", "level":9},
 {"id":9, "weapon":"Autobeam rifle, tactical", "level":11},
 {"id":10, "weapon":"Laser rifle, perihelion", "level":13},
 {"id":11, "weapon":"Autobeam rifle, advanced", "level":15},
 {"id":12, "weapon":"Laser rifle, parallax", "level":17},
 {"id":13, "weapon":"Autobeam rifle, elite", "level":19},
 {"id":14, "weapon":"Laser rifle, zenith", "level":20},
 {"id":15, "weapon":"Plasma rifle, red star", "level":6},
 {"id":16, "weapon":"Plasma rifle, yellow star", "level":10},
 {"id":17, "weapon":"Plasma caster, white star", "level":13},
 {"id":18, "weapon":"Plasma rifle, white star", "level":15},
 {"id":19, "weapon":"Plasma caster, blue star", "level":17},
 {"id":20, "weapon":"Plasma rifle, blue star", "level":20},
 {"id":21, "weapon":"Hunting rifle", "level":1},
 {"id":22, "weapon":"Scattergun, utility", "level":1},
 {"id":23, "weapon":"Acid dart rifle, tactical", "level":2},
 {"id":24, "weapon":"Autotarget rifle", "level":2},
 {"id":25, "weapon":"Crossbolter, tactical", "level":2},
 {"id":26, "weapon":"Acid dart rifle, dual", "level":7},
 {"id":27, "weapon":"Seeker rifle, tactical", "level":7},
 {"id":28, "weapon":"Crossbolter, dual", "level":8},
 {"id":29, "weapon":"Scattergun, snub", "level":8},
 {"id":30, "weapon":"Magnetar rifle, tactical", "level":9},
 {"id":31, "weapon":"Combat rifle", "level":10},
 {"id":32, "weapon":"Acid dart rifle, complex", "level":12},
 {"id":33, "weapon":"Scattergun, impact", "level":12},
 {"id":34, "weapon":"Gyrojet rifle, tactical", "level":13},
 {"id":35, "weapon":"Magnetar rifle, advanced", "level":13},
 {"id":36, "weapon":"Seeker rifle, advanced", "level":14},
 {"id":37, "weapon":"Gyrojet rifle, advanced", "level":15},
 {"id":38, "weapon":"Scattergun, vortex", "level":15},
 {"id":39, "weapon":"Magnetar rifle, elite", "level":16},
 {"id":40, "weapon":"Gyrojet rifle, elite", "level":17},
 {"id":41, "weapon":"Seeker rifle, elite", "level":17},
 {"id":42, "weapon":"Scattergun, grapeshot", "level":18},
 {"id":43, "weapon":"Magnetar rifle, paragon", "level":19},
 {"id":44, "weapon":"Gyrojet rifle, paragon", "level":20},
 {"id":45, "weapon":"Seeker rifle, paragon", "level":20},
 {"id":46, "weapon":"Pulsecaster rifle", "level":1},
 {"id":47, "weapon":"Arc emitter, tactical", "level":2},
 {"id":48, "weapon":"Arc rifle, static", "level":6},
 {"id":49, "weapon":"Arc emitter, advanced", "level":9},
 {"id":50, "weapon":"Arc rifle, aurora", "level":11},
 {"id":51, "weapon":"Arc rifle, storm", "level":16},
 {"id":52, "weapon":"Arc rifle, tempest", "level":19},
 {"id":53, "weapon":"Sonic rifle, thunderstrike", "level":5},
 {"id":54, "weapon":"Streetsweeper, thunderstrike", "level":7},
 {"id":55, "weapon":"Sonic rifle, LFD", "level":10},
 {"id":56, "weapon":"Streetsweeper, LFD", "level":12},
 {"id":57, "weapon":"Sonic rifle, HFD", "level":14},
 {"id":58, "weapon":"Streetsweeper, HFD", "level":16},
 {"id":59, "weapon":"Sonic rifle, banshee", "level":18},
 {"id":60, "weapon":"Needler rifle", "level":1}]
`);

PowerCores=JSON.parse(`
[{"id":1, "core":"Micron Light", "size":"T", "pcu":50, "cost":4},
 {"id":2, "core":"Micron Heavy", "size":"T", "pcu":70, "cost":6},
 {"id":3, "core":"Micron Ultra", "size":"T", "pcu":80, "cost":8},
 {"id":4, "core":"Arcus Light", "size":"T, S", "pcu":75, "cost":7},
 {"id":5, "core":"Pulse Brown", "size":"T, S", "pcu":90, "cost":9},
 {"id":6, "core":"Pulse Black", "size":"T, S", "pcu":120, "cost":12},
 {"id":7, "core":"Pulse White", "size":"T, S", "pcu":140, "cost":14},
 {"id":8, "core":"Pulse Gray", "size":"T, S, M", "pcu":100, "cost":10},
 {"id":9, "core":"Arcus Heavy", "size":"T, S, M", "pcu":130, "cost":13},
 {"id":10, "core":"Pulse Green", "size":"T, S, M", "pcu":150, "cost":15},
 {"id":11, "core":"Pulse Red", "size":"T, S, M", "pcu":175, "cost":17},
 {"id":12, "core":"Pulse Blue", "size":"T, S, M", "pcu":200, "cost":20},
 {"id":13, "core":"Arcus Ultra", "size":"S, M, L", "pcu":150, "cost":15},
 {"id":14, "core":"Arcus Maximum", "size":"S, M, L", "pcu":200, "cost":20},
 {"id":15, "core":"Pulse Orange", "size":"S, M, L", "pcu":250, "cost":25},
 {"id":16, "core":"Pulse Prismatic", "size":"S, M, L", "pcu":300, "cost":30},
 {"id":17, "core":"Nova Light", "size":"M, L, H", "pcu":150, "cost":15},
 {"id":18, "core":"Nova Heavy", "size":"M, L, H", "pcu":200, "cost":20},
 {"id":19, "core":"Nova Ultra", "size":"M, L, H", "pcu":300, "cost":30},
 {"id":20, "core":"Gateway Light", "size":"L, H, G", "pcu":300, "cost":30},
 {"id":21, "core":"Gateway Heavy", "size":"L, H, G", "pcu":400, "cost":40},
 {"id":22, "core":"Gateway Ultra", "size":"H, G, C", "pcu":500, "cost":50},
 {"id":23, "core":"Tateari Custom Model P42", "size":"L", "pcu":400, "cost":90}]
`);

Securitys=JSON.parse(`
[{"id":1, "security":"Anti-hacking systems", "cost":"3"},
 {"id":2, "security":"Antipersonnel weapon (heavy)", "cost":"0"},
 {"id":3, "security":"Antipersonnel weapon (longarm)", "cost":"0"},
 {"id":4, "security":"Biometric locks", "cost":"5"},
 {"id":5, "security":"Computer countermeasures", "cost":"0"},
 {"id":6, "security":"Self-destruct system", "cost":"0"}]
`);

Sensors=JSON.parse(`
[{"id":1, "sensors":"Cut-Rate", "range":"Short", "modifier":-2, "cost":1},
 {"id":2, "sensors":"Budget short-range", "range":"Short", "modifier":0, "cost":2},
 {"id":3, "sensors":"Basic short-range", "range":"Short", "modifier":2, "cost":3},
 {"id":4, "sensors":"Advanced short-range", "range":"Short", "modifier":4, "cost":4},
 {"id":5, "sensors":"Budget medium-range", "range":"Medium", "modifier":0, "cost":3},
 {"id":6, "sensors":"Basic medium-range", "range":"Medium", "modifier":2, "cost":5},
 {"id":7, "sensors":"Advanced medium-range", "range":"Medium", "modifier":4, "cost":8},
 {"id":8, "sensors":"Budget long-range", "range":"Long", "modifier":0, "cost":6},
 {"id":9, "sensors":"Basic long-range", "range":"Long", "modifier":2, "cost":10},
 {"id":10, "sensors":"Advanced long-range", "range":"Long", "modifier":4, "cost":14}]
`);

Shields=JSON.parse(`
[{"id":1, "shield":"Basic Shields 10", "totalSP":10, "regen":"1/min", "pcu":5, "cost":2},
 {"id":2, "shield":"Basic Shields 20", "totalSP":20, "regen":"1/min", "pcu":10, "cost":3},
 {"id":3, "shield":"Basic Shields 30", "totalSP":30, "regen":"1/min", "pcu":15, "cost":4},
 {"id":4, "shield":"Basic Shields 40", "totalSP":40, "regen":"1/min", "pcu":15, "cost":5},
 {"id":5, "shield":"Light Shields 50", "totalSP":50, "regen":"2/min", "pcu":20, "cost":6},
 {"id":6, "shield":"Light Shields 60", "totalSP":60, "regen":"2/min", "pcu":20, "cost":8},
 {"id":7, "shield":"Light Shields 70", "totalSP":70, "regen":"2/min", "pcu":25, "cost":10},
 {"id":8, "shield":"Light Shields 80", "totalSP":80, "regen":"2/min", "pcu":30, "cost":12},
 {"id":9, "shield":"Medium Shields 90", "totalSP":90, "regen":"4/min", "pcu":30, "cost":13},
 {"id":10, "shield":"Medium Shields 100", "totalSP":100, "regen":"4/min", "pcu":30, "cost":15},
 {"id":11, "shield":"Medium Shields 120", "totalSP":120, "regen":"4/min", "pcu":35, "cost":17},
 {"id":12, "shield":"Medium Shields 140", "totalSP":140, "regen":"8/min", "pcu":40, "cost":18},
 {"id":13, "shield":"Medium Shields 160", "totalSP":160, "regen":"8/min", "pcu":45, "cost":20},
 {"id":14, "shield":"Medium Shields 200", "totalSP":200, "regen":"8/min", "pcu":50, "cost":22},
 {"id":15, "shield":"Heavy Shields 240", "totalSP":240, "regen":"16/min", "pcu":55, "cost":23},
 {"id":16, "shield":"Heavy Shields 280", "totalSP":280, "regen":"16/min", "pcu":60, "cost":25},
 {"id":17, "shield":"Heavy Shields 320", "totalSP":320, "regen":"16/min", "pcu":70, "cost":27},
 {"id":18, "shield":"Heavy Shields 360", "totalSP":360, "regen":"32/min", "pcu":80, "cost":28},
 {"id":19, "shield":"Heavy Shields 420", "totalSP":420, "regen":"32/min", "pcu":90, "cost":30},
 {"id":20, "shield":"Heavy Shields 480", "totalSP":480, "regen":"32/min", "pcu":110, "cost":32},
 {"id":21, "shield":"Superior Shields 540", "totalSP":540, "regen":"64/min", "pcu":130, "cost":35},
 {"id":22, "shield":"Superior Shields 600", "totalSP":600, "regen":"64/min", "pcu":160, "cost":40}]
`);

Thrusters=JSON.parse(`
[{"id":1, "thruster":"T6 Thrusters", "size":"T", "speed":6, "piloting":1, "pcu":20, "cost":3},
 {"id":2, "thruster":"T8 thrusters", "size":"T", "speed":8, "piloting":0, "pcu":25, "cost":4},
 {"id":3, "thruster":"T10 thrusters", "size":"T", "speed":10, "piloting":0, "pcu":30, "cost":5},
 {"id":4, "thruster":"T12 thrusters", "size":"T", "speed":12, "piloting":-1, "pcu":35, "cost":6},
 {"id":5, "thruster":"T14 thrusters", "size":"T", "speed":14, "piloting":-2, "pcu":40, "cost":7},
 {"id":6, "thruster":"S6 thrusters", "size":"S", "speed":6, "piloting":1, "pcu":30, "cost":3},
 {"id":7, "thruster":"S8 thrusters", "size":"S", "speed":8, "piloting":0, "pcu":40, "cost":4},
 {"id":8, "thruster":"S10 thrusters", "size":"S", "speed":10, "piloting":0, "pcu":50, "cost":5},
 {"id":9, "thruster":"S12 thrusters", "size":"S", "speed":12, "piloting":-1, "pcu":60, "cost":6},
 {"id":10, "thruster":"M4 thrusters", "size":"M", "speed":4, "piloting":2, "pcu":40, "cost":2},
 {"id":11, "thruster":"M6 thrusters", "size":"M", "speed":6, "piloting":1, "pcu":50, "cost":3},
 {"id":12, "thruster":"M8 thrusters", "size":"M", "speed":8, "piloting":0, "pcu":60, "cost":4},
 {"id":13, "thruster":"M10 thrusters", "size":"M", "speed":10, "piloting":0, "pcu":70, "cost":5},
 {"id":14, "thruster":"M12 thrusters", "size":"M", "speed":12, "piloting":-1, "pcu":80, "cost":6},
 {"id":15, "thruster":"L4 thrusters", "size":"L", "speed":4, "piloting":2, "pcu":60, "cost":4},
 {"id":16, "thruster":"L6 thrusters", "size":"L", "speed":6, "piloting":1, "pcu":80, "cost":6},
 {"id":17, "thruster":"L8 thrusters", "size":"L", "speed":8, "piloting":0, "pcu":100, "cost":8},
 {"id":18, "thruster":"L10 thrusters", "size":"L", "speed":10, "piloting":0, "pcu":120, "cost":10},
 {"id":19, "thruster":"H4 thrusters", "size":"H", "speed":4, "piloting":2, "pcu":80, "cost":4},
 {"id":20, "thruster":"H6 thrusters", "size":"H", "speed":6, "piloting":1, "pcu":120, "cost":6},
 {"id":21, "thruster":"H8 thrusters", "size":"H", "speed":8, "piloting":0, "pcu":140, "cost":8},
 {"id":22, "thruster":"H10 thrusters", "size":"H", "speed":10, "piloting":0, "pcu":160, "cost":10},
 {"id":23, "thruster":"G4 thrusters", "size":"G", "speed":4, "piloting":2, "pcu":120, "cost":8},
 {"id":24, "thruster":"G6 thrusters", "size":"G", "speed":6, "piloting":1, "pcu":180, "cost":12},
 {"id":25, "thruster":"G8 thrusters", "size":"G", "speed":8, "piloting":0, "pcu":240, "cost":16},
 {"id":26, "thruster":"C4 thrusters", "size":"C", "speed":4, "piloting":2, "pcu":200, "cost":8},
 {"id":27, "thruster":"C6 thrusters", "size":"C", "speed":6, "piloting":1, "pcu":300, "cost":12},
 {"id":28, "thruster":"C8 thrusters", "size":"C", "speed":8, "piloting":0, "pcu":400, "cost":16}]
`);

Tiers=JSON.parse(`
[{"id":1, "tier":1, "bpuLimiter":25, "special":0},
 {"id":2, "tier":2, "bpuLimiter":30, "special":0},
 {"id":3, "tier":3, "bpuLimiter":40, "special":0},
 {"id":4, "tier":4, "bpuLimiter":55, "special":0},
 {"id":5, "tier":5, "bpuLimiter":75, "special":0},
 {"id":6, "tier":6, "bpuLimiter":95, "special":0},
 {"id":7, "tier":7, "bpuLimiter":115, "special":1},
 {"id":8, "tier":8, "bpuLimiter":135, "special":1},
 {"id":9, "tier":6, "bpuLimiter":155, "special":1},
 {"id":10, "tier":7, "bpuLimiter":180, "special":1},
 {"id":11, "tier":8, "bpuLimiter":205, "special":2},
 {"id":12, "tier":9, "bpuLimiter":230, "special":2},
 {"id":13, "tier":10, "bpuLimiter":270, "special":2},
 {"id":14, "tier":11, "bpuLimiter":310, "special":2},
 {"id":15, "tier":12, "bpuLimiter":350, "special":3},
 {"id":16, "tier":13, "bpuLimiter":400, "special":3},
 {"id":17, "tier":14, "bpuLimiter":450, "special":3},
 {"id":18, "tier":15, "bpuLimiter":500, "special":3},
 {"id":19, "tier":16, "bpuLimiter":600, "special":4},
 {"id":20, "tier":17, "bpuLimiter":700, "special":4},
 {"id":21, "tier":18, "bpuLimiter":800, "special":4},
 {"id":22, "tier":19, "bpuLimiter":900, "special":4},
 {"id":23, "tier":20, "bpuLimiter":1000, "special":5}]
`);

Weapons=JSON.parse(`
[{"id":1, "weapon":"Chain Cannon", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"6d4", "pcu":15, "cost":10, "special":"Ripper"},
 {"id":2, "weapon":"Coilgun", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"4d4", "pcu":10, "cost":10, "special":"-"},
 {"id":3, "weapon":"Flak thrower", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"3d4", "pcu":10, "cost":5, "special":"Point (+8)"},
 {"id":4, "weapon":"Gyrolaser", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"1d8", "pcu":10, "cost":3, "special":"Broad Arc"},
 {"id":5, "weapon":"Laser net", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"2d6", "pcu":10, "cost":9, "special":"Point (+10)"},
 {"id":6, "weapon":"Light EMP cannon", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"Special", "pcu":10, "cost":8, "special":"EMP"},
 {"id":7, "weapon":"Light laser cannon", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"2d4", "pcu":5, "cost":2, "special":"-"},
 {"id":8, "weapon":"Light particle beam", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"3d6", "pcu":10, "cost":10, "special":"-"},
 {"id":9, "weapon":"Light plasma cannon", "weaponClass":"Light", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"2d12", "pcu":10, "cost":12, "special":"-"},
 {"id":10, "weapon":"High explosive missile launcher", "weaponClass":"Light", "weaponType":"Tracking", "speed":12, "range":"Long", "damage":"4d8", "pcu":10, "cost":14, "special":"Limited Fire 5"},
 {"id":11, "weapon":"Light plasma torpedo launcher", "weaponClass":"Light", "weaponType":"Tracking", "speed":14, "range":"Long", "damage":"3d8", "pcu":5, "cost":11, "special":"Limited Fire 5"},
 {"id":12, "weapon":"Light torpedo launcher", "weaponClass":"Light", "weaponType":"Tracking", "speed":16, "range":"Long", "damage":"2d8", "pcu":5, "cost":7, "special":"-"},
 {"id":13, "weapon":"Micromissile battery", "weaponClass":"Light", "weaponType":"Tracking", "speed":10, "range":"Long", "damage":"2d6", "pcu":10, "cost":5, "special":"Array, limited fire 5"},
 {"id":14, "weapon":"Tactical nuclear missile launcher", "weaponClass":"Light", "weaponType":"Tracking", "speed":10, "range":"Long", "damage":"5d8", "pcu":10, "cost":18, "special":"irradiate (low), limited fire 5"},
 {"id":15, "weapon":"Graser", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"7d10", "pcu":40, "cost":35, "special":"irradiate (medium)"},
 {"id":16, "weapon":"Gravity gun", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"6d6", "pcu":40, "cost":30, "special":"Tractor Beam"},
 {"id":17, "weapon":"Heavy EMP cannon", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"Special", "pcu":30, "cost":12, "special":"EMP"},
 {"id":18, "weapon":"Heavy laser array", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"6d4", "pcu":15, "cost":10, "special":"Array"},
 {"id":19, "weapon":"Heavy laser cannon", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"4d8", "pcu":10, "cost":15, "special":"-"},
 {"id":20, "weapon":"Heavy laser net", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Short", "damage":"5d6", "pcu":15, "cost":15, "special":"Point (+12)"},
 {"id":21, "weapon":"Maser", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"6d10", "pcu":35, "cost":22, "special":"-"},
 {"id":22, "weapon":"Particle beam", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"8d6", "pcu":25, "cost":20, "special":"-"},
 {"id":23, "weapon":"Persistent particle beam", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"10d6", "pcu":40, "cost":25, "special":"-"},
 {"id":24, "weapon":"Plasma cannon", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"5d12", "pcu":30, "cost":20, "special":"-"},
 {"id":25, "weapon":"Railgun", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"8d4", "pcu":20, "cost":15, "special":"-"},
 {"id":26, "weapon":"Twin laser", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"5d8", "pcu":15, "cost":18, "special":"-"},
 {"id":27, "weapon":"X-laser cannon", "weaponClass":"Heavy", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"8d6", "pcu":40, "cost":35, "special":"Line"},
 {"id":28, "weapon":"Heavy antimatter missile launcher", "weaponClass":"Heavy", "weaponType":"Tracking", "speed":8, "range":"Long", "damage":"10d10", "pcu":15, "cost":35, "special":"Limited Fire 5"},
 {"id":29, "weapon":"Heavy nuclear missile launcher", "weaponClass":"Heavy", "weaponType":"Tracking", "speed":10, "range":"Long", "damage":"10d8", "pcu":15, "cost":35, "special":"irradiate (medium), limited fire 5"},
 {"id":30, "weapon":"Heavy plasma torpedo launcher", "weaponClass":"Heavy", "weaponType":"Tracking", "speed":12, "range":"Long", "damage":"5d10", "pcu":10, "cost":18, "special":"Limited Fire 5"},
 {"id":31, "weapon":"Heavy torpedo launcher", "weaponClass":"Heavy", "weaponType":"Tracking", "speed":14, "range":"Long", "damage":"5d8", "pcu":10, "cost":16, "special":"Limited Fire 5"},
 {"id":32, "weapon":"Gravity cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"2d6 x 10", "pcu":40, "cost":50, "special":"Tractor Beam"},
 {"id":33, "weapon":"Mass driver", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"2d6 x 10", "pcu":25, "cost":30, "special":"-"},
 {"id":34, "weapon":"Particle beam cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"3d4 x 10", "pcu":30, "cost":30, "special":"-"},
 {"id":35, "weapon":"Persistent particle beam cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"2d10 x 10", "pcu":50, "cost":40, "special":"-"},
 {"id":36, "weapon":"Super EMP cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"Special", "pcu":45, "cost":18, "special":"EMP"},
 {"id":37, "weapon":"Super plasma cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"3d6 x 10", "pcu":45, "cost":35, "special":"-"},
 {"id":38, "weapon":"Super X-laser cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"3d4 x 10", "pcu":50, "cost":45, "special":"Line"},
 {"id":39, "weapon":"Supergraser", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"2d8 x 10", "pcu":50, "cost":35, "special":"Irridiate (high)"},
 {"id":40, "weapon":"Superlaser", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"2d4 x 10", "pcu":20, "cost":20, "special":"-"},
 {"id":41, "weapon":"Supermaser", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Long", "damage":"2d8 x 10", "pcu":40, "cost":35, "special":"-"},
 {"id":42, "weapon":"Vortex cannon", "weaponClass":"Capital", "weaponType":"Direct-Fire", "speed":0, "range":"Medium", "damage":"2d12 x 10", "pcu":55, "cost":75, "special":"Vortex"},
 {"id":43, "weapon":"Antimatter mega-missile launcher", "weaponClass":"Capital", "weaponType":"Tracking", "speed":6, "range":"Long", "damage":"4d10 x 10", "pcu":15, "cost":70, "special":"Limited Fire 5"},
 {"id":44, "weapon":"Hellfire torpedo launcher", "weaponClass":"Capital", "weaponType":"Tracking", "speed":8, "range":"Long", "damage":"2d10 x 10", "pcu":10, "cost":40, "special":"Limited Fire 5"},
 {"id":45, "weapon":"Nuclear mega-missile launcher", "weaponClass":"Capital", "weaponType":"Tracking", "speed":8, "range":"Long", "damage":"4d8 x 10", "pcu":15, "cost":60, "special":"Limited Fire 5"},
 {"id":46, "weapon":"Quantum missile launcher", "weaponClass":"Capital", "weaponType":"Tracking", "speed":12, "range":"Long", "damage":"2d8 x 10", "pcu":15, "cost":35, "special":"Limited Fire 5, quantum"},
 {"id":47, "weapon":"Solar torpedo launcher", "weaponClass":"Capital", "weaponType":"Tracking", "speed":10, "range":"Long", "damage":"2d6 x 10", "pcu":10, "cost":25, "special":"Limited Fire 5"}]
`);

Menus=JSON.parse(`
[{"id":1, "title":"powercore"},
 {"id":2, "title":"thruster"},
 {"id":3, "title":"armor"},
 {"id":4, "title":"computer"},
 {"id":5, "title":"crewQuarter"},
 {"id":5, "title":"defensiveCountermeasure"},
 {"id":5, "title":"driftEngine"},
 {"id":5, "title":"expansionBay"},
 {"id":5, "title":"security"},
 {"id":5, "title":"sensor"},
 {"id":5, "title":"shield"},
 {"id":6, "title":"weapon"}]
`);

for (item in user.parts.powercore){
    if (item!=undefined)
    PowerCores.push(user.parts.powercore[item]);
}
for (item in user.parts.thruster){
    if (item!=undefined)
    Thrusters.push(user.parts.thruster[item]);
}
for (item in user.parts.armor){
    if (item!=undefined)
    Armors.push(user.parts.armor[item]);
}
for (item in user.parts.computer){
    if (item!=undefined)
    Computers.push(user.parts.computer[item]);
}
for (item in user.parts.crewQuarter){
    if (item!=undefined)
    CrewQuarters.push(user.parts.crewQuarter[item]);
}
for (item in user.parts.defensiveCountermeasure){
    if (item!=undefined)
    DefensiveCountermeasures.push(user.parts.defensiveCountermeasure[item]);
}
for (item in user.parts.driftEngine){
    if (item!=undefined)
    DriftEngine.push(user.parts.driftEngine[item]);
}
for (item in user.parts.expansionBay){
    if (item!=undefined)
    ExpansionBays.push(user.parts.expansionBay[item]);
}
for (item in user.parts.security){
    if (item!=undefined)
    Securitys.push(user.parts.security[item]);
}
for (item in user.parts.sensor){
    if (item!=undefined)
    Sensors.push(user.parts.sensor[item]);
}
for (item in user.parts.shield){
    if (item!=undefined)
    Shields.push(user.parts.shield[item]);
}
for (item in user.parts.weapon){
    if (item!=undefined)
    Weapons.push(user.parts.weapon[item]);
}
