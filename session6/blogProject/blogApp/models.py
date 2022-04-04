from django.db import models

# Create your models here.
class Article(models.Model):
    category = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200)

class Person(models.Model):
    name = models.CharField(max_length=10)
    address = models.TextField()
    
def __str__(self):
    return self.title