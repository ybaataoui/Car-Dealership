from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Inquiry, Message
from Car.models import Car
    

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
        extra_kwargs = {"customer": {"read_only": True}} #we accept author when we create, "car": {"read_only": True}


class MessageSerializer(serializers.ModelSerializer):
    car_id = serializers.PrimaryKeyRelatedField(queryset=Car.objects.all(), source='car')

    class Meta:
        model = Message
        fields = ['car_id', 'name', 'email', 'phone', 'message']
