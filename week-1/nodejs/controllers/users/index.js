const masterlist = require("../../data/data");
const ApiResponse = require("../response/apiResponse");

/**
 * DATA
 * {
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25,
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zip": "12345"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "555-1234"
    },
    {
      "type": "work",
      "number": "555-5678"
    }
  ],
  createdAt: 2022-01-01T00:00:00.000Z,
  updatedAt: 2022-01-01T00:00:00.000Z,
  deletedAt: null
}
 */

class UsersController {
  static async getAllUsers(req, res) {
    try {
      const data = masterlist.filter((user) => user.deletedAt === null);
      return res.json(ApiResponse("Success", data));
    } catch (error) {
      return res.json(ApiResponse("Error", null, 500, true));
    }
  }

  static async getUserById(req, res) {
    try {
      const id = req.params.id;
      const data = masterlist.find(
        (user) => user.id === id && user.deletedAt === null
      );
      return res.json(ApiResponse("Success", data));
    } catch (error) {
      return res.json(ApiResponse("Error", null, 500, true));
    }
  }

  static async createUser(req, res) {
    console.log("createUser");
    // return {
    //   id: 3,
    //   name: "John Doe",
    //   email: "john.doe@example.com",
    // };
  }

  static async updateUserById(req, res) {
    console.log("updateUserById");
    // return {
    //   id: 1,
    //   name: "John Doe",
    //   email: "john.doe@example.com",
    // };
  }

  static async deleteUserById(req, res) {
    console.log("deleteUserById");
    // return {
    //   id: 1,
    //   name: "John Doe",
    //   email: "john.doe@example.com",
    // };
  }
}

module.exports = UsersController;
