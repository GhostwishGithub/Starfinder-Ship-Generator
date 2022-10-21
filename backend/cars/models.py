from unittest.util import _MAX_LENGTH
from django.db import models
from authentication.models import User

# Create your models here.

class Tiers(models.Model):
    tier = models.IntegerField()
    bpuLimiter = models.IntegerField()
    special = models.IntegerField() #noting this here: this can be a single digit multiplied later on to add HP

class Frames(models.Model):
    frame = models.CharField(max_length=30)
    size = models.CharField(max_length=12)
    maneuverability = models.CharField(max_length=30)
    hp = models.IntegerField()
    increment = models.IntegerField()
    dt = models.IntegerField()
    ct = models.IntegerField()
    mounts = models.CharField(max_length=150)
    expansionBays = models.IntegerField()
    minimumCrew = models.IntegerField()
    maximumCrew = models.IntegerField()
    cost = models.IntegerField()

class PowerCores(models.Model):
    core = models.CharField(max_length=30)
    size = models.CharField(max_length=12)
    pcu = models.IntegerField()
    cost = models.IntegerField()

class Thrusters(models.Model):
    thruster = models.CharField(max_length=30)
    size = models.CharField(max_length=1)
    speed = models.IntegerField()
    piloting = models.IntegerField()
    pcu = models.IntegerField()
    cost = models.IntegerField()

class Armors(models.Model):
    armor = models.CharField(max_length=30)
    ac = models.IntegerField()
    specialTL = models.IntegerField()
    specialTD = models.IntegerField()
    cost = models.IntegerField()

class Computers(models.Model):
    computer = models.CharField(max_length=30)
    bonus = models.CharField(max_length=12)
    nodes = models.IntegerField()
    pcu = models.IntegerField()
    cost = models.IntegerField()

class CrewQuarters(models.Model):
    crewQuarters = models.CharField(max_length=10)
    cost = models.IntegerField()

class DefensiveCountermeasures(models.Model):
    defensiveCountermeasures = models.CharField(max_length=15)
    TLbonus = models.IntegerField()
    pcu = models.IntegerField()
    cost = models.IntegerField()

class DriftEngines(models.Model):
    driftEngine = models.CharField(max_length=20)
    rating = models.IntegerField()
    pcuRequirement = models.IntegerField()
    maxSize = models.CharField(max_length=12)
    cost = models.IntegerField()

class ExpansionBays(models.Model):
    expansionBay = models.CharField(max_length=50)
    pcu = models.IntegerField()
    cost = models.IntegerField()

class Security(models.Model):
    security = models.CharField(max_length=60)
    cost = models.IntegerField()
    #not done here, same as armor and drift engines

class Sensors(models.Model):
    sensors = models.CharField(max_length=36)
    range = models.CharField(max_length=12)
    modifier = models.IntegerField()
    cost = models.IntegerField()

class Shields(models.Model):
    shield = models.CharField(max_length=24)
    totalSP = models.IntegerField()
    regen = models.CharField(max_length=12)
    pcu = models.IntegerField()
    cost = models.IntegerField()

class Weapons(models.Model):
    weapon = models.CharField(max_length=48)
    weaponClass = models.CharField(max_length=12) #light, heavy, capital
    weaponType = models.CharField(max_length=12) #direct, tracking
    speed = models.IntegerField() #only applies to tracking weapons
    range = models.CharField(max_length=12)
    damage = models.CharField(max_length=12)
    pcu = models.IntegerField()
    cost = models.IntegerField()
    special = models.CharField(max_length=36)

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    make = models.CharField(max_length=30)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
