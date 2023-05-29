import {
  ActionFunctionArgs,
  Link,
  LoaderFunctionArgs,
  Outlet,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "react-router-dom";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const projectId = Math.random().toString(36).slice(-8);
  return {
    routes: [
      ["_landing._index", "/"],
      ["_landing.about", "/about"],
      ["app", "/app"],
      ["app.projects", "/app/projects"],
      ["app_.projects.$id.roadmap", `/app/projects/${projectId}/roadmap`],
    ],
  };
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  return null;
};

export function Component() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <ul>
        {data.routes.map(([title, path]) => (
          <li key={title}>
            <Link to={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <p>root</p>
      <div style={{ margin: "1em", padding: "1em", border: "1px solid" }}>
        <Outlet />
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>Page not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
