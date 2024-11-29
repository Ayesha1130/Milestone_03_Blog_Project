"use client";
import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";

const Typescript = () => {
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
      <div className=" flex flex-col  bg-gradient-to-t to-white from-primary  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary  ">
          Introduction to TypeScript
        </h1>
        <Image
          src={"/images/ts.png"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
          In the ever-evolving landscape of web development, TypeScript has
          emerged as one of the most widely adopted tools for developers.
          Developed by Microsoft, TypeScript is a superset of JavaScript that
          introduces optional static typing, classes, interfaces, and many other
          advanced features that make JavaScript development more robust,
          maintainable, and scalable. This blog aims to provide an overview of
          TypeScript, its benefits, and why it is increasingly becoming a go-to
          language for developers around the world.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">What is TypeScript?</h1>
          <p className="mt-5 text-sm md:text-base">
            TypeScript is an open-source programming language that builds upon
            JavaScript by adding features that enhance the development process,
            particularly in large-scale applications. As a superset of
            JavaScript, TypeScript is compatible with existing JavaScript code,
            meaning you can start using it incrementally in your JavaScript
            projects.
          </p>
          <p className="mt-5 text-sm md:text-base">
            Unlike JavaScript, which is dynamically typed, TypeScript offers
            optional static typing. This means developers can specify what type
            of values such as numbers, strings, or custom data types variables
            and functions should hold. This feature helps identify and fix
            errors during the development process, even before the code is run.
          </p>
          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-10 md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
          Benefits of TypeScript
        </h1>
        <ul className="list-disc list-inside mt-5 text-sm md:text-base ">
          <li>
            <span className="font-bold">Static Typing: </span>TypeScript
            enhances the development process by providing static typing, which
            helps identify and fix errors early in the development process.
          </li>
          <li>
            <span className="font-bold">Enhanced Code Readability:</span>{" "}
            TypeScript provides a rich type system that makes code easier to
            read and understand, especially for developers who are not familiar
            with JavaScript.
          </li>
          <li>
            <span className="font-bold">Scalable Development: </span> TypeScript
            allows developers to build large-scale applications with a focus on
            maintainability and scalability.
          </li>
          <li>
            <span className="font-bold">Community Support: </span> TypeScript is
            developed and maintained by a community of developers, and there are
            many resources available for learning, tutorials, and support.
          </li>
        </ul>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="text-black py-2 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">
          Why TypeScript is increasingly popular
        </h1>

        <ul className="list-disc list-inside mt-5 text-sm md:text-base ">
          <li>
            <span className="font-bold">Strong Community Support: </span>{" "}
            TypeScript is developed and maintained by a community of developers,
            and there are many resources available for learning, tutorials, and
            support.
          </li>
          <li>
            <span className="font-bold">Improved Developer Experience: </span>{" "}
            TypeScript provides a rich type system and improved developer
            experience, such as autocomplete, error messages, and intelligent
            code navigation.
          </li>
          <li>
            <span className="font-bold">Enhanced Code Readability: </span>{" "}
            TypeScript provides a rich type system that makes code easier to
            read and understand, especially for developers who are not familiar
            with JavaScript.
          </li>
          <li>
            <span className="font-bold">Scalable Development: </span> TypeScript
            allows developers to build large-scale applications with a focus on
            maintainability and scalability.
          </li>
        </ul>
      </div>

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://www.typescriptlang.org/docs/"
          className="bg-secondary py-4 px-10 rounded-md  hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 mt-5 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-primary ">
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

export default Typescript;
