import axios from "axios";

export default {

  getItems: function() {
    return axios.get("/api/items");
  },

  getItemsByName: function(name) {
    return axios.get({
      url: "/api/user/" + name,
      headers: {
        
      }

    }
      );
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
