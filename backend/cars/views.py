from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Car, Tiers, Frames, PowerCores, Thrusters, Armors, Computers, CrewQuarters, DefensiveCountermeasures, DriftEngines, ExpansionBays, Security, Sensors, Shields, Weapons, PersonnelWeaponsHeavy, PersonnelWeaponsLongarm
from .serializers import CarSerializer, DefensiveCountermeasuresSerializer, TiersSerializer, FramesSerializer, PowerCoresSerializer, ThrustersSerializer, ArmorsSerializer, ComputersSerializer, CrewQuartersSerializer, DefensiveCountermeasures, DriftEnginesSerializer, ExpansionBaysSeralizer, SecuritySerializer, SensorsSerializer, ShieldsSerializer, WeaponsSerializer, PersonnelWeaponsHeavySerializer, PersonnelWeaponsLongarmSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_tiers(request):
    tier = Tiers.objects.all()
    serializer = TiersSerializer(tier, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_frames(request):
    frame = Frames.objects.all()
    serializer = FramesSerializer(frame, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_powercores(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PowerCoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        powercores = PowerCores.objects.all()
        serializer = PowerCoresSerializer(powercores, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_thrusters(request):
    thrusters = Thrusters.objects.all()
    serializer = ThrustersSerializer(thrusters, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_armors(request):
    armor = Armors.objects.all()
    serializer = ArmorsSerializer(armor, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_computers(request):
    computer = Computers.objects.all()
    serializer = ComputersSerializer(computer, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_crewquarters(request):
    crewquarters = CrewQuarters.objects.all()
    serializer = CrewQuartersSerializer(crewquarters, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_defensivecountermeasures(request):
    defensivecountermeasures = DefensiveCountermeasures.objects.all()
    serializer = DefensiveCountermeasuresSerializer(defensivecountermeasures, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_driftengines(request):
    driftengine = DriftEngines.objects.all()
    serializer = DriftEnginesSerializer(driftengine, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_expansionbays(request):
    expansionbay = ExpansionBays.objects.all()
    serializer = ExpansionBaysSeralizer(expansionbay, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_security(request):
    security = Security.objects.all()
    serializer = SecuritySerializer(security, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_sensors(request):
    sensors = Sensors.objects.all()
    serializer = SensorsSerializer(sensors, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_shields(request):
    shields = Shields.objects.all()
    serializer = ShieldsSerializer(shields, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_weapons(request):
    weapons = Weapons.objects.all()
    serializer = WeaponsSerializer(weapons, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_personnelweaponsheavy(request):
    personnelweaponsheavy = PersonnelWeaponsHeavy.objects.all()
    serializer = PersonnelWeaponsHeavySerializer(personnelweaponsheavy, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_personnelweaponslongarm(request):
    personnelweaponslongarm = PersonnelWeaponsLongarm.objects.all()
    serializer = PersonnelWeaponsLongarmSerializer(personnelweaponslongarm, many=True)
    return Response(serializer.data)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def make_powercores(request):
#     print(
#         'User ', f"{request.user.id} {request.user.email} {request.user.username}")
#     serializer = PowerCoresSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save(user=request.user)
#         return Response(serializer.data, status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_cars(request):
    cars = Car.objects.all()
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_cars(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        cars = Car.objects.filter(user_id=request.user.id)
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)
