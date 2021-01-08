from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Comment(models.Model):
    content = models.CharField(max_length=256, blank=False, null=False)
    created = models.DateTimeField(auto_now=True)
