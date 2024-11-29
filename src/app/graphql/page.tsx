"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Graphql = () => {
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
      <div className=" flex flex-col  bg-gradient-to-b to-white from-rose-400 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary">
          GraphQL: A Query Language for APIs
        </h1>
        <Image
          src={"/images/graphql.png"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
          GraphQL is a modern query language for APIs that provides a more
          efficient and flexible alternative to traditional REST APIs. Developed
          by Facebook in 2012 and released as an open-source project in 2015,
          GraphQL allows developers to request only the data they need, making
          it a powerful tool for building fast and scalable APIs. Here’s why
          GraphQL is gaining popularity in web development.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">
            Flexible and Precise Data Retrieval
          </h1>
          <p className="mt-5 text-sm md:text-base">
            One of the standout features of GraphQL is its ability to allow
            clients to request only the specific data they need. In a
            traditional REST API, you typically get a fixed set of data from an
            endpoint. With GraphQL, clients can define the structure of the
            response by writing queries that specify the exact fields and data
            relationships required. This eliminates over-fetching or
            under-fetching of data, making data retrieval more efficient.
          </p>
          <h1 className="font-bold text-2xl">Strongly Typed Schema</h1>
          <p className="mt-5 text-sm md:text-base">
            GraphQL APIs are defined by a strongly typed schema, which defines
            the types of data that can be queried and the relationships between
            them. This schema acts as a contract between the client and the
            server, ensuring that clients can only query valid data and making
            the API more predictable. The schema also provides clear
            documentation, which makes it easier for developers to understand
            how the API works and what data is available.
          </p>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-10 md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
          Real-Time Data with Subscriptions
        </h1>
        <p className="mt-5 text-sm md:text-base">
          GraphQL supports subscriptions, which allow clients to receive
          real-time updates whenever data changes on the server. This feature is
          especially useful for building applications that require live data,
          such as chat apps, stock price trackers, or collaborative tools. By
          using subscriptions, developers can implement real-time functionality
          in a more efficient and streamlined way compared to traditional
          methods like polling.
        </p>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="text-black py-2 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">
          Improved Development Speed and Efficiency
        </h1>
        <p className="mt-5 text-sm md:text-base">
          GraphQL’s flexibility allows frontend developers to define the shape
          and structure of the data they need without waiting for backend
          developers to create new API endpoints. This reduces the communication
          overhead between frontend and backend teams and accelerates the
          development process. Additionally, GraphQL’s introspection feature
          allows developers to query the API’s schema directly, making it easier
          to explore and understand the API.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">Versionless APIs</h1>
        <p className="mt-5 text-sm md:text-base">
          With REST APIs, introducing new versions of an API often involves
          creating new endpoints or making backward-incompatible changes. In
          contrast, GraphQL APIs are versionless. Since clients specify the data
          they need in the query, there is no need to create new versions when
          adding or changing fields. As long as the schema is
          backward-compatible, clients can continue querying the same endpoint,
          making it easier to evolve the API over time without breaking existing
          clients.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">
          Error Handling and Optimized Queries
        </h1>
        <p className="mt-5 text-sm md:text-base">
          GraphQL provides a more structured approach to error handling. In a
          GraphQL query, if an error occurs, it’s returned as part of the
          response, allowing the client to handle it gracefully without
          affecting other parts of the query. Additionally, since GraphQL only
          returns the data requested, the responses are smaller, which can
          reduce bandwidth usage and improve performance, especially in mobile
          environments.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">
          Ecosystem and Tooling
        </h1>
        <p className="mt-5 text-sm md:text-base">
          GraphQL has a rich ecosystem of libraries and tools that help
          streamline development. From client libraries like Apollo Client to
          server libraries like Apollo Server and GraphQL.js, developers can
          leverage these tools to build robust and scalable GraphQL APIs
          quickly. Furthermore, tools like GraphiQL and GraphQL Playground allow
          developers to interact with the GraphQL API, test queries, and explore
          the schema in a user-friendly interface.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">
          Integration with Existing Systems
        </h1>
        <p className="mt-5 text-sm md:text-base">
          While GraphQL is a powerful tool for building APIs, it can also
          integrate with existing systems. You don’t need to completely overhaul
          your backend to use GraphQL. You can add a GraphQL layer on top of
          your RESTful or SQL-based APIs, allowing you to leverage the benefits
          of GraphQL while maintaining compatibility with legacy systems
        </p>

        <h1 className="font-bold text-2xl md:text-4xl">
          . Scalability and Efficiency
        </h1>
        <p className="mt-5 text-sm md:text-base">
          GraphQL enables more efficient data fetching by allowing clients to
          request only the necessary data in a single request. This can improve
          the performance of mobile applications or websites that need to
          optimize their data usage, especially in environments with limited
          bandwidth. Additionally, GraphQL’s ability to aggregate data from
          multiple sources in a single query makes it easier to scale
          applications that depend on multiple services or databases.
        </p>
      </div>

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://graphql.org/learn/"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-white hover:text-black hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-rose-400 ">
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
            className="bg-secondary py-3 px-10 rounded-md hover:bg-white hover:text-black hover:border-secondary hover:border-3 transition-transform hover:scale-90 mt-5"
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

export default Graphql;
