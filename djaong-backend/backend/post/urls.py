from django.urls import path


from . import views
from . import game2vec

# URL에 따라 View를 반환한다.
# /api/ 일 경우, ListPost 반환
# /api/pk(임의 int) 일 경우, DetailPost 반환 
# /api/cal 일 경우, FindPost 반환
urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('cal/', views.FindPost().as_view()),
]