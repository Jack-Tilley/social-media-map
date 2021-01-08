from django.contrib.auth.models import User, Group
from .models import Comment
from rest_framework import serializers


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'content', 'created')
