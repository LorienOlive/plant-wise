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
  .connect("mongodb://localhost/node-graphql", {
    promiseLibrary: bluebird,
    useNewUrlParser: true
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));

const graphqlRouter = require("./routes/graphql");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", graphqlRouter);
app.use("*", cors());
app.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema,
    rootValue: global,
    graphiql: true
  })
);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

// // Note: Create an interface

// var app = express();

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("*", cors());
// app.use(
//   "/graphql",
//   cors(),
//   graphqlHTTP({
//     schema: schema,
//     rootValue: global,
//     graphiql: true
//   })
// );

// // catch 404 and forward to error handler
// // app.use(function(req, res, next) {
// //   next(createError(404));
// // });

// // error handler
// app.use(function(
//   err: { message: any; status: any },
//   req: { app: { get: (arg0: string) => string } },
//   res: {
//     locals: { message: any; error: any };
//     status: (arg0: any) => void;
//     render: (arg0: string) => void;
//   },
//   next: any
// ) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;
