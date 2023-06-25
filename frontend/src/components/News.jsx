//news component using google news api to feature news articles
//on formerly incarcerated people

import { useState, useEffect } from "react"; import CurrentUserContext from "../contexts/current-user-context";


export default function News() {
    //fetch news articles from google news api
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(
            "https://newsapi.org/v2/everything?q=formerly%20incarcerated%20people&sortBy=popularity&apiKey=7b762665a8f54e6faaab6f813aeee614"
        )
            .then((response) => response.json())
            .then((data) => setArticles(data.articles));
    }, []);
            console.log(articles);
    return (
      <div className="middle-item">
        <h1>News</h1>
        {articles.map((article) => (
          <div key={article.url} className="blog-card">
            <div className="blog-info">
              <h3>{article.title}</h3>
              <h5>{article.author}</h5>
              <p className="blog-description">{article.description}</p>
              <a className="read-btn" href={article.url}>Read more</a>
            </div>
            <div
              style={{ backgroundImage: `url(${article.urlToImage})` }}
              src={article.urlToImage}
              className="card-img"
              alt={article.title}
            ></div>
          </div>
        ))}
      </div>
    );


}
