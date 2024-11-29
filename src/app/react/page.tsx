"use client";
import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Reactblog = () => {
  const [comments, setcomments] = useState("");
  const [commentList, setcommentList] = useState<string[]>([]);
  const [feedback, setfeedback] = useState("");
  const maxChars = 200;

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcomments(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comments.trim()) {
      setcommentList([...commentList, comments]);
      setcomments("");
      setfeedback("Comment submitted successfully");
      setTimeout(() => setfeedback(""), 3000);
    }
  };
  return (
    <>
      <div className=" flex flex-col  bg-gradient-to-b to-white from-sky-400 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary">
          Why React is a Popular Choice for Web Development
        </h1>
        <Image
          src={"/images/React.png"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
          React, developed by Facebook (now Meta) in 2013, has quickly become
          one of the most popular JavaScript libraries for building user
          interfaces, especially single-page applications (SPAs). Its ability to
          create fast, interactive, and scalable web applications has led to
          widespread adoption by developers and large companies alike. But what
          makes React so popular? Let’s explore its key features and advantages.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">
            1. Component-Based Architecture
          </h1>
          <p className="mt-5 text-sm md:text-base">
            One of the core concepts that makes React powerful is its
            component-based architecture. In React, the user interface is broken
            down into small, reusable components. Each component is responsible
            for rendering a small part of the UI and managing its own state.
            This modular approach makes it easier to build, maintain, and scale
            applications as developers can work on isolated components without
            affecting the whole system.
          </p>
          <p className="mt-5 text-sm md:text-base">
            By reusing components across different parts of an application,
            developers can write less code and avoid duplication, making the
            codebase more maintainable and efficient.
          </p>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black  md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
          2. Declarative Syntax
        </h1>
        <ul className=" mt-5 text-sm md:text-base ">
          <li className="mt-4">
            <span className="font-bold"> declarative syntax: </span>meaning
            developers describe what they want to see on the screen, and React
            takes care of updating the user interface when the data changes.
            This approach is different from imperative programming, where
            developers need to manually manipulate the DOM to reflect changes.
          </li>
          <li className="mt-4">
            With React, you simply declare how your UI should look based on the
            current state of the application, and React ensures that the DOM is
            updated accordingly. This makes the code more predictable and easier
            to debug since React handles the rendering logic internally.
          </li>
        </ul>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="text-black py-2 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-xl md:text-4xl">
          Virtual DOM for Performance Optimization
        </h1>

        <ul className="list-disc list-inside mt-5 text-sm md:text-base ">
          <li className="mt-4">
            <span className="font-bold">Performance Optimization: </span>{" "}
            Next.js offers built-in optimizations, such as automatic code
            splitting, server-side rendering (SSR), and static site generation
            (SSG), which improve performance and reduce the need for custom
            server-side rendering logic.
          </li>
          <li className="mt-4">
            React uses a concept called the Virtual DOM to optimize rendering
            performance. When the state of a component changes, React updates
            the Virtual DOM first, which is a lightweight copy of the actual
            DOM. After this, React compares the Virtual DOM with the real DOM to
            identify the differences, and only the changed parts of the DOM are
            updated. This process, known as reconciliation, minimizes the number
            of direct manipulations to the actual DOM, leading to better
            performance, especially in large applications.
          </li>
          <li className="mt-4">
            This approach ensures that React apps are fast, responsive, and can
            handle frequent updates with minimal performance overhead
          </li>
        </ul>
      </div>
      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://legacy.reactjs.org/docs/getting-started.html"
          className="bg-secondary py-4 px-10 rounded-md  hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 mt-5 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-sky-400 ">
        <h2 className="font-bold text-2xl md:text-4xl ">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mt-5">
          <textarea
            className=" border-2 border-primary p-5 rounded-md w-full"
            value={comments}
            onChange={handleCommentChange}
            placeholder="Share your thoughts..."
            rows={5}
          />
          <div className="text-right text-sm text-gray-700">
            {comments.length}/{maxChars} Characters
          </div>
          <button
            type="submit"
            className="bg-secondary py-3 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 mt-5"
          >
            Submit
          </button>
        </form>
        {feedback && <p className="text-primary mt-5">{feedback}</p>}
        {/**Display submit comments */}
        <div className="mt-10">
          <h3 className="font-semibold text-xl">All Comments</h3>
          {commentList.length === 0 ? (
            <p>No comments yet.</p>
          ) : (
            <ul className="mt-4">
              {commentList.map((comment, index) => (
                <li key={index} className="border-b py-3">
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Reactblog;
