from django.urls import path
from . import views

urlpatterns = [
    path("query/", views.QueryListCreate.as_view(), name="query-list"),
    path("query/delete/<int:pk>/", views.QueryDelete.as_view(), name="delete-query"),
]