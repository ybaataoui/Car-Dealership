from django.urls import path
from . import views

urlpatterns = [
    path("dashboard/", views.InquiryListCreate.as_view(), name="dashboard"),
    path("inquiries/delete/<int:pk>/", views.InquiryDelete.as_view(), name="delete-inquiry"),
]