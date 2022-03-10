import { useEffect } from "react";

import "./Home.scss";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/MovieApi";
import { APIKey } from "../../common/apis/MovieApiKey";

const Home = () => {
  const movieText = "Harry";
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error: ", err);
        });
      console.log("The response from API: ", response);
    };

    fetchMovies();
  }, []);

  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

export default Home;
