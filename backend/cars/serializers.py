#from jmespath import search <- no idea why this is even here. Caused errors. Commented it out and things went back to normal
from rest_framework import serializers
from .models import Car
from .models import Tiers, Frames, PowerCores, Thrusters, Armors, Computers, CrewQuarters, DefensiveCountermeasures, DriftEngines, ExpansionBays, Security, Sensors, Shields, Weapons

class TiersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tiers
        fields = ['tier', 'bpuLimiter', 'special']
        depth = 1

class FramesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Frames
        fields = ['frame','size','maneuverability','hp','increment','dt','ct','mounts','expansionBays','minimumCrew','maximumCrew','cost']
        depth = 1

class PowerCoresSerializer(serializers.ModelSerializer):
    class Meta:
        model = PowerCores
        fields = ['core','size','pcu','cost']
        depth = 1

class ThrustersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Thrusters
        fields = ['thruster','size','speed','piloting','pcu','cost']
        depth = 1

class ArmorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Armors
        fields = ['armor','ac','specialTL','specialTD']
        #MISSING COST FIELD! NOT READY YET! DON'T FORGET THIS! (you're going to)
        depth = 1

class ComputersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Computers
        fields = ['computer','bonus','nodes','pcu','cost']
        depth = 1

class CrewQuartersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrewQuarters
        fields = ['crewQuarters','cost']
        depth = 1

class DriftEnginesSerializer(serializers.ModelSerializer):
    class Meta:
        model = DriftEngines
        fields = ['driftEngine','rating','pcuRequirement','maxSize']
        #MISSING COST FIELD! NOT READY YET! DON'T FORGET THIS! (you're going to)
        depth = 1

class ExpansionBaysSeralizer(serializers.ModelSerializer):
    class Meta:
        model = ExpansionBays
        fields = ['expansionBay','pcu','cost']
        depth = 1
    
class SecuritySerializer(serializers.ModelSerializer):
    class Meta:
        model = Security
        fields = ['security','cost']
        depth = 1

class SensorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sensors
        fields = ['sensors','range','modifier','cost']
        depth = 1

class ShieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shields
        fields = ['shield','totalSP','regen','pcu','cost']
        depth = 1

class WeaponsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapons
        fields = ['weapon','weaponClass','weaponType','speed','range','damage','pcu','cost','special']





# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'make', 'model', 'year', 'user_id']
        depth = 1