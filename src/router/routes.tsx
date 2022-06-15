import { Home } from "./../pages";

const About = () => <div>About</div>;
const Counter = () => <div>counter</div>;
const LandingPage = () => <div>Landing Page</div>;

interface Route {
  path: string;
  element: JSX.Element;
}

export const publicRoutes: Route[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "counter",
    element: <Counter />,
  },
  {
    path: "/home",
    element: <Home />,
  },
];
