import { Assistant } from "@/hooks/useAssistant";

interface Props {
  assistant: Assistant;
}

export default function AssistantIcon({ assistant }: Props) {
  const classes = "w-8 h-8 block rounded-full";
  switch (assistant) {
    case "default":
      return <span className={`${classes} bg-sharesies-pink`} />;
    case "grump":
      return <span className={`${classes} bg-blue-400`} />;
    case "coke":
      return <span className={`${classes} bg-orange-900`} />;
    case "pirate":
      return <span className={`${classes} bg-gray-900`} />;
    case "martwyn":
      return <span className={`${classes} bg-red-500`} />;
  }
}
