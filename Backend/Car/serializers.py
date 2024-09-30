from rest_framework import serializers
from .models import Car, Make, CarModel

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'


class MakeSerlializer(serializers.ModelSerializer):
    class Meta:
        model = Make
        fields = ['id', 'name']

class CarModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarModel
        fields = ['id', 'name', 'make']