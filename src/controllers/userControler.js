import {
  getAllUserServices,
  createUserService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserService,
} from "../models/userModel.js";
//standerized response funtion
export const sendResponse = (res, statusCode, data = null, message) => {
  res.status(statusCode).json({
    status: statusCode,
    message: message,
    data: data,
  });
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const user = await createUserService(name, email);
    sendResponse(res, 201, user, "User created successfully");
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUserServices();
    sendResponse(res, 200, users, "Users retrieved successfully");
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUserByIdService(id);
    if (!user) {
      return sendResponse(res, 404, null, "User not found");
    }
    sendResponse(res, 200, user, "User retrieved successfully");
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedUser = await updateUserByIdService(id, updates);
    if (!updatedUser) {
      return sendResponse(res, 404, null, "User not found");
    }
    sendResponse(res, 200, updatedUser, "User updated successfully");
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUserService(id);
    if (!deletedUser) {
      return sendResponse(res, 404, null, "User not found");
    }
    sendResponse(res, 200, null, "User deleted successfully");
  } catch (err) {
    next(err);
  }
};
