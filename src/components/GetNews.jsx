import { useState, useEffect } from "react";
import Card from "./Card";

const GetNews = ({ category = "top" }) => {
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://newsdata.io/api/1/news?apikey=YOUR_KEY&country=ke&category=${category}`
        );
        const data = await res.json();
        console.log(data);
        setAllNews(data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    if (category !== "top") {
      fetchNews();
    }
  }, [category]);

  return (
    <>
      {!loading && allNews.length > 0 && (
        <div className="card-container">
          {allNews.map((news) => (
            <Card key={news.id} news={news} />
          ))}
        </div>
      )}
      {loading && <div>Loading...</div>}
      {!loading && allNews.length === 0 && <div>No news available.</div>}{" "}
    </>
  );
};

export default GetNews;
