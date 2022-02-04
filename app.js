const express = require("express");
const app = express();
const sequelize = require('./utils/database');
const {addUser,findUser, updateUser, deleteUser, finderOpration, setterGetter, validations, RawQury, OneToOne, belongsTo, OneToMany,manyToMany, scopes, oneToManyPolymorphic, LazyLoading, EagerLoading, paranoid, Transations} = require('./routes');

const port = 4000;

sequelize.sync({force:false})
.then(()=>{
    console.log("yes re sync"); 
})

app.get("/", (res, req) => {
  req.send("Home page");
});

app.get("/add", addUser);
app.get("/find", findUser);
app.get("/update", updateUser);
app.get("/delete", deleteUser);
app.get("/finder", finderOpration);
app.get("/setter-getter", setterGetter);
app.get("/validations", validations);
app.get("/raw-rawqury", RawQury);
app.get("/one-to-one", OneToOne);
app.get("/belongs-to", belongsTo);
app.get("/one-to-many", OneToMany);
app.get("/many-to-many", manyToMany);
app.get("/scopes", scopes);
app.get("/one-to-many-polymorphic", oneToManyPolymorphic);
app.get("/lazy-loading", LazyLoading);
app.get("/eager-loading", EagerLoading);
app.get("/paranoid", paranoid);
app.get("/transations", Transations);

app.listen(port, () => {
  console.log(`App is listing at http://localhost:${port}`);
});
