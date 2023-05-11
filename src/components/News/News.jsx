//Imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';

//Component
const News = (props) => {
    //Store news articles, loading status, and errors in a state
    const [news, setNews] = useState([]);
    const [axiosError, setAxiosError] = useState('');
    const [contentLoaded, setContentLoaded] = useState(false);

    //Fetch news articles from hacker news API
    useEffect(() => {
        (async function () {
            try {
                //Temp variables
                let article = {};
                let articles = [];

                //Grabs a list of recent article IDs from hacker news
                const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json`);

                //Grabs article details for the first 10 articles IDs in the data array above
                //Then places them in a temp array named articles
                for (let i = 0; i < 10; i++) {
                    article = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`);

                    articles.push(article.data);
                }

                //Sends articles from the temp array to the news state
                //Updates contentLoaded state to true once the articles are set
                setNews(articles);
                setContentLoaded(true);
            } catch (error) {
                //Sends any error details to the axiosError state which can be displayed when needed
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                    setAxiosError('Server Error');
                } else if (error.request) {
                    console.log(error.request);
                    setAxiosError('Request Error');
                } else {
                    console.log('Error', error.message);
                    setAxiosError(error.message);
                }
                console.log(error.config);
            }
        })();
    }, []);

    //JSX
    return (
        <div id="news" className="widget">
            <h2 className="widget-name">Hacker News</h2>
            <ul id="news-list">
                {
                    //Displays "Loading..." while axios is fetching the articles from hacker news
                    contentLoaded === false ? (
                        <p className="loading-text">Loading...</p>
                    ) : (
                        //Converts articles from the news state to list items for the unordered list
                        //React requires all list items to have a unique key so use the article ids
                        news.map((article) => {
                            return (
                                <li className="news-list-item" key={article.id}>
                                    <a href={article.url} target="blank">
                                        <p>{article.title}</p> <span>by {article.by}</span>
                                    </a>
                                </li>
                            );
                        })
                    )
                }
            </ul>

            {
                //Displays an error if one exists in the axiosError state
                axiosError && <p className="error-text">{axiosError}</p>
            }
        </div>
    );
};

export default News;
