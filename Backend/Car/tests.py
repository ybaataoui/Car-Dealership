from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from django.utils import timezone
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Make, Car, CarModel
from .serializers import CarSerializer, MakeSerlializer, CarModelSerializer
import os

class CarViewTests(APITestCase):
    
    def setUp(self):
        # Create test data for Make, Car, and CarModel
        self.make = Make.objects.create(name="Toyota")
        self.car_model = CarModel.objects.create(name="Camry", make=self.make)
        self.car = Car.objects.create(car_title="Toyota Camry", make=self.make, model=self.car_model,  year=2015, price = 15000, miles=80000, passengers=5,
                                      mileage=22, created_date=timezone.now())


    def test_car_list_create_view(self):
        url = reverse('car-list-create')

       # Load image from the file system
        image_path = r'C:\Users\ybaataoui\Desktop\Python\Projects\Car-Dealership\Backend\media\photos\2024\10\02\camry1.JPG'        
        with open(image_path, 'rb') as img_file:
            car_photo = SimpleUploadedFile(
                name='camry1.jpg',
                content=img_file.read(),
                content_type='image/jpeg'
            )

        

        # Expanded car data including car_photo and features
        new_car_data = {
            "car_title": "Toyota Corolla",
            "state": "CA",
            "city": "Los Angeles",
            "color": "Blue",
            "year": 2019,
            "condition": "New",
            "price": 18000,
            "description": "A reliable and fuel-efficient car.",
            "body_style": "Sedan",
            "engine": "2.0L I4",
            "transmission": "Automatic",
            "interior": "Black",
            "miles": 15000,
            "doors": "4",
            "passengers": 5,
            "vin_no": "1HGBH41JXMN109186",
            "mileage": 30,
            "fuel_type": "Gasoline",
            "no_of_owners": "1",
            "is_featured": False,
            "make": self.make.id,  # ForeignKey field
            "model": self.car_model.id,  # ForeignKey field
            "created_date": timezone.now(),
            "car_photo": car_photo,
            "features": ['Cruise Control','Audio Interface'],  # Add any IDs if features are ManyToManyField
        }

        response = self.client.post(url, new_car_data, format='multipart')  # Use 'multipart' for file uploads
        # print(response.data)  # Debug line to check response errors if any

        # Verify the correct status code
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Car.objects.count(), 2)
        

    def test_car_detail_view(self):
        # Test retrieving a specific car by ID
        url = reverse('car-detail', args=[self.car.id])  
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['car_title'], "Toyota Camry")

    def test_make_list_view(self):
        # Test listing all makes
        url = reverse('make-list')  
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), Make.objects.count())

    def test_car_model_list_view(self):
        # Test listing car models by make
        url = reverse('model-list', args=[self.make.id])  
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), CarModel.objects.filter(make=self.make).count())

    def test_make_autocomplete_view(self):
        # Create a test user
        test_user = User.objects.create_user(username='testuser', password='password')

        # Use the test user for login
        self.client.force_login(test_user)  # Correctly mock user login for testing

        url = reverse('make-autocomplete')
        response = self.client.get(url, {'q': 'Toy'})
        
        # Verify the response is 200 OK and contains expected data
        self.assertEqual(response.status_code, 200)
        # Convert response to JSON
        response_json = response.json()

        # Adjust the assertion to use the parsed JSON data
        self.assertTrue(any("Toyota" in make['text'] for make in response_json['results']))

    def test_car_model_autocomplete_view(self):
         # Create a test user
        test_user = User.objects.create_user(username='testuser', password='password')

        # Use the test user for login
        self.client.force_login(test_user)  

        url = reverse('carmodel-autocomplete') 
        response = self.client.get(url, {'q': 'Cam', 'forwarded[make]': self.make.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_json = response.json()
        self.assertTrue(any("Camry" in model['text'] for model in response_json['results']))

