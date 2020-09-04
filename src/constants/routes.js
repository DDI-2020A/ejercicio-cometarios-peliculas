/**
 * Created by chalosalvador on 8/25/20
 */

const publicRoutes = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/registro',
  SERVICES: '/servicios',
  ABOUT: '/nosotros',
};

const privateRoutes = {
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
