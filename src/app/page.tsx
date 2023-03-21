import Image from "next/image";
import Answer from "@/containers/answer";
import Search from "@/containers/search";
import Header from "@/containers/header";

export default function Home() {
  return (
    <div className="w-full h-full sm:flex md:block">
      <Header />
      <main className="w-full h-full overflow-y-scroll sm:flex-grow sm:pt-8">
        <div className="flex flex-col items-center justify-center w-full overflow-y-scroll md:h-full ">
          <Image
            alt="Sharies"
            height={64}
            width={64}
            src="/logo.png"
            className="mb-4 sm:w-24 sm:h-24 md:w-32 md:h-32"
          />

          <div className="max-w-md">
            <Search />
            <Answer />
          </div>
        </div>
      </main>
    </div>
  );
}
