import axios from "axios";

axios.defaults.baseURL = "https://guest-book-test-assigment.herokuapp.com";

export const getComments = async () => {
  try {
    const res = await axios.get("/comments/get");

    return res.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return "No comments have been added yet";
    }
    if (error.response && error.response.status === 500) {
      return "Internal server error";
    }
    return "Network error";
  }
};

export const addComments = async (name, message) => {
  try {
    const res = await axios.post("/comments/add", { name, message });
    console.log(res.data);

    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const delComments = async (id) => {
  try {
    const res = await axios.delete(`/comments/delete/${id}`);

    if (res.status === 200) {
      return Number(id);
    }
  } catch (error) {
    console.log(error);
  }
};
