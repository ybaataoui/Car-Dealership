from django.shortcuts import render
from rest_framework import generics, permissions
from .models import Make, Car, CarModel
from .serializers import CarSerializer, MakeSerlializer, CarModelSerializer

from dal import autocomplete

# Create your views here.
# class CarsListCreate(generics.CreateAPIView):
#     def get_queryset(self):
#         return Car.objects.

class CarListCreateView(generics.ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]


class CarDetailAPIView(generics.RetrieveAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]

class MakeList(generics.ListAPIView):
    queryset = Make.objects.all()
    serializer_class = MakeSerlializer
    permission_classes = [permissions.AllowAny]

class CarModelList(generics.ListAPIView):
    serializer_class = CarModelSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        make_id = self.kwargs['make_id']
        return CarModel.objects.filter(make_id=make_id)

class CarListByMake(generics.ListAPIView):
    serializer_class = CarSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        make_id = self.kwargs['make_id']
        return Car.objects.filter(make_id=make_id)
    

# This is for the admin site
class MakeAutocompleteView(autocomplete.Select2QuerySetView):
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return Make.objects.none()
        
        qs = Make.objects.all()

        if self.q:
            qs = qs.filter(name__icontains=self.q)

        return qs


class CarModelAutocompleteView(autocomplete.Select2QuerySetView):
    def get_queryset(self):
        if not self.request.user.is_authenticated:
            return CarModel.objects.none()
        
        make = self.forwarded.get('make', None)
        qs = CarModel.objects.all()

        if make:
            qs = qs.filter(make_id=make)

        if self.q:
            qs = qs.filter(name__icontains=self.q)

        return qs

