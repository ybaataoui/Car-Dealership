from django.db import models
from django.contrib.auth.models import User


class Inquiry(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="inquiries")

    def __str__(self) -> str:
        return self.title
