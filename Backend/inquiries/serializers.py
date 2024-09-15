from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Inquiry

    

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = ["id", "title", "description", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}} #we accept author when we create