from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from .serializers import UserSerial,PostSerial
from .models import Posts
# Create your views here.

class CreateUser(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=UserSerial
    permission_classes=[AllowAny]


class CreatePost(generics.ListCreateAPIView):
    permission_classes=[AllowAny]
    serializer_class=PostSerial
    queryset=Posts.objects.all()
    
    
    

        