from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Car, Tiers, Frames, PowerCores, Thrusters, Armors, Computers, CrewQuarters, DefensiveCountermeasures, DriftEngines, ExpansionBays, Security, Sensors, Shields, Weapons, PersonnelWeaponsHeavy, PersonnelWeaponsLongarm
from .serializers import CarSerializer, CustomSelectSerializer, DefensiveCountermeasuresSerializer, TiersSerializer, FramesSerializer, PowerCoresSerializer, ThrustersSerializer, ArmorsSerializer, ComputersSerializer, CrewQuartersSerializer, DefensiveCountermeasures, DriftEnginesSerializer, ExpansionBaysSerializer, SecuritySerializer, SensorsSerializer, ShieldsSerializer, WeaponsSerializer, PersonnelWeaponsHeavySerializer, PersonnelWeaponsLongarmSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_tiers(request):
    tier = Tiers.objects.all()
    serializer = TiersSerializer(tier, many=True)
    return Response(serializer.data)
    '''Custom tiers were intentionally not added, as Starfinder, as of yet, does not
    have an epic tier system'''

@api_view(['GET'])
@permission_classes([AllowAny])
def get_frames(request):
    frame = Frames.objects.all()
    serializer = FramesSerializer(frame, many=True)
    return Response(serializer.data)
    '''Custom frames were intentionally not added, due to the workload involved.
    All ships should be able to fit within the pre-existing frame styles'''

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_powercores(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PowerCoresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        powercores = PowerCores.objects.all()
        serializer = PowerCoresSerializer(powercores, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_thrusters(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ThrustersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':    
        thrusters = Thrusters.objects.all()
        serializer = ThrustersSerializer(thrusters, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_armors(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ArmorsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        armor = Armors.objects.all()
        serializer = ArmorsSerializer(armor, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_computers(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ComputersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        computer = Computers.objects.all()
        serializer = ComputersSerializer(computer, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_crewquarters(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CrewQuartersSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':    
        crewquarters = CrewQuarters.objects.all()
        serializer = CrewQuartersSerializer(crewquarters, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_defensivecountermeasures(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = DefensiveCountermeasuresSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        defensivecountermeasures = DefensiveCountermeasures.objects.all()
        serializer = DefensiveCountermeasuresSerializer(defensivecountermeasures, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_driftengines(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = DriftEnginesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        driftengine = DriftEngines.objects.all()
        serializer = DriftEnginesSerializer(driftengine, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_expansionbays(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ExpansionBaysSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        expansionbay = ExpansionBays.objects.all()
        serializer = ExpansionBaysSerializer(expansionbay, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_security(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = SecuritySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        security = Security.objects.all()
        serializer = SecuritySerializer(security, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_sensors(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = SensorsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        sensors = Sensors.objects.all()
        serializer = SensorsSerializer(sensors, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_shields(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ShieldsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        shields = Shields.objects.all()
        serializer = ShieldsSerializer(shields, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_weapons(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = WeaponsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        weapons = Weapons.objects.all()
        serializer = WeaponsSerializer(weapons, many=True)
        return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_personnelweaponsheavy(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PersonnelWeaponsHeavySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        personnelweaponsheavy = PersonnelWeaponsHeavy.objects.all()
        serializer = PersonnelWeaponsHeavySerializer(personnelweaponsheavy, many=True)
        return Response(serializer.data)
        #
        '''It should be noted that the addition of custom weapons here is a bit 
        outside the scope of this program; which is to say that if a custom weapon
        is being added here, then that weapon is available to player characters as
        well. While it is possible to make a longarm or heavy weapon dedicated to
        inner-ship defense, it is not advised due to the implications. This was
        instated merely to ensure a passing grade in my project.'''

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_personnelweaponslongarm(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PersonnelWeaponsLongarmSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        personnelweaponslongarm = PersonnelWeaponsLongarm.objects.all()
        serializer = PersonnelWeaponsLongarmSerializer(personnelweaponslongarm, many=True)
        return Response(serializer.data)
        '''It should be noted that the addition of custom weapons here is a bit 
        outside the scope of this program; which is to say that if a custom weapon
        is being added here, then that weapon is available to player characters as
        well. While it is possible to make a longarm or heavy weapon dedicated to
        inner-ship defense, it is not advised due to the implications. This was
        instated merely to ensure a passing grade in my project.'''

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_customselect(request):
    print('User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CustomSelectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        personnelweaponslongarm = CustomSelectSerializer.objects.all()
        serializer = CustomSelectSerializer(personnelweaponslongarm, many=True)
        return Response(serializer.data)

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
