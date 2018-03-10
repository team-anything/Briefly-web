from django.conf.urls import url
from basic_app import views

# SET THE NAMESPACE!
app_name = 'basic_app'

urlpatterns=[
    url(r'^register/$',views.register,name='register'),
    url(r'^user_login/$',views.user_login,name='user_login'),
    url(r'^add/$',views.add,name='add'),
    url(r'^index2/$',views.index2,name='news'),
    url(r'^summary/$',views.process,name='process'),
    url(r'^browse/$',views.browse,name='browse'),
    url(r'^show/$',views.show,name='show'),
    url(r'^remove/$',views.remove,name='remove'),
    url(r'^(?P<id>[\w-]+)/$',views.fire,name='fire'),
    url(r'^(?P<id>[\w-]+)/bookmarks$',views.bookmarks,name='bookmarks'),
]
