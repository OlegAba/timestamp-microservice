import express, { Application, Response, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './api/routes'

// import apiRoute from './api/routes.js';

// https://github.com/OlegAba/sneaker-bot-backend/blob/master/src/Server.ts

class Server {
  public app: Application;
  private routes: Router;
  private readonly port: string;

  constructor() {
    dotenv.config();
    this.app = express();
    this.routes = Router()
    this.port = process.env.PORT || '8080';
    this.routesConfig()
    this.middlewareConfig()
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server running on port: ${ this.port }`);
    });
  }

  private routesConfig(): void {
    this.routes.get('/', (_, res: Response) => {
      res.sendFile(__dirname + '/views/index.html');
    });

    this.routes.use('/api', routes)
  }

  private middlewareConfig(): void {
    this.app.use(cors({optionsSuccessStatus: 200}));
    this.app.use(express.static(__dirname + '/public'));
    this.app.use('/', this.routes);
  }
}

new Server().start();