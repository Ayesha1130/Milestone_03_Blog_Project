"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nextjs = () => {
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
      <div className=" flex flex-col  bg-gradient-to-t to-white from-gray-700  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary">
          Introduction to Next.js
        </h1>
        <Image
          src={"/images/next.jpg"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
        Next.js is a popular React-based framework designed for building modern web applications. It simplifies server-side rendering (SSR) and static site generation (SSG), which improves performance and SEO (Search Engine Optimization). In this blog, we will explore what Next.js is, its key features, and how you can use it to build a simple blog website.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">What is Next.js?</h1>
          <p className="mt-5 text-sm md:text-base">
          Next.js is a React framework that helps developers quickly build production-ready web applications. It was developed by Vercel, and its primary goal is to simplify the process of implementing server-side rendering (SSR) and static site generation (SSG) with React. Some key features of Next.js include:
          </p>
          <ul className="list-disc list-inside  text-sm md:text-base text-start mt-10 ">
          <li>
            <span className="font-bold">Server-Side Rendering (SSR): </span>
            This feature allows your React application to be rendered on the server, which results in faster page loading and better SEO.
          </li>
          <li>
            <span className="font-bold">Static Site Generation (SSG): </span>
            This feature generates HTML pages for your React application at build time, which improves performance and reduces the need for server-side rendering.
          </li>
          <li>
            <span className="font-bold">API Routes:  </span>
            Next.js supports API routes, allowing you to handle backend logic directly within your application.
          </li>
          <li>
            <span className="font-bold">Automatic Code Splitting:</span>
            Next.js automatically splits your code, so only the necessary JavaScript is loaded, improving performance.
          </li>
            
          </ul>
          
          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
        </div>
      

      <div className="text-black py-10 md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
          Benefits of Next.js
        </h1>
        <ul className="list-disc list-inside mt-5 text-sm md:text-base ">
            <li>
              <span className="font-bold">Server-Side Rendering (SSR): </span> Next.js
              provides built-in support for server-side rendering, allowing your
              application to be rendered on the server and deliver a fully-rendered
              page to the client.
            </li>
            <li>
              <span className="font-bold">Static Site Generation (SSG): </span> Next.js
              generates HTML pages for your application at build time, reducing
              the need for server-side rendering and improving performance.
            </li>
            <li>
              <span className="font-bold">Automatic Code Splitting: </span> Next.js
              automatically splits your code, so only the necessary JavaScript is
              loaded, improving performance.
            </li>
        </ul>
       
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
      


      <div className="text-black py-2 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">
          Why Next.js is increasingly popular
        </h1>

        <ul className="list-disc list-inside mt-5 text-sm md:text-base ">
            <li>
              <span className="font-bold">Performance Optimization: </span> Next.js
              offers built-in optimizations, such as automatic code splitting,
              server-side rendering (SSR), and static site generation (SSG), which
              improve performance and reduce the need for custom server-side rendering
              logic.
            </li>
            <li>
              <span className="font-bold">Serverless Support: </span> Next.js supports
              serverless functions, which allows you to build applications that run
              on platforms like AWS Lambda, Vercel, and Netlify, reducing the need
              for custom server infrastructure.
            </li>
            <li>
              <span className="font-bold">Modern JavaScript Support: </span> Next.js
              supports modern JavaScript features, such as async/await, React Hooks,
              and TypeScript, which help developers build more efficient and
              maintainable applications.
            </li>
        </ul>

       
      </div>

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://nextjs.org/docs"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-gray-600 ">
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

export default Nextjs;
