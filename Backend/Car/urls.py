from django.urls import path
from .views import CarListCreateView, CarDetailAPIView

urlpatterns = [
    path("cars/", CarListCreateView.as_view(), name='car-List-create'),
    path("cars/<int:pk>/", CarDetailAPIView.as_view(), name="car-detail"),
]
