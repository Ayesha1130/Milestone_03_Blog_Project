"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Mongoblog = () => {
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
      <div className=" flex flex-col  bg-gradient-to-b to-gray-200 from-green-900 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-green-400">
          Introduction to MongoDB: A NoSQL Database
        </h1>
        <Image
          src={"/images/mongo.png"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
          MongoDB is a popular, open-source NoSQL database designed to handle
          unstructured and semi-structured data with flexibility and
          scalability. Unlike traditional relational databases that store data
          in tables, MongoDB uses a document-oriented model, where data is
          stored in BSON (Binary JSON) format. This allows for more complex and
          dynamic data structures, making MongoDB ideal for handling large
          amounts of diverse data.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">Key Features of MongoDB:</h1>
          <ul className="list-disc list-inside mt-10 text-sm md:text-base ">
            <li className="mt-5">
              <span className="font-bold"> Schema-less Structure: </span>
              MongoDB allows you to store data without enforcing a strict
              schema, making it easier to work with data that may evolve over
              time.
            </li>
            <li className="mt-5">
              <span className="font-bold"> Scalability: </span>
              MongoDB is built to scale horizontally by distributing data across
              multiple servers, which allows it to handle large volumes of
              traffic and data without sacrificing performance.
            </li>
            <li className="mt-5">
              <span className="font-bold">High Availability: </span>
              It provides built-in replication to ensure data redundancy and
              high availability. In case of server failure, MongoDB can
              automatically switch to a replica, preventing data loss.
            </li>
            <li className="mt-5">
              <span className="font-bold">Powerful Query Language: </span>
              MongoDB provides a rich query language that supports complex
              queries, indexing, aggregation, and text search.
            </li>
            <li className="mt-5">
              <span className="font-bold">Document Model: </span>
              Data is stored in JSON-like documents, making it easy to map
              objects in application code directly to the database.
            </li>
          </ul>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-5 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">
          Use Cases for MongoDB:
        </h1>

        <ul className="  mt-10 text-md md:text-base  ">
          <li className="mb-5">
            <span className="font-bold">
              Content Management Systems (CMS):{" "}
            </span>
            MongoDB’s flexibility allows it to handle various types of content
            without worrying about predefined schema.
          </li>
          <li className="mb-5">
            <span className="font-bold">Big Data & Analytics: </span>
            Its scalability makes MongoDB ideal for storing and processing large
            datasets for analytics and reporting.
          </li>
          <li className="mb-5">
            <span className="font-bold">Real-time Applications: </span>
            MongoDB supports high-speed data access, making it perfect for
            real-time applications like messaging, social media, and IoT.
          </li>
        </ul>
        <h1 className="font-bold text-2xl">Conclusion</h1>
        <p className="mt-5 text-sm md:text-base">
          MongoDB has revolutionized the way data is stored and managed,
          providing developers with a robust, flexible, and scalable solution
          for modern applications. Whether you're building a small app or a
          large enterprise system, MongoDB offers the tools necessary to manage
          and grow your data effectively.
        </p>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://www.mongodb.com/blog/post/top-4-reasons-to-use-mongodb-8-0?tck=mdb80_blog_pencil_banner"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-gray-400 from-green-900 ">
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

export default Mongoblog;
