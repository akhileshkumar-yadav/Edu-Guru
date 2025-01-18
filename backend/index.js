const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors')

const UserRouter = require('./routers/user')
const BbacollegeRouter = require('./routers/bbacollege')
const BtchcollegeRouter = require('./routers/addbtechcollege')
const AddcollegeRouter = require('./routers/addcollege')
const AdduniversityRouter = require('./routers/adduniversity')

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
}))
 app.use('/user',UserRouter)
 app.use('/admin/bbacollege',BbacollegeRouter)
 app.use('/admin/addbtechcollege',AddcollegeRouter)
 app.use('/admin/addcollege',AddcollegeRouter)
 app.use('/admin/adduniversity',AdduniversityRouter)

app.listen(port, () => {
    console.log(`server is succesfully run ${port}`);
})