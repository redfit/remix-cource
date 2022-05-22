import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  const posts = await getPosts();
  return json({ posts });
};

export default function PostsRoute() {
  const { posts } = useLoaderData();
  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post) => (
        <li key={post.slug} className="list-none">
          <Link to={post.slug} className="text-blue-600 underline">
            {post.title}
          </Link>
        </li>
      ))}
    </main>
  );
}
