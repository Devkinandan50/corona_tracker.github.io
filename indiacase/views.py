# from django.http import HttpResponse
from django.shortcuts import render

def indiindex(request):
    return render(request,'indiacase/indindex.html')



