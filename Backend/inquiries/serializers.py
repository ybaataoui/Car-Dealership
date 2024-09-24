from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Inquiry

    

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
        extra_kwargs = {"customer": {"read_only": True}} #we accept author when we create, "car": {"read_only": True}