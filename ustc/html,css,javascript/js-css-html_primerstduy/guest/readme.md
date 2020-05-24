一个可以登录，注册，日期查询的小项目。

使用的是mysql数据库，代码中直接用了sql语言进行操作。
重新部署运行时需要调整数据库的设置。
日期查询直接写在代码中了，不需要数据库部署。

自己写的代码主要集中在sign/views.py和sign/templates中的html文件中

运行之后应当打开这个页面：	http://127.0.0.1:8000/index/这是主页面

python manage.py runserver 0.0.0.0:8000