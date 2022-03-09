/**
 * Creating a new instance of axios with a custom config.
 */

import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});
