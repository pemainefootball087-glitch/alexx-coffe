import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const fileUrl = (path) => `${API}/media/files/${path}`;

export const fetchMedia = async () => {
  const res = await axios.get(`${API}/media`);
  return res.data.items || [];
};

export const uploadMedia = async (slot, file) => {
  const fd = new FormData();
  fd.append("slot", slot);
  fd.append("file", file);
  const res = await axios.post(`${API}/media/upload`, fd);
  return res.data;
};

export const deleteMedia = async (id) => {
  const res = await axios.post(`${API}/media/${id}/delete`);
  return res.data;
};
