import axios from "axios";

export default {

  getItems: function() {
    return axios.get("/api/items");
  },

  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },

  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },

  saveItem: function(bookData) {
    return axios.post("/api/items", itemData);
  }
};
