from django.shortcuts import render, redirect
from .models import Article

# Create your views here.
def new(request):
    
    if request.method == 'POST':
        print(request.POST)
        new_article = Article.objects.create(
            title = request.POST['title'],
            category = request.POST['category'],
            content = request.POST['content'],
        )
        return redirect('list')
    return render(request, 'new.html')




def category(request, article_category):
    samecategory = Article.objects.filter(category=article_category)
    return render(request, 'category.html',
                  {'articles': samecategory,
                   'category': article_category})
    
def list(request):
    
    articles = Article.objects.all()
    
    articles_category = Article.objects.all().values_list('category', flat=True).distinct()
    
    articles_hobby_num = Article.objects.filter(category='Hobby').count()
    articles_food_11 = Article.objects.filter(category='Food').count()
    articles_programing_11 = Article.objects.filter(category='Programming').count()
    articles.filter(category = 'Hobby')
    return render(request, 'list.html', {'articles': articles,
                                         'articles_category': articles_category,
                                         'articles_hobby_num': articles_hobby_num,
                                         'articles_food_11': articles_food_11,
                                         'articles_programing_11': articles_programing_11,
                                         })

def detail(request, article_id):
    article = Article.objects.get(id=article_id)
    return render(request, 'detail.html', 
                  {'article_id':article_id,
                   'article':article,
                   })
    