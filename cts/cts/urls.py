from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'cts.views.home', name='home'),
    url(r'^admin/', include(admin.site.urls)),
)
