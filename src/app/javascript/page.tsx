"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Javascriptblog = () => {
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
      <div className=" flex flex-col  bg-gradient-to-t to-white from-yellow-300 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary">
          Understanding the Power of JavaScript for Modern Web Development
        </h1>
        <Image
          src={"/images/js.webp"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
          JavaScript is the backbone of modern web development. It's a
          versatile, dynamic language that powers everything from simple web
          pages to complex, interactive web applications. Whether you're a
          beginner or an experienced developer, understanding JavaScript's core
          concepts and its ever-evolving ecosystem is essential for building
          modern websites. In this blog, we'll take a deep dive into what makes
          JavaScript so powerful and why it's an indispensable tool for web
          developers today.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">What is JavaScript?</h1>
          <p className="mt-5 text-sm md:text-base">
            JavaScript is a high-level, interpreted programming language that
            was initially designed to add interactivity to websites. Today, it
            is used not only for client-side scripting but also for server-side
            development. It runs on almost every modern web browser and is known
            for its ability to create dynamic content, handle user input, and
            manipulate the DOM (Document Object Model).
          </p>
          <h1 className="font-bold text-2xl">JavaScript's Evolution</h1>
          <p className="mt-5 text-sm md:text-base">
            When JavaScript was first introduced in 1995 by Netscape
            Communications, it was primarily a tool for enhancing web pages with
            features like form validation and simple animations. Over the years,
            JavaScript has evolved significantly. Today, it supports advanced
            features such as:
          </p>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-10 md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
          Why Learn JavaScript?
        </h1>
        <h2 className="font-bold">Ubiquity and Browser Support</h2>
        <p className="mt-5 text-sm md:text-base">
          JavaScript is supported by all modern browsers, making it the default
          language for client-side scripting. From Chrome to Firefox, Edge to
          Safari, JavaScript runs seamlessly across all major browsers, ensuring
          consistency in user experience.
        </p>
        <h2 className="font-bold">Dynamic and Interactive Web Pages</h2>
        <p className="mt-5 text-sm md:text-base">
          Without JavaScript, the web would still be static and limited to
          simple, text-based interactions. JavaScript enables dynamic elements
          such as:
        </p>
        <h2 className="font-bold">Server-Side Rendering (SSR)</h2>
        <p className="mt-5 text-sm md:text-base">
          SSR allows websites to generate HTML on the server-side before sending
          it to the client, resulting in faster load times and improved SEO.
          This is particularly useful for dynamic content and applications that
          require user authentication.
        </p>
        <h2 className="font-bold">Asynchronous Programming</h2>
        <p className="mt-5 text-sm md:text-base">
          JavaScript enables asynchronous programming, allowing developers to
          write code that can perform multiple tasks simultaneously. This is
          particularly useful for applications that require user input, API
          calls, or other asynchronous operations.
        </p>
        <h2 className="font-bold">Modularity and Code Reusability</h2>
        <p className="mt-5 text-sm md:text-base">
          JavaScript enables modularity and code reusability through the use of
          modules and libraries. This allows developers to create smaller,
          reusable components and share them across different projects or
          applications.
        </p>
        <h2 className="font-bold">Performance Optimization</h2>
        <p className="mt-5 text-sm md:text-base">
          JavaScript enables performance optimization through techniques like
          lazy loading, minification, and caching. By optimizing your code, you
          can improve the loading time of your website and reduce the amount of
          data that needs to be transferred to the client.
        </p>
        <h2 className="font-bold">Community and Learning Resources</h2>
        <p className="mt-5 text-sm md:text-base">
          JavaScript is a widely-used language, and there are many resources
          available to help you learn and develop with it. Some popular learning
          resources include:
        </p>
        <ul className="list-disc ml-5">
          <li>
            <a href="https://www.freecodecamp.org/learn/javascript/">
              FreeCodeCamp JavaScript Course
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/js/">
              W3Schools JavaScript Tutorial
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide">
              Mozilla Developer Network JavaScript Guide
            </a>
          </li>
        </ul>
        <h2 className="font-bold">Conclusion</h2>
        <p className="mt-5 text-sm md:text-base">
          JavaScript is a powerful and versatile language that has the potential
          to transform the way we build web applications. As you continue to
          learn and explore the world of JavaScript, you'll be well-equipped to
          build dynamic, interactive, and responsive websites that meet your
          needs. As you continue to explore and learn more about JavaScript,
          you'll be well-equipped to build powerful, efficient, and responsive
          web applications that meet your needs.
        </p>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="text-black py-2 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">
          JavaScript: A Comprehensive Guide
        </h1>
        <p className="mt-5 text-sm md:text-base">
          JavaScript is a versatile and powerful language that allows you to
          build dynamic, interactive, and responsive web applications. In this
          comprehensive guide, we'll explore the fundamentals of JavaScript,
          covering topics such as variables, data types, functions, loops,
          conditionals, and more. We'll also discuss best practices, debugging
          techniques, and common pitfalls to avoid. As you continue to learn and
          explore JavaScript, you'll be well-equipped to build powerful,
          efficient, and responsive web applications that meet your needs.
        </p>
      </div>

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://www.w3schools.com/js/"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-yellow-300 ">
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

export default Javascriptblog;
