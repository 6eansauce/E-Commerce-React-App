import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  const displayRating = () => {
    let stars = [];
    let floorRating = Math.floor(rating);

    for (let i = 0; i < floorRating; i++) stars.push("full");

    if (rating % 1 >= 0.5) stars.push("");

    stars = stars.map((star, index) =>
      star === "full" ? (
        <FontAwesomeIcon icon="star" key={index} />
      ) : (
        <FontAwesomeIcon icon="star-half-alt" key={index} />
      ),
    );

    return stars;
  };

  return <div className="book__ratings">{displayRating()}</div>;
};

export default Rating;
