import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverImage, title, genres, rating, year, id }) {
  return (
    <div>
      <div>
        <img src={coverImage} alt={title} />
        <h1>
          <Link to={`/movie/${id}`}> {title}</Link>
        </h1>
        Rating : {rating} <br />
        Release Year : {year} <br />
        Genre :
        <ul style={{ marginTop: 0 }}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};
export default Movie;
