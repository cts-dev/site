from django.contrib import admin

from models import Prospect

class ProspectAdmin(admin.ModelAdmin):
    list_display = ('service_type', 
                    'business_name', 
		    'contact_name', 
                    'timestamp')

admin.site.register(Prospect, ProspectAdmin)
