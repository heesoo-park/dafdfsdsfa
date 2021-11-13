from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from collections import namedtuple

from .models import Post
from . import serializers
from . import game2vec

urls = []

# ListCreateAPIView 클래스를 상속하여 ListPost 클래스를 생성한다.
# queryset은 List를 만들 Query들의 모임이고, Seriailizer Class는 해당 Query들을 어떻게 직렬화할지 정한다.
# 이 경우 Post Query에 맞춰 미리 만들어둔 PostSerializer를 사용한다.
class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer

# 위와 동일.
class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = serializers.PostSerializer

# Api/Cal/로 들어왔을때 반환되는 클래스. 넘어온 인자에 맞춰
# DB에서 동일한 Title이 있는지 확인 후 반환한다.
# 없을시 아무것도 반환하지 않음.
class FindPost(APIView):
    
    # APIView 클래스에서 상속되어 만들어지는 함수 post
    # 프론트엔드에서 post를 요청할 경우 작동되는 함수이다.
    # request는 프론트엔드에서 백엔드로 넘기는 데이터. Dict로 구성됨.
    def post(self, request, format=None):
        print(request.data);
        """
        Return a list of all users.
        """

        
        # Request.data Dict에서 Title의 값을 얻어와 String 변수로 반환.
        # ex) 'FPS,Battle Royale,Team-based'
        string = str(request.data.get('tags'))
        tags = string.split(',')
        print(tags)
        # tag 변수에 Game2Vec을 이용한 유사도 리스트 저장
        tag = game2vec.search_tag(tags)
        print(tag)
        queryset=Post.objects.all()
        queryset1 = queryset.filter(popular_tags__icontains=tags[0])
        for x in tags:
            queryset2 = queryset.filter(popular_tags__icontains=x)
            queryset1 = queryset.intersection(queryset1, queryset2)
    
        
        
        # tag.append(image_url)
    
        for i in range(5,0,-1):
            image_url = str(game2vec.search_image(queryset1[i].URL))
            tag.append(image_url)
            
        for j in range(5,0,-1):
            tag.append(queryset1[j].URL)    
        

        # 내장함수 Response를 이용해 Promise형태로 프론트엔드로 반환
        return Response(tag)
