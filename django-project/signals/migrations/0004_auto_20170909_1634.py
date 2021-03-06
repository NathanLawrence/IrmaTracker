# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-09-09 20:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('signals', '0003_auto_20170909_1621'),
    ]

    operations = [
        migrations.AddField(
            model_name='signal',
            name='embed_code',
            field=models.TextField(blank=True, verbose_name='Embed Code'),
        ),
        migrations.AddField(
            model_name='signal',
            name='pull_quote',
            field=models.CharField(blank=True, max_length=512, verbose_name='Pull Quote'),
        ),
        migrations.AlterField(
            model_name='signal',
            name='verified',
            field=models.BooleanField(default=True, verbose_name='Verified'),
        ),
    ]
