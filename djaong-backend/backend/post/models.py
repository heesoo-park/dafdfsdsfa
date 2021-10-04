from django.db import models


# DB 생성전 Model 선언
# Post Model의 경우 Title, Content 그리고 ID를 갖게 된다.
class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.title
    