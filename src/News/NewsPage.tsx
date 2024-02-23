import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import { useTranslation } from "react-i18next";

function NewsPage() {
  const { t } = useTranslation();
  let category = "general";
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);

  let resultNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=0bdd2d0c24a74460944592141f67fae6`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
  };

  useEffect(() => {
    resultNews();
  }, []);

  let fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${
      page + 1
    }&apiKey=0bdd2d0c24a74460944592141f67fae6`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
  };

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length < totalResults}
      loader={<h4 className="text-center">{t('news.loading')}...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>{t('news.seenall')}</b>
        </p>
      }
    >
      <h1 className="text-3xl font-bold m-5">{t('news.title')}</h1>
      <div className="container my-3 m-5">
        <div className="row">
          {articles.map((element: any) => {
            return (
              <div className="col-md-4 m-5" key={element.url}>
                <NewsItem
                  sourceName={element.source.name}
                  content={element.content}
                  title={element.title}
                  desc={element.description}
                  imageURL={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://placehold.co/200"
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default NewsPage;
