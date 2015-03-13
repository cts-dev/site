from django.shortcuts import render, redirect

from models import Prospect
from forms import ProspectForm

def home(request):
    return render(request, 'index.html')


def virtualization(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect(request.META['PATH_INFO'])

    return render(request, 'virtualization.html')


def showcase(request):
    return render(request, 'sviframeresize.htm')


def managed_services(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect(request.META['PATH_INFO'])

    return render(request, 'managed-services.html')


def company(request):
    return render(request, 'company.html')


def consulting(request):
    if request.method == 'POST':
        form = ProspectForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect(request.META['PATH_INFO'])

    return render(request, 'consulting.html')
