import express from "express";
import cors from 'cors';

class Server{
  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }
 
  config(){
    this.app.use(cors());
  }

  routes(){
  }
}

export default new Server().app


















// class Server {
//   app

//   constructor () {
//     this.app = express()
//     this.config()
//     this.routes()
//     this.app.listen(3000, () => {
//       console.log(`Server Running on 3000`);
//     });
//   }

//   config () {
//     this.app.use(cors())
//     this.app.use(bodyParser.urlencoded({ extended: true }))
//     this.app.use(bodyParser.json())
//     this.app.use(cookieParser())
//   }

//   routes () {
//   }
// }

// export default new Server().app
