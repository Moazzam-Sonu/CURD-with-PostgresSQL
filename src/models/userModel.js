import pool from "../config/db.js";

//get all usersService
const getAllUserServices = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

//get user by idService
const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0] ?? null;
};

//create userService
const createUserService = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
  );
  return result.rows[0];
};

// Update a userService
 const updateUserByIdService = async (id, updates) => {
  const result = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [updates.name, updates.email, id],
  );
  return result.rows[0] ?? null;
};

// Delete a userService
const deleteUserService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id],
  );
  return result.rows[0] ?? null;
};

export {
  getAllUserServices,
  createUserService,
  getUserByIdService,
  updateUserByIdService,
  deleteUserService,
};
