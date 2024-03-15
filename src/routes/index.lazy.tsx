import { IndexPage } from "@/components/IndexPage";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <IndexPage />
      <Outlet />
    </>
  );
}
