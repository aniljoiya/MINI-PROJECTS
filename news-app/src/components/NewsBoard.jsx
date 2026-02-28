import React, { useEffect, useState } from 'react'
import { use } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, [category]);

    return (
    <div className="mt-5 pt-4 container">
        <h2 className="text-center py-4 display-4 display-md-3 display-lg-2">
       <b>Latest </b><span className="badge bg-danger">News</span>
        </h2>

        <div className="row g-4">
        {articles?.map((news, index) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
            <NewsItem
                title={news.title}
                description={news.description}
                url={news.url}
                src={news.urlToImage}
            />
            </div>
        ))}
        </div>
    </div>
    );
}

export default NewsBoard
