const API_URL = "http://www.omdbapi.com/?apikey=1f42f06a";

export const search = async query => {
  let result = {};

  try {
    result = await fetch(`${API_URL}&s=${query}`);
    result = await result.json();
  } catch (e){
    console.error(e);
  }

  return result;
}

export const getItem = async id => {
  let result = {};

  try {
    result = await fetch(`${API_URL}&i=${id}`);
    result = await result.json();
  } catch (e){
    console.error(e);
  }

  return result;
}
