import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import MainHeader, { links as MainHeaderLinks } from "./components/MainHeader";

import mainStyle from "./styles/main.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainHeader />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <div className="catchBoundary">Woah!! Something unexpected happened</div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: mainStyle }, ...MainHeaderLinks()];
}
