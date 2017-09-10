# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from datetime import datetime
from geoposition.fields import GeopositionField

# Create your models here.

class SignalType(models.Model):
    name = models.CharField("Name",
                            max_length=128)
    slug = models.SlugField("Slug",
                            max_length=128)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['slug']

class Signal(models.Model):
    date_time = models.DateTimeField("Date/Time",
                                     default=datetime.now,
                                     help_text="In Eastern time.")
    location = GeopositionField()
    source_user = models.CharField("Source Username",
                            blank=True,
                            max_length=140
                            )
    verified = models.BooleanField("Verified",
                                   default=True)
    types = models.ManyToManyField(SignalType,
                                  related_name="signal",
                                  related_query_name="signals")
    pull_quote = models.CharField("Pull Quote",
                                  blank=True,
                                  max_length=512)
    embed_code = models.TextField("Embed Code",
                                  blank=True)
    private_notes = models.TextField("Private Notes",
                                     blank=True,
                                     help_text="Not showed to the public.")
    SOCIAL_NETWORK_CHOICES = (
        ('TWTR', 'Twitter'),
        ('INSTA','Instagram'),
        ('FB', 'Facebook'),
    )
    social_network = models.CharField(max_length=6,
                                      choices=SOCIAL_NETWORK_CHOICES,
                                      default='TWTR')



    def __str__(self):
        return "%s at %s" % (self.source_user, str(self.date_time))
    class Meta:
        ordering = ['-date_time']