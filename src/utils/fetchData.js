export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
  try {
    
    const response = await fetch(url, options);

    if (!response.ok) throw new Error("Data fectch Error Occured");

    const data = await response.json();
    console.log(data)
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
