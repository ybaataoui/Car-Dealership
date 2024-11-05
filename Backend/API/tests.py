from django.test import TestCase

from django.contrib.auth.models import User
from requests import Response
from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse

class UserTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.create_user_url = reverse("register")  
        self.user_info_url = reverse("user-info")      
        self.check_logged_in_url = reverse("check-user-logged-in")  

        self.user_data = {
            "username": "testuser",
            "password": "testpassword123"
        }

    def test_create_user(self):
        # Test user creation
        response = self.client.post(self.create_user_url, self.user_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(User.objects.get().username, "testuser")
        # print("User not created!")
        # return None

    def test_user_info_authenticated(self):
        # First, create and log in the user
        user = User.objects.create_user(**self.user_data)
        self.client.force_authenticate(user=user)

        response = self.client.get(self.user_info_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["username"], user.username)


    def test_user_info_unauthenticated(self):
        # Attempt to retrieve user info without logging in
        response = self.client.get(self.user_info_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_check_user_logged_in_authenticated(self):
        # Create and log in the user
        user = User.objects.create_user(**self.user_data)
        self.client.force_authenticate(user=user)

        response = self.client.get(self.check_logged_in_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(response.data["is_logged_in"])
        self.assertEqual(response.data["username"], user.username)

    def test_check_user_logged_in_unauthenticated(self):
        # Attempt to check if logged in without logging in
        response = self.client.get(self.check_logged_in_url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

