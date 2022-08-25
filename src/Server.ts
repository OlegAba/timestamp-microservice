import express, { Application, Response, Router } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import Routes from './api/Routes';

// https://www.youtube.com/watch?v=Gwru3BueuiE
// https://www.youtube.com/watch?v=GJwHevf2wYE

class Server {
  public app: Application;
  private routes: Router;
  private readonly port: string;

  constructor() {
    dotenv.config();
    this.app = express();
    this.routes = Router();
    this.port = process.env.PORT || '8080';
    this.routesConfig();
    this.middlewareConfig();
  }

  public start(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server running on port: ${ this.port }`);
    });
  }

  private routesConfig(): void {
    // this.routes.get('/', (_, res: Response) => {
    //   res.sendFile(__dirname + '/views/index.html');
    // });

    this.routes.use('/api', Routes);
  }

  private middlewareConfig(): void {
    this.app.use(cors({ 
      origin: 'http://localhost:3000',
      credentials: true,
      optionsSuccessStatus: 200
    }))

    if (process.env.NODE_ENV === 'production') {
      this.app.use(express.static('client/build')); 

      this.app.get('*', (_, res: Response) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
    }
    
    // this.app.use(express.static(__dirname + '/public'));

    this.app.use('/', this.routes);
  }
}

new Server().start();