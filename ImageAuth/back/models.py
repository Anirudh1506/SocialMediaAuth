from django.db import models
from django.contrib.auth.models import  User

# Create your models here.
class Posts(models.Model):
    title=models.CharField(max_length=100)
    images=models.ImageField(upload_to='images/')
    posted_on=models.DateTimeField(auto_now_add=True)
    user=models.ForeignKey(User, on_delete=models.CASCADE,related_name='posts')

    def __str__(self):
        return self.title