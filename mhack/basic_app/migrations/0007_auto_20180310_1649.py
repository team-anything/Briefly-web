# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-03-10 11:19
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('basic_app', '0006_auto_20180304_1038'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='latest',
        ),
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='portfolio_site',
        ),
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='profile_pic',
        ),
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='subscribed',
        ),
    ]
