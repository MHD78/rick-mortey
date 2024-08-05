import { redirect } from "next/navigation";

export default function Home() {
  redirect("/characters");

  return <main>home page</main>;
}
