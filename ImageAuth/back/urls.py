from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import CreateUser

urlpatterns=[
    path('user/register',CreateUser.as_view(),name='register'),
    path('token/',TokenObtainPairView.as_view(),name='access'),
    path('token/refresh',TokenRefreshView.as_view(),name='refresh')
]