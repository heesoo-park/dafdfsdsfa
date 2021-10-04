from django.urls import path

from . import views
#from . import game2vec

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('cal/', views.FindPost().as_view()),
]