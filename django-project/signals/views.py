# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from bakery.views import BuildableListView, BuildableDetailView

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

class EmbedFrameView(BuildableDetailView):
    model = models.Signal

    def get_object(self):
        if self.kwargs["slug"]:
            return models.Signal.objects.get(slug=self.kwargs['slug'])
        return super(EmbedFrameView, self).get_objects()

