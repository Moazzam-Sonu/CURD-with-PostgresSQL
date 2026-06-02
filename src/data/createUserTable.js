import pool from "../config/db.js";

const createUserTable = async () => {
    try {
        const query = ` CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT NOW()
        )`;
        await pool.query(query);
        console.log("User table created successfully");
    } catch (error) {
        console.error("Error creating user table:", error);
    }
};

export default createUserTable;