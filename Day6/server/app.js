import Express from "express";
import cors from "cors"

import postRoute from "./posts/post.routes.js"
import commentRoute from "./comments/comment.routes.js"
import userRoute from "./user/user.routes.js"


const app = Express();
app.use(cors())

app.use(Express.json())

app.use("/api", postRoute)
app.use("/api", commentRoute)
app.use("/api" , userRoute)


app.listen('8000', () => {
    console.log("Server Starteds");
})