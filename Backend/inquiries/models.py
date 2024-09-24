from django.db import models
from django.contrib.auth.models import User
from Car.models import Car


class Inquiry(models.Model):
    customer = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    car = models.ForeignKey(Car, on_delete=models.CASCADE, null=False)
    # car_title = models.CharField(max_length=255)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    customer_need = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15, null=True, blank=True)
    message = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True) #, auto_now_add=True

    def __str__(self):
        return f"Inquiry from {self.first_name} {self.last_name} for {self.car.car_title if self.car else 'Unknown Car'}"

