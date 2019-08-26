import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import ormGlobal from './orm-global';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (_, res) => {
    console.log(ormGlobal.connection)
    res.write('Hello World With TypeScript!');
    res.end();
})

export default app;
