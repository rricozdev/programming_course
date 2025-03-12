const app = require("./src/app");
const { conn }= require("./src/db");
const PORT = process.env.PORT ?? 3002;


conn.sync({force:false}).then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on http://localhost:${PORT}`);    
    });
})


app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send("Internal server error")    
});

