# from django.test import TestCase
# from django.urls import reverse
# from rest_framework import status
# from rest_framework.test import APITestCase, APIClient
# from django.contrib.auth.models import User
# from .models import Inquiry, Message
# from django.utils import timezone
# from Car.models import Car, Make, CarModel
# import json

# class InquiryViewTests(APITestCase):
    
#     def setUp(self):
#         # Create a test user
#         self.user = User.objects.create_user(username='testuser', password='testpassword')
#         self.client = APIClient()
#         self.client.login(username='testuser', password='testpassword')

#         # Create a test car
#         self.make = Make.objects.create(name="Toyota")
#         self.car_model = CarModel.objects.create(name="Camry", make=self.make)
#         self.car = Car.objects.create(car_title="Toyota Camry", make=self.make, model=self.car_model,  year=2015, price = 15000, miles=80000, passengers=5,
#                                       mileage=22, created_date=timezone.now())

#         # Define URL paths for each view
#         self.inquiry_list_create_url = reverse('dashboard')
#         self.inquiry_delete_url = lambda inquiry_id: reverse('inquiry-delete', args=[inquiry_id])
#         self.create_inquiry_url = reverse('create-inquiry')
        

#     def test_inquiry_list_create_view(self):
#         # Verify that the user is logged in
#         login_success = self.client.login(username='testuser', password='testpassword')
#         self.assertTrue(login_success, "Login failed")

#         # Test creating a new inquiry
#         data = {
#             'car': self.car.id,
#             'first_name': 'John',
#             'last_name': 'Doe',
#             'customer_need': 'Information',
#             'city': 'Test City',
#             'state': 'Test State',
#             'email': 'johndoe@example.com',
#             'phone': '1234567890',
#             'message': 'Interested in the car.'
#         }
#         response = self.client.post(self.inquiry_list_create_url, data, format='json')
      
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)

#         # Test listing inquiries for authenticated user
#         response = self.client.get(self.inquiry_list_create_url)
#         self.assertEqual(response.status_code, status.HTTP_200_OK)
#         self.assertEqual(len(response.data), 1)  # Expecting 1 inquiry in the response


#     # def test_inquiry_delete_view(self):
#     #     # Create a new inquiry
#     #     inquiry = Inquiry.objects.create(
#     #         customer=self.user,
#     #         car=self.car,
#     #         first_name='John',
#     #         last_name='Doe',
#     #         customer_need='Information',
#     #         city='Test City',
#     #         state='Test State',
#     #         email='johndoe@example.com',
#     #         phone='1234567890',
#     #         message='Interested in the car.'
#     #     )
#     #     # Delete the inquiry
#     #     response = self.client.delete(self.inquiry_delete_url(inquiry.id))
#     #     self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

#     # def test_create_inquiry_view(self):
#     #     # Test creating an inquiry via the API view with POST data
#     #     data = {
#     #         'car_id': self.car.id,
#     #         'first_name': 'Jane',
#     #         'last_name': 'Doe',
#     #         'customer_need': 'Details',
#     #         'city': 'Sample City',
#     #         'state': 'Sample State',
#     #         'email': 'janedoe@example.com',
#     #         'phone': '0987654321',
#     #         'message': 'Would like more details about the car.'
#     #     }
#     #     response = self.client.post(self.create_inquiry_url, data, format='json')
#     #     self.assertEqual(response.status_code, status.HTTP_200_OK)
#     #     self.assertEqual(response.data['message'], 'Inquiry created successfully!')

#     # def test_create_message_view(self):
#     #     # Test creating a new message
#     #     data = {
#     #         'subject': 'Test Message',
#     #         'content': 'This is a test message.',
#     #         'car_id': self.car.id
#     #     }
#     #     response = self.client.post(self.create_message_url, data, format='json')
#     #     self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#     #     self.assertEqual(Message.objects.count(), 1)
#     #     message = Message.objects.first()
#     #     self.assertEqual(message.subject, 'Test Message')


