import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getComments = async () => {
  try {
    const res = await axios.get("/comments/get");

    return res.data;
  } catch (error) {
    if (error.response.status === 404) {
      return "No comments have been added yet";
    }
    if (error.response.status === 500) {
      return "Internal server error";
    }
    return "Some error";
  }
};

export const addComments = async (name, message) => {
  try {
    const res = await axios.post("/comments/add", { name, message });

    return res.data;
  } catch (error) {
    return null;
  }
};

export const delComments = async (id) => {
  try {
    const res = await axios.delete(`/comments/delete/${id}`);

    if (res.status === 200) {
      return Number(id);
    }
  } catch (error) {
    return null;
  }
};