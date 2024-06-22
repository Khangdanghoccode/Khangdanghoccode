const app = require('./src/app');
require('dotenv').config();
const router = require('./src/routers/router');
const PORT = process.env.PORT || 8080
// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/', router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
