const userModel = require("../models/userModel");

const getAll = async (req, res) => {
    try {
        const users = await userModel.getAll();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to retrieve users" });
    }
};
const getUserById = async (req, res) => { 
    const { id } = req.params; 
    try {
        const user = await userModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to retrieve user" });
    }
};
const createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const createdUser = await userModel.createUser({ username, email, password, role });
        return res.status(201).json(createdUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to create user" });
    }
}

const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.updateUser(req.params.id, req.body);
        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update user" });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userModel.deleteUser(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete user" });
    }
};

module.exports = {
    getAll,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}