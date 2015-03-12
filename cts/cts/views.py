from django.shortcuts import render


def home(request):
	return render(request, 'index.html')


def virtualization(request):
	return render(request, 'virtualization.html')


def showcase(request):
	return render(request, 'sviframeresize.htm')


def managed_services(request):
	return render(request, 'managed-services.html')


def company(request):
	return render(request, 'company.html')