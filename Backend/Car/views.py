from django.shortcuts import render
from rest_framework import generics, permissions
from rest_framework.generics import RetrieveAPIView
from .models import Car
from .serializers import CarSerializer

# Create your views here.
# class CarsListCreate(generics.CreateAPIView):
#     def get_queryset(self):
#         return Car.objects.

class CarListCreateView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]


class CarDetailAPIView(RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]