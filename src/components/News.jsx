import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem.jsx";
import Loader from "./Spinner.jsx";
import PropTypes from "prop-types";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  },[props.category,props.country]);

  useEffect(() => {
  async function fetchData(){
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=3391c4a3fabc490d904804102c60e1f0&page=${page}&pageSize=20`;
    console.log(url);
    let data = await fetch(url);
    let parsedData = await data.json();
    setLoading(false);
    setArticles(parsedData.articles);
  }
  fetchData();
  }, [props.category,props.country,page]);

  async function fetchPreviousPage() {
    const newPage = page - 1;
    setPage(newPage);
    // let url = `https://newsapi.org/v2/everything?q=Apple&from=2023-09-01&apiKey=01c4556a49ba4b1983b2b56fb4dd6492&page=${page}&pageSize=20`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // setArticles(parsedData.articles);
  }

  async function fetchNextPage() {
    const newPage = page + 1;
    setPage(newPage);
    // let url = `https://newsapi.org/v2/everything?q=Apple&from=2023-09-01&apiKey=01c4556a49ba4b1983b2b56fb4dd6492&page=${page}&pageSize=20`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // setArticles(parsedData.articles);
  }

  return (
    <div className="container">
      <h1 className="my-3">NewsMonkey - Our Headlines</h1>
      {loading && <Loader />}
      <div className="row">
        {!loading &&
          articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={
                    article.title
                      ? article.title.slice(0, 50) + "..."
                      : "NewsMonkey - Get your daily dose of news for free!"
                  }
                  description={
                    article.description
                      ? article.description.slice(0, 100) + "..."
                      : "NewsMonkey is a news app which can be used to grab quick daily news bites. If you are interested in news, weather, politics and sports news, newsmonkey is for you."
                  }
                  url={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://www.shutterstock.com/image-vector/breaking-news-flat-modern-vector-260nw-247526794.jpg"
                  }
                  imageUrl={article.url}
                  author={article.author}
                  publishedAt={article.publishedAt}
                />
              </div>
            );
          })}

        <div className="d-flex" style={{ justifyContent: "space-between" }}>
          <button
            disabled={page <= 1}
            className="btn btn-dark my-3"
            onClick={fetchPreviousPage}
          >
            &larr;Previous
          </button>
          <button
            disabled={page >= 5}
            className="btn btn-dark my-3"
            onClick={fetchNextPage}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    </div>
  );
}

News.propTypes = {
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

News.defaultProps = {
  category: "general",
  country: "in",
};
