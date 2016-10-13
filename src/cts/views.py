import mimetypes

from django.shortcuts import render, redirect
from django.core.mail import send_mail

from models import Prospect
from forms import ProspectForm


def mail(request):
    service_type = request.POST.get('service_type', '')
    business_name = request.POST.get('business_name', '')
    business_contact = request.POST.get('contact_name', '')
    business_phone = request.POST.get('business_phone', '')
    business_email = request.POST.get('business_email', '')
    subject = 'Request for service from cornerstonets.net'
    message = ('Service Requested: {}\r\n'.format(service_type)+
               'Business Name: {}\r\n'.format(business_name)+
               'Business Contact: {}\r\n'.format(business_contact)+
               'Business Phone: {}\r\n'.format(business_phone)+
               'Business Email: {}\r\n'.format(business_email))
    send_as = 'info@cornerstonets.net'
    send_mail(subject, message, send_as, [
        'kristina.shaffer@cornerstonets.net',
        'gary.shaffer@cornerstonets.net'
    ])


def home(request):
    return render(request, 'index.html')


def virtualization(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            mail(request)
            return redirect(request.META['PATH_INFO'])

    return render(request, 'virtualization.html')


def nimble(request):
    mimetypes.add_type("image/svg+xml", ".svg", True)
    mimetypes.add_type("image/svg+xml", ".svgz", True)

    return render(request, 'nimble.html')


def showcase(request):
    return render(request, 'sviframeresize.htm')


def managed_services(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            mail(request)
            return redirect(request.META['PATH_INFO'])

    return render(request, 'managed-services.html')


def company(request):
    return render(request, 'company.html')


def contact(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            mail(request)
            return redirect(request.META['PATH_INFO'])

    return render(request, 'contact.html')


def consulting(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            mail(request)
            return redirect(request.META['PATH_INFO'])

    return render(request, 'consulting.html')
