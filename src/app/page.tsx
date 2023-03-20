import Image from "next/image";
import Answer from "@/containers/answer";
import Search from "@/containers/search";
import Header from "@/containers/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow w-full h-full overflow-y-scroll">
        <Image
          alt="Sharies"
          height={64}
          width={64}
          src="/logo.png"
          className="w-32 h-32 mb-4"
        />

        <div className="max-w-md">
          <Search />
          <Answer />
        </div>
      </main>
    </>
  );
}
