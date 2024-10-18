import { Application } from "express";
import { hookRoute } from "./routes/webhook";

export const useRoutes = function(app: Application) {
    
app.get('/dashboard', (req, res) => {
  // Admin dashboard route logic
});

app.use(hookRoute);

}
