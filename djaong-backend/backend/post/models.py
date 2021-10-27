from django.db import models


# DB 생성전 Model 선언
# Post Model의 경우 Title, Content 그리고 ID를 갖게 된다.
class Post(models.Model):
    all_reviews = models.TextField(blank=True, max_length=200)
    name = models.TextField(blank=True, max_length=200)
    popular_tags = models.TextField(blank=True, max_length=200)
    URL=models.TextField(max_length=200)