import newsImage from "../assets/news.jpg";

const Card = ({ news }) => {
  return (
    <div className="card">
      <img src={news.image_url || newsImage} alt="" className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{news.title}</h4>
        <div className="card-text">{news.description}</div>
        <div className="muted">
          <small className="muted-text">{news.source_id}</small>
          <small className="muted-text">{news.pubDate}</small>
        </div>

        <a href={news.link} target="_blank">
          Visit Source
        </a>
      </div>
    </div>
  );
};

export default Card;
