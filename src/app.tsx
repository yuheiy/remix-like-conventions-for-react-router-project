import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    lazy: () => import("./root"),
    children: [
      {
        path: "/",
        lazy: () => import("./routes/_landing/route"),
        children: [
          {
            index: true,
            lazy: () => import("./routes/_landing._index/route"),
          },
          {
            path: "about",
            lazy: () => import("./routes/_landing.about/route"),
          },
        ],
      },
      {
        path: "/app",
        lazy: () => import("./routes/app/route"),
        children: [
          {
            index: true,
            lazy: () => import("./routes/app._index/route"),
          },
          {
            path: "projects",
            lazy: () => import("./routes/app.projects/route"),
          },
        ],
      },
      {
        path: "/app/projects/:id/roadmap",
        lazy: () => import("./routes/app_.projects.$id.roadmap/route"),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
