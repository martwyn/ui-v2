import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export type Assistant = "default" | "pirate" | "child" | "coke" | "martwyn";
export type AssistantDetails = {
  name: string;
  icon: string;
  description: string;
};

const assistantAtom = atomWithStorage<Assistant>("assistant", "default");
export const allAssistants: { [key in Assistant]: AssistantDetails } = {
  default: {
    name: "Sharies",
    description:
      "A enthusiastic Sharesies employee who is always eager to help.",
    icon: "sharesies",
  },
  pirate: {
    name: "Pirate Joe",
    description:
      "A swashbuckling pirate who happens to be a financially savvy user of Sharesies.",
    icon: "pirate",
  },
  child: {
    name: "Little Tommy",
    description:
      "A young child who is super clued up about Sharesies and thinks it's the bee's knees.",
    icon: "child",
  },
  coke: {
    name: "Coca-cola shill",
    description:
      "A Coca-cola employee who snuck into Sharesies. They use the Sharesies knowledge base to help but, ultimately, they just want to sell more Coke.",
    icon: "coke",
  },
  martwyn: {
    name: "Martwyn",
    description:
      "A software engineer at Sharesies who knows all about how Sharesies works as well as the technology that runs it.",
    icon: "martwyn",
  },
};

export default function useAssistant() {
  const [assistant, setAssistant] = useAtom(assistantAtom);
  return { assistant, setAssistant };
}
