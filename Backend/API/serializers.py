from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Query

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}} #we accept password when we create a user, and do not return the password when giving information about the user

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = ["id", "title", "description", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}} #we accept author when we create