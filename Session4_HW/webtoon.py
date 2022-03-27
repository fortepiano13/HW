import requests
from bs4 import BeautifulSoup


Webtoon_URL = f'https://comic.naver.com/webtoon/weekdayList?week=sat'
webtoon_html = requests.get(Webtoon_URL)
webtoon_soup = BeautifulSoup(webtoon_html.text,"html.parser")

webtoon_img_list = webtoon_soup.find("ul",{"class":"img_list"})
webtoon_list = webtoon_img_list.find_all("li")

def extract_info(webtoon_list):
    result = []
    


    for webtoon in webtoon_list:
        title = webtoon.find("dl").find("a").string
        rating = webtoon.find("div",{"class":"rating_type"}).find("strong").string
        author = webtoon.find("dd",{"class":"desc"}).find("a").string
        information = {
            'title' : title,
            'author' : author,
            'rating' : rating
        }
        result.append(information)
    return result
