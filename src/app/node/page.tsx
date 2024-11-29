"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nodeblog = () => {
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
      <div className=" flex flex-col  bg-gradient-to-t to-white from-green-600 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary">
          Node.js: An Introduction and Its Benefits
        </h1>
        <Image
          src={"/images/node.jpg"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />
        <h2 className="font-bold text-2xl">What is Node.js?</h2>

        <p className="mt-5 text-sm md:text-base">
          Node.js is an open-source, cross-platform JavaScript runtime
          environment that allows developers to use JavaScript for server-side
          programming. Traditionally, JavaScript was used for client-side
          scripting, but Node.js made it possible to run JavaScript on the
          server side as well.
        </p>
        <p className="mt-5 text-sm md:text-base">
          Node.js was developed in 2009 by Ryan Dahl and is built on the V8
          JavaScript engine, which is the same engine that powers Google Chrome.
          The main goal of Node.js was to create a high-performance,
          event-driven, non-blocking I/O model for server-side development.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">How Does Node.js Work?</h1>
          <p className="mt-5 text-sm md:text-base">
            Node.js is based on a non-blocking I/O model, which makes it ideal
            for handling multiple concurrent requests with minimal overhead.
            This means that while one request is being processed, other requests
            can be handled without waiting, making it highly efficient for
            I/O-heavy applications.
          </p>
          <h1 className="font-bold text-2xl">Event-Driven Model:</h1>
          <p className="mt-5 text-sm md:text-base">
            The event-driven model in Node.js ensures that the server can handle
            large volumes of I/O operations efficiently. When one task is
            completed, Node.js triggers an event that processes the response,
            which allows it to handle multiple requests at the same time.:
          </p>
          <h1 className="font-bold text-2xl">Single-Threaded:</h1>
          <p className="mt-5 text-sm md:text-base">
            Node.js uses a single-threaded model, meaning it operates with one
            main thread. However, due to its non-blocking nature, it can handle
            many requests simultaneously without blocking the thread, making it
            highly scalable.
          </p>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-10 md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
          Benefits of Using Node.js
        </h1>
        <ul className="list-disc pl-5">
          <li>High performance I/O operations</li>
          <li>Scalability and efficiency</li>
          <li>Single-threaded model</li>
          <li>Event-driven architecture</li>
          <li>Built-in support for web development</li>
          <li>Built-in support for networking</li>
          <li>Built-in support for asynchronous programming</li>
          <li>Built-in support for server-side rendering</li>
          <li>Community support and resources</li>
        </ul>
      </div>

      <div className="justify-center items-center py-5 md:py-3 px-5 md:px-20">
        <Link
          href="https://nodejs.org/docs/latest/api/"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-green-600 ">
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

export default Nodeblog;
