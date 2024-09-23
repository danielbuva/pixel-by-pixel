import dynamic from "next/dynamic";
import { HydrateClient } from "~/trpc/server";

const Grid = dynamic(
  () => import("~/components/canvas/Grid").then((mod) => mod.default),
  {
    loading: () => {
      return (
        <div className="absolute z-30 flex h-screen w-screen items-center justify-center bg-blue-500">
          loading
        </div>
      );
    },
    ssr: false,
  },
);

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Grid />
      </main>
    </HydrateClient>
  );
}
