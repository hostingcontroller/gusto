import process from "node:process";
import express, { Request, Response, Application } from "express";
import * as routes from "./router.ts";
import { App } from "./services/examples.ts";

const app: Application = express();
app.use(express.json());
// prettier ignore
app.use(express.urlencoded({ extended: true }));
app.get("/404",(req:Request, res:Response)=>{

  res.json(`Ooops! Not found.`);
 });

routes.useRoutes(app);

app.use("/*",(req:Request,res:Response)=>{
  res.redirect("/404");
});


function exitHandler(signal) {
  console.log(`Received ${signal}. Exiting...`);
 // DBInstance.DestroyPool();
  // closeWSConnection();
  // child.kill('SIGINT');
}
process.on("SIGINT",  exitHandler);
process.on("SIGTERM", exitHandler);
process.on("SIGKILL", exitHandler);
process.on("EXIT", exitHandler);
process.on('uncaughtException', ()=>{})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
App();