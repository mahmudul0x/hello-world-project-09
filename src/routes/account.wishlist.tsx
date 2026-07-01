import { createFileRoute, Link } from "@tanstack/react-router";
import WishlistRoute from "./wishlist";

// Re-export the standalone wishlist inside account layout
export const Route = createFileRoute("/account/wishlist")({
  component: Wrapper,
});

function Wrapper() {
  const Comp = (WishlistRoute as { component?: React.ComponentType }).component;
  return Comp ? <Comp /> : <div>Loading</div>;
}
// Prevent unused imports lint
void Link;
