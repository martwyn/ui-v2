import Answer from "@/containers/answer";
import Search from "@/containers/search";
import Logo from "@/components/logo";
import AssistantSelector from "@/containers/assistantSelector";

export default function Home() {
  return (
    <>
      <header className="fixed flex justify-end w-full p-2">
        <AssistantSelector />
      </header>
      <main className="flex flex-col items-center justify-center flex-grow w-full h-full overflow-y-scroll">
        <Logo className="w-64 mb-4 h-28" />
        <div className="max-w-md">
          <Search />
          <Answer />
        </div>
      </main>
    </>
  );
}
