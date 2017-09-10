# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from . import models

# Register your models here.

@admin.register(models.SignalType)
class SignalTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(models.Signal)
class SignalAdmin(admin.ModelAdmin):
    date_hierarchy = 'date_time'
    list_display = ['source_user', 'date_time', 'verified', 'social_network']
    list_filter = ['types', 'verified', 'social_network']
    filter_horizontal = ['types']
    search_fields = ['source_user']
    prepopulated_fields = {'slug': ('date_time', 'source_user',)}

    fieldsets = (
        (None, {
            'fields': (
                ('date_time', 'verified'),
                'slug',
                'location',
            ),
        }),
        ('Info and Social Media',
         {
             'fields': (
                 'social_network',
                 'source_user',
                 'pull_quote',
                 'embed_code',
             ),
         }),
        ('Tagging', {
            'fields': (
                'types',
            ),
        }),
        ('Reporting Information',
         {
             'fields': (
                 'private_notes',
             ),
         }),
    )
