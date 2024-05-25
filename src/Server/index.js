import app from './app.js'
import {connectDB} from '../Database/db.js'
import indexroutes from '../Routes/index.routes.js'


app.use(indexroutes);

connectDB();
app.listen(4000)
console.log('Servidor en puerto', 4000)