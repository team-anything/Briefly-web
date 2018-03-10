from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfileInfo(models.Model):

    user = models.OneToOneField(User)



    def __str__(self):
        # Built-in attribute of django.contrib.auth.models.User !
        return str(self.user.username)
