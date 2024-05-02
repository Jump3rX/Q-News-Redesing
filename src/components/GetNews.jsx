import { useState, useEffect } from "react";
import Card from "./Card";

const GetNews = ({ category = "top" }) => {
  const [loading, setLoading] = useState(false); // Initialize loading state as false
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true); // Set loading state to true when fetching new news
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
        setLoading(false); // Set loading state to false after fetching news
      }
    };

    // Fetch news only if category changes
    if (category !== "top") {
      fetchNews();
    }
  }, [category]);

  return (
    <>
      {!loading &&
        allNews.length > 0 && ( // Render container only if not loading and there are news
          <div className="card-container">
            {allNews.map((news) => (
              <Card key={news.id} news={news} />
            ))}
          </div>
        )}
      {loading && <div>Loading...</div>} {/* Show loading message if loading */}
      {!loading && allNews.length === 0 && <div>No news available.</div>}{" "}
      {/* Show message if no news */}
    </>
  );
};

export default GetNews;
