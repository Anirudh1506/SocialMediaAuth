from django.urls import path,include
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import CreateUser,CreatePost

urlpatterns=[
    path('user/register',CreateUser.as_view(),name='register'),
    path('token/',TokenObtainPairView.as_view(),name='access'),
    path('token/refresh',TokenRefreshView.as_view(),name='refresh'),
    path('createPost/',CreatePost.as_view(),name='postcreate'),
    path('auth/',include('rest_framework.urls'))
]