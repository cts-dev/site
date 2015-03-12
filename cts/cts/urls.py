from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    url(r'^$', 'cts.views.home', name='home'),
    url(r'^virtualization/', 'cts.views.virtualization', name='virtualization'),
    url(r'^showcase/', 'cts.views.showcase', name='showcase'),
    url(r'^managed-services/', 'cts.views.managed_services', name='managed_services'),
    url(r'^company/', 'cts.views.company', name='company'),
    url(r'^admin/', include(admin.site.urls)),
)
