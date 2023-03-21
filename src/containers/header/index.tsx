import AssistantSelector from "@/containers/assistantSelector";
import About from "@/containers/about";

export default function Header() {
  return (
    <header className="flex justify-between w-full p-2 md:fixed">
      <About />
      <AssistantSelector />
    </header>
  );
}
