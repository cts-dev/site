from django.db import models


class Prospect(models.Model):
    service_type = models.CharField(max_length=255)
    business_name = models.CharField(max_length=255)
    contact_name = models.CharField(max_length=255)
    business_email = models.CharField(max_length=255, null=True, blank=True)
    business_phone = models.CharField(max_length=255, null=True, blank=True)
    comments = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)


    def __unicode__(self):
        return self.business_name
