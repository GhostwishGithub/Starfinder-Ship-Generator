from django.contrib import admin
from .models import Car, PersonnelWeaponsHeavy, PersonnelWeaponsLongarm,Tiers, Frames,PowerCores,Thrusters,Armors,Computers,CrewQuarters,DefensiveCountermeasures,DriftEngines,ExpansionBays,Security,Sensors,Shields, Weapons

# Register your models here.
admin.site.register(Car)
admin.site.register(Frames)
admin.site.register(PowerCores)
admin.site.register(Thrusters)
admin.site.register(Armors)
admin.site.register(Computers)
admin.site.register(CrewQuarters)
admin.site.register(Tiers)
admin.site.register(DefensiveCountermeasures)
admin.site.register(DriftEngines)
admin.site.register(ExpansionBays)
admin.site.register(Security)
admin.site.register(Sensors)
admin.site.register(Shields)
admin.site.register(Weapons)
admin.site.register(PersonnelWeaponsHeavy)
admin.site.register(PersonnelWeaponsLongarm)