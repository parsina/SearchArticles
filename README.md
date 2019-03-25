# SearchArticles
A simple "Search Article" project

This is a new implementation of Hacker News Search Client with Angular 7 as javascript framework and Angular Material as CSS framework.
In this application we fetch news from https://hn.algolia.com/api/v1/ by finding article in news topic. You can access to new implementation through https://search-articles-1.firebaseapp.com 

Hint:
There is a problem in fetching data from 'algolia'. Sometimes it returns different number of page for same search item and 
affected on the pages number represented on this app. The next and pervious bottons works fine, but because of changing in returns page, 
it shows wrong numbers on page size.
