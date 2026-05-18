import { notFound } from "next/navigation";
import ProductPageShell from "../ProductPageShell";
import { getProduct } from "../products";

export default function Page() {
  const product = getProduct("recruit");

  if (!product) {
    notFound();
  }

  return <ProductPageShell product={product} />;
}
