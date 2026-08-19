import { redirect } from "next/navigation";

// The design has no standalone blog index — everything is reachable from the
// home page's Creations and Reviews acts.
export default function BlogIndex() {
  redirect("/#creations");
}
