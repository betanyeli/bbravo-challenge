import axios from "axios";

const apiEndpoint = "https://randomuser.me/api/?results=20";

export const getData = async () => {
  try {
    const result = await axios.get(apiEndpoint);
    console.log("result", result.data.results);
    return result.data.results;
  } catch (error) {
    console.log("data error", error);
    return ["Data not found"];
  }
};

export const occupation = [
  "Frontend Dev",
  "Designer",
  "KAM",
  "TikToker",
  "Musician",
  "Product Owner",
  "CTO",
  "Data Scientist",
];

export const hobbies = [
  "dance, sing and watch Netflix",
  "travel, cooking, and watch football",
  "draw anime, drink wine and walk on the beach",
  "sleep, swim and travel",
];

export const randomizer = (arr) => {
    let result = arr[Math.floor(Math.random() * arr.length)];
    return result;
  }