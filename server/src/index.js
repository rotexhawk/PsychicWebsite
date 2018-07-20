import express from 'express';
import config from './config/';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import graphqlApp from './routes/graphql';

const app = express();

app.use(express.static(path.join(process.cwd(), '..', 'public')));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

// app.get('/', function(request, response) {
//     response.render('index');
// });

app.use('/', graphqlApp);

app.listen(config.port, () => console.log(`App listening on  localhost:${config.port}`));
