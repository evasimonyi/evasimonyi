'use strict';

const API_BASE_URL = "http://api.nytimes.com/svc/search/v2/articlesearch.json"
let API_KEY = "?q=moon+landing+by+Apollo+11&page=1&sort=oldest&api-key=d0ce66e0e98e417b829cd0c22ed1f424"

const xhr = new XMLHttpRequest();
const main = document.querySelector('main');

xhr.onload = () => {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    response.response.docs.forEach(e => {
      const article = document.createElement('article');
      const links = document.createElement('a');
      links.setAttribute('href', e.web_url);
      links.innerText = e.headline.main;
      const snippet = document.createElement('div');
      snippet.innerText = e.snippet;
      const pubdate = document.createElement('div');
      pubdate.innerText = new Date(e.pub_date).toDateString();
      article.appendChild(links);
      article.appendChild(snippet);
      article.appendChild(pubdate);
      main.appendChild(article);
    });
  };
}

xhr.open('GET', `${API_BASE_URL}${API_KEY}`);
xhr.send();