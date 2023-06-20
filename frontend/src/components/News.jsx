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

    return (
        <div>
            <h1>News</h1>
            {articles.map((article) => (
                <div key={article.url}>
                    <h2>{article.title}</h2>
                    <img src={article.urlToImage} alt={article.title} />
                    <p>{article.description}</p>
                    <a href={article.url}>Read more</a>
                </div>
            ))}
        </div>
    );


}
