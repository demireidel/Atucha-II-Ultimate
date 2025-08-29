import dynamic from "next/dynamic";
const AtuchaViewport = dynamic(() => import("./viewport"), { ssr: false });

export default function Page() {
  return <main className="h-[100dvh] w-full"><AtuchaViewport /></main>;
}
