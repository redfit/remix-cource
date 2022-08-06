import { Link } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { requireAdminUser } from "~/utils";

export const loader: LoaderFunction = async ({ request }) => {
  await requireAdminUser(request);
  return json({});
};

export default function AdminIndexRoute() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create new post
      </Link>
    </p>
  );
}
