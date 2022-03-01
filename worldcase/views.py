from django.shortcuts import render

def worldindex(request):
    return render(request,'worldcase/worldcaseindex.html')