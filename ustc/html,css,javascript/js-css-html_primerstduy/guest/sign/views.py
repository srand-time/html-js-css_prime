# -*- coding: UTF-8 -*-
from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
import MySQLdb as mysqldb
from django.conf import settings




# Create your views here.
def index(request):
    return render(request,"index.html")

def login(request):
    return render(request,"login.html")

def signup(request):
    return render(request,"signup.html")    

def login_action(request):
    if request.method=="POST":
        username=request.POST.get("username","")
        password=request.POST.get("password","")
        conn = mysqldb.connect(host='localhost', user='root', passwd=settings.GPASSWORD, port=3306, charset='utf8')
        conn.select_db(settings.DATABASENAME)
        cur = conn.cursor()
        cur.execute("select passwd from users where username = '%s'"%(username))
        password_expected=cur.fetchone()[0]
        #print(password_expected)
        #if username =="test" and password =="123456":
        if password == password_expected:
            response=HttpResponseRedirect("/login_success/")
            #response.set_cookie("user",username,3600)
            request.session["user"]=username
            settings.GLOBAL_FLAG=1
            return response
        else:
            return render(request,"login.html",{"error":"用户名或密码错误"})

def login_success(request):
    #username=request.COOKIES.get("user","")
    username=request.session.get("user","")
    return render(request,"login_success.html",{"user":username})

def signup_action(request):
    if request.method=="POST":
        username=request.POST.get("username",'')
        password=request.POST.get("password",'')
        conn = mysqldb.connect(host='localhost', user='root', passwd=settings.GPASSWORD, port=3306, charset='utf8')
        conn.select_db(settings.DATABASENAME)
        cur_1 = conn.cursor()
        cur_1.execute("select count(*) from users where username='%s'"%(username))
        result = cur_1.fetchone()
        if result[0]:
            return render(request,"signup.html",{"error":"用户名已存在"})
        else:
            cur = conn.cursor()
            cur.execute("insert into users(username,passwd) VALUES (%s,%s)",(username,password))
            return render(request,"signup_success.html",{"user":username})

def query_action(request):
    if settings.GLOBAL_FLAG == 0:
        return render(request,"index.html",{"result":"还未登录，请先登录"})
    if settings.GLOBAL_FLAG == 1:
        m=request.POST.get("MONTH",'')
        d=request.POST.get("DAY",'')
        if m == '10' and d == '1':
            return render(request,"index.html",{"result":"国庆节"})
        elif m == '1' and d == '1':
            return render(request,"index.html",{"result":"元旦"})
        elif m == '12' and d == '5':
            return render(request,"index.html",{"result":"圣诞节"})
        else:
            return render(request,"index.html",{"result":"今天不过节"})

def quit_action(request):
    settings.GLOBAL_FLAG = 0
    return render(request,"index.html")