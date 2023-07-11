// error for any routes that don't exist
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
//error for any errors occurring in routes
const errorHandler = (error, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = error.message;

  if (error.name === "CastError" && error.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }
  res.status(statusCode).json({
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

export { notFound, errorHandler };
