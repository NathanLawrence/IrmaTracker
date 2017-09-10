# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-09-09 19:59
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import geoposition.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Signal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField(default=datetime.datetime.now, help_text='In Eastern time.', verbose_name='Date/Time')),
                ('location', geoposition.fields.GeopositionField(max_length=42)),
            ],
        ),
    ]
