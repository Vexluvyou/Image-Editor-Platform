import express from 'express';
import Route from './config/routes/route.js';
import MyEnvironment from './core/environment.js';
import cors from 'cors';

const app = express();
const route = new Route(app);

app.use(express.json());
app.use(cors({
  origin: "*", // or use "*" to allow all origins (less secure)
  credentials: true
}));

route.defineRoutes();

app.listen(MyEnvironment.Port, () => {
  console.log(`Server is running on http://localhost:${MyEnvironment.Port}`);
});
