import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  Outlet,
  useLoaderData,
} from "react-router-dom";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  return {};
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  return null;
};

export function Component() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <>
      <p>_landing</p>
      <div style={{ margin: "1em", padding: "1em", border: "1px solid" }}>
        <Outlet />
      </div>
    </>
  );
}
