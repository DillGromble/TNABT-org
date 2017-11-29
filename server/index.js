require('newrelic')
const app = require('./app')
require('../db/index')

const PORT = process.env.PORT || 8080
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`) })
