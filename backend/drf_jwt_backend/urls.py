"""drf_jwt_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from cars import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('authentication.urls')),
    path('api/cars/', include('cars.urls')),
    path('homepage/', include('cars.urls')),
    path('api/tiers/', views.get_tiers),
    path('api/frames/', views.get_frames),
    path('api/powercores/', views.get_powercores),
    path('api/thrusters/', views.get_thrusters),
    path('api/armors/', views.get_armors),
    path('api/computers/', views.get_computers),
    path('api/crewquarters/', views.get_crewquarters),
    path('api/driftengines/', views.get_driftengines),
    path('api/expansionbays/', views.get_expansionbays),
    path('api/security/', views.get_security),
    path('api/sensors/', views.get_sensors),
    path('api/shields/', views.get_shields),
    path('api/weapons/', views.get_weapons)
]
