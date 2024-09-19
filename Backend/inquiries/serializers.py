from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Inquiry

    

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ["car_id", "car_title", "user_id", "first_name", "last_name", "customer_need", "city", "state","email", "phone","message","author"]
        extra_kwargs = {"author": {"read_only": True}} #we accept author when we create