# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from bakery.views import BuildableListView

from . import models

# Create your views here.

class MapPageView(BuildableListView):
    queryset = models.Signal.objects.all()
    model = models.Signal # This also means the template for this will be signal_list.html
    build_path = 'irma/map/index.html'

    def get_context_data(self, **kwargs):
        context = super(MapPageView, self).get_context_data(**kwargs)
        context['types'] = models.SignalType.objects.all()
        return context