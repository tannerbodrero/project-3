import axios from "axios";

export default {

  getItems: function() {
    return axios.get("/api/items");
  },

  getUserByEmail: function(email) {
    return axios.get("/api/user/" + email);
  },

  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },

  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },

  saveItem: function(itemData) {
    return axios.post("/api/items", itemData);
  }
};

