from rest_framework import serializers
from .models import Post


# 직렬화 클래스. REST 프레임워크에 기본 내장되어 있는 ModelSerializer를 이용한다.
# 직렬화를 이용해 프론트엔드와 백엔드가 JSON을 이용해 통신을 할 수 있게 한다.
# DB에 존재하는 Column들중, Fields에 적혀있는 Column만 이용하여 직렬화한다.
# Model의 경우 사용하게 될 DB가 Post이기 때문에 Model = Post 사용
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post