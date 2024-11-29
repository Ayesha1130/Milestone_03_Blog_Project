"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Reduxblog = () => {
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
      <div className=" flex flex-col  bg-gradient-to-t to-gray-200 from-purple-900 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-purple-900">
          Introduction to Redux: A State Management Library for JavaScript
        </h1>
        <Image
          src={"/images/redux.png"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
          Redux is a predictable state container for JavaScript applications,
          commonly used with React to manage application state in a more
          structured and consistent way. It provides a centralized place for
          storing and updating the application's state, ensuring that changes
          are made in a controlled, predictable manner.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">Key Concepts of Redux::</h1>
          <ul className="list-disc list-inside mt-10 text-sm md:text-base ">
            <li className="mt-5">
              <span className="font-bold"> Store:: </span>
              The store is where the entire state of the application is stored.
              It's a single, immutable object that holds the state, which can
              only be modified by dispatching actions.
            </li>
            <li className="mt-5">
              <span className="font-bold"> Actions: </span>
              Actions are plain JavaScript objects that describe an event or
              change in the application. They must have a type property, and can
              also include a payload with additional data needed to perform the
              state change.
            </li>
            <li className="mt-5">
              <span className="font-bold">Reducers: </span>
              Reducers are pure functions that specify how the state should
              change in response to an action. They take the current state and
              an action as input and return a new state.
            </li>
            <li className="mt-5">
              <span className="font-bold">Powerful Query Language: </span>
              MongoDB provides a rich query language that supports complex
              queries, indexing, aggregation, and text search.
            </li>
            <li className="mt-5">
              <span className="font-bold">Dispatch: </span>
              Dispatch is a function used to send actions to the store. When an
              action is dispatched, it triggers the appropriate reducer to
              modify the state.
            </li>
          </ul>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-5 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">Why Use Redux?</h1>

        <ul className="  mt-10 text-md md:text-base  ">
          <li className="mb-5">
            <span className="font-bold">Predictability:</span>
            Since the state is stored in a single object and can only be changed
            through actions, the behavior of the application becomes more
            predictable. This makes debugging and testing easier.
          </li>
          <li className="mb-5">
            <span className="font-bold">Centralized State:</span>
            Redux offers a single source of truth for application state, which
            makes it easier to manage and maintain. In large applications, this
            reduces the complexity of managing state across multiple components.
          </li>
          <li className="mb-5">
            <span className="font-bold">Time Travel Debugging: </span>
            By storing actions and state transitions, Redux allows you to
            "travel" through the state of your app, making it easy to debug
            issues and track down bugs.
          </li>
          <li className="mb-5">
            <span className="font-bold">Easy to Integrate with React:: </span>
            Redux integrates seamlessly with React, allowing developers to map
            state and actions to React components, ensuring that components are
            always up-to-date with the latest state.
          </li>
          <li className="mb-5">
            <span className="font-bold">Large Applications: </span>
            Redux is especially useful in large-scale applications where
            managing state across many components can become cumbersome.
          </li>
          <li className="mb-5">
            <span className="font-bold">Data-driven UIs: </span>
            Apps that require complex user interfaces, like dashboards or
            e-commerce sites, can benefit from Redux's ability to manage and
            synchronize data across components.
          </li>

          <li className="mb-5">
            <span className="font-bold">Real-time Data: </span>
            Redux can handle real-time updates efficiently, ensuring that the UI
            stays in sync with the application’s state.
          </li>

          <li className="mb-5">
            <span className="font-bold">Community Support: </span>
            The Redux community is active and supportive, providing valuable
            resources and guidance to help developers build and maintain their
            applications.
          </li>

          <li className="mb-5">
            <span className="font-bold">Learning Curve: </span>
            Redux requires a solid understanding of JavaScript and React, as
            well as a basic understanding of state management concepts.
            Developers who are new to Redux may find the learning curve steep,
            but once mastered, it offers significant benefits in managing and
            maintaining application state.
          </li>
        </ul>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        <h1 className="font-bold text-2xl">Conclusion</h1>
        <p className="mt-5 text-sm md:text-base">
          Redux simplifies state management, especially in complex applications,
          by providing a clear structure and predictable flow of data. While it
          requires a bit of setup and can introduce boilerplate code, the
          benefits of predictability, maintainability, and debugging make it an
          invaluable tool for large-scale applications. If you're working with
          React, Redux is a powerful library to consider for managing the state
          of your app
        </p>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://redux.js.org/"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-gray-400 from-purple-900 ">
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
            className="bg-secondary py-3 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 text-white transition-transform hover:scale-90 mt-5"
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

export default Reduxblog;
