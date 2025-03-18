const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

const UserRouter = require('./routers/user')
const AdminRouter = require('./routers/admin')
const AddcollegeRouter = require('./routers/addcollege')
const AdduniversityRouter = require('./routers/adduniversity')
const ReviewandratingRouter= require("./routers/Review")
const userRouter = require('./routers/userRouter');
const passRouter = require('./routers/passRouter');

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
}))
 app.use('/user',UserRouter)
 app.use('/admin/admin',AdminRouter)
 app.use('/admin/addcollege',AddcollegeRouter)
 app.use('/admin/adduniversity',AdduniversityRouter)
 app.use("/reviews",ReviewandratingRouter)
 app.use('/user', userRouter);
 app.use('/pass', passRouter); 

app.listen(port, () => {
    console.log(`server is succesfully run ${port}`);
})