import AssistantSelector from "@/containers/assistantSelector";
import About from "@/containers/about";

export default function Header() {
  return (
    <header className="fixed flex justify-between w-full p-2">
      <About />
      <AssistantSelector />
    </header>
  );
}
