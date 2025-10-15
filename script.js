// Simple script for news aggregator
const news = [
  {title: "Sample News 1", content: "This is a sample news item."},
  {title: "Sample News 2", content: "Another sample news."}
];

const newsList = document.getElementById('news-list');
news.forEach(item => {
  const div = document.createElement('div');
  div.className = 'news-item';
  div.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
  newsList.appendChild(div);
});