const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/plantSchemas");
const cors = require("cors");
const bluebird = require("bluebird");

mongoose
  .connect("mongodb://localhost/27071", {
    promiseLibrary: bluebird,
    useNewUrlParser: true
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("*", cors());
app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// });

module.exports = app;
