import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
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

  return <p>_landing.about</p>;
}
