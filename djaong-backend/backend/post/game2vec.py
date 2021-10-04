import os
from gensim.models import KeyedVectors
from gensim.models import Word2Vec

workpath = os.path.dirname(os.path.abspath(__file__))
# 1. Read data
loaded_model = Word2Vec.load(workpath+'\\data\\tag_w2v.model')

def search_tag(tag_dict):
    # ,을 기준으로 데이터를 리스트로 나눈다
    # ex) 'FPS,Battle Royale,Team-based' -> ['FPS','Battle Royale','Team-based']
    tags = tag_dict.split(',')
    
    # 태그가 하나만 있는경우 wv.most_similar 실행
    if(len(tags) == 1):
        model_result = loaded_model.wv.most_similar(tags[0])
        
    # 태그가 여러개 있는경우 predict_output_word를 실행
    if(len(tags) > 1):
        num = []
        model_result = loaded_model.predict_output_word(tags)
        
        # 만약 Predict_output_word로 받은 리스트에 현재 태그에 존재하는 태그가 나올시
        # Search하여 삭제한다.
        for i in range(0,10):
            for tag in tags:
                if model_result[i][0] == tag:
                    num.append(i)
        for i in range(9,-1,-1):
            if i in num:
                del model_result[i]
            
            
    return model_result

