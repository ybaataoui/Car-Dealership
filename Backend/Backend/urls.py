from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserView, UserInfoView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/user/register/", CreateUserView.as_view(), name="register"),
    path("api/token/", TokenObtainPairView.as_view(), name="get_token"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="refresh"),
    path("api-auth/", include("rest_framework.urls")),
    path("api/userinfo/", UserInfoView.as_view(), name="user-info"),
    path("api/", include("inquiries.urls")),
    path("api/", include("Car.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) #this line is for sotoring pictures locally
