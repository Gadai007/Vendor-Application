const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const careerRoute = require('./routes/careerRoute')
const unblockRoute = require('./routes/unblockRoute')
const updateRoute = require('./routes/updateRoute')
const { sequelize } = require('./database/connection')


app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use('/api', careerRoute)
app.use('/api', unblockRoute)
app.use('/api', updateRoute)

sequelize.sync({ alter: true}).then(() => {
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})
