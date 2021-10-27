import os
import requests
from gensim.models import Word2Vec
from bs4 import BeautifulSoup

workpath = os.path.dirname(os.path.abspath(__file__))
# 1. Read data
loaded_model = Word2Vec.load(workpath+'\\data\\tag_w2v.model')


def search_image(url):
    
    response = requests.get(url)
    
    if response.status_code == 200:
        html =  response.text
        soup = BeautifulSoup(html, 'html.parser')
        title = str(soup.select_one('.game_header_image_full'))

        title = title.split('src=')
        title[1] = title[1][1:-3]
        
        print(title[1])
        return title[1]
        
    else:
        print(response.status_code)
        
        


def search_tag(tag_dict):
    # ,을 기준으로 데이터를 리스트로 나눈다
    # ex) 'FPS,Battle Royale,Team-based' -> ['FPS','Battle Royale','Team-based']
    # 태그가 하나만 있는경우 wv.most_similar 실행
    if(len(tag_dict) == 1):
        model_result = loaded_model.wv.most_similar(tag_dict[0])
        
    # 태그가 여러개 있는경우 predict_output_word를 실행
    if(len(tag_dict) > 1):
        num = []
        model_result = loaded_model.predict_output_word(tag_dict)
        
        # 만약 Predict_output_word로 받은 리스트에 현재 태그에 존재하는 태그가 나올시
        # Search하여 삭제한다.
        for i in range(0,10):
            for tag in tag_dict:
                if model_result[i][0] == tag:
                    num.append(i)
        for i in range(9,-1,-1):
            if i in num:
                del model_result[i]
            
            
    return model_result
