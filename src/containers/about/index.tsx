"use client";

import Modal from "@/components/modal";
import QuestionMarkIcon from "@/svgs/questionMark.svg";
import Link from "next/link";
import { useState } from "react";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModalOpen = () => setModalOpen(!modalOpen);
  return (
    <>
      <QuestionMarkIcon
        className="w-8 h-8 cursor-pointer hover:text-sharesies-pink"
        onClick={toggleModalOpen}
      />
      {modalOpen && (
        <Modal onClose={toggleModalOpen} className="max-w-md">
          <h2 className="mb-2 text-xl">What is this?</h2>
          <p className="mb-2 text-sm">
            Martwyn is an AI assistant that has been given all the content
            available on the Sharesies website as well as their Intercom help
            articles.
          </p>
          <p className="mb-2 text-sm">
            Going to be honest, it&apos;s not very accurate. Sometimes
            you&apos;ll be blown away at how it knows things, but most of the
            time it&apos;s just straight up talking bullshit to you.
          </p>
          <p className="mb-2 text-sm">
            This has no affiliation with Sharesies at all. It was built by{" "}
            <Link href="https://twitter.com/jamesmacfie" target="_blank">
              James Macfie
            </Link>{" "}
            as a lark.
          </p>
          <p className="mb-4 text-sm">
            All source code can be found on{" "}
            <Link
              href="https://github.com/orgs/martwyn/repositories?type=source"
              target="_blank"
            >
              Github
            </Link>{" "}
            in the v2 repositories.
          </p>
        </Modal>
      )}
    </>
  );
}
