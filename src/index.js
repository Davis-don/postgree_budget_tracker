import express from 'express'
const app=express();
import budgetRouter from './Routes/budget.routes.js'

app.use(express.json())


app.use('/budget',budgetRouter)



app.listen(4000,()=>{
    console.log('listening on port 4000');
})