from django.shortcuts import render

def index(request):
    return render(request, 'jsframework/base.html')

def page2(request):
    return render(request, 'jsframework/base.html')
