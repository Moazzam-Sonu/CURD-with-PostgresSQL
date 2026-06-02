//centerlize error handling
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: "Internal Server Error",
    status: 500,
    message: err.message,
 });
};