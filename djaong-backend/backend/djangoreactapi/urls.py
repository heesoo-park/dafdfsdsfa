from django.contrib import admin
from django.urls import path, include

# 최상위 Url. 이 경우 http://localhost:8000/ 에 해당.
# http://localhost:8000/admin/으로 이동할시 관리 페이지가 나온다.
# http://localhost:8000/api/로 이동할시 post API에 존재하는 Url을 이용하여 다시 그곳에서 목적지를 찾는다.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('post.urls')),
]