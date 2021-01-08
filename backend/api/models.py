from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    communities = models.ManyToManyField(
        'Community', blank=True, related_name="communities")
    score = models.OneToOneField('Score', blank=True, related_name="score")


class Posts(models.Model):
    pass


class Comment(models.Model):
    content = models.CharField(max_length=256, blank=False, null=False)
    created = models.DateTimeField(auto_now=True)
