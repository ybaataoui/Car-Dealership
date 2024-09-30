from django.urls import path
from .views import CarListCreateView, CarDetailAPIView, MakeAutocompleteView, CarModelAutocompleteView, MakeList, CarModelList

urlpatterns = [
    path("cars/", CarListCreateView.as_view(), name='car-List-create'),
    path("cars/<int:pk>/", CarDetailAPIView.as_view(), name="car-detail"),
    path("makes/", MakeList.as_view(), name="make-list"),
    path("makes/<int:make_id>/models/", CarModelList.as_view(), name="model-list"),
    path('make-autocomplete/', MakeAutocompleteView.as_view(), name="make-autocomplete" ),
    path('carmodel-autocomplete/', CarModelAutocompleteView.as_view(), name="carmodel-autocomplete" ),
    
]
