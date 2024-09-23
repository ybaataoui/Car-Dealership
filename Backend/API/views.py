from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import  AllowAny
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response




#Create a user
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

#Get user information
class UserInfoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            'username': user.username,
        })
    
# Check if the user is logged in
class CheckUserLoggedInView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # If the request reaches here, it means the user is authenticated
        return Response({
            'is_logged_in': True,
            'username': request.user.username
        })
    