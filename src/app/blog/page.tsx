import React from "react";
import Card from "@/components/Card/Card";

const Blog = () => {
  const posts = [
    {
      image: "/images/ts.png",
      title: "TypeScript: A Comprehensive Overview",
      description:
        "TypeScript is a powerful, statically-typed superset of JavaScript that helps developers write cleaner and more maintainable code. Created and maintained by Microsoft. ",
      link: "/typescript",
    },
    {
      image: "/images/next.jpg",
      title: "Next.js: A React Framework for Building Blogs",
      description:
        "Next.js is a React framework that provides a seamless development experience for building server-rendered, statically-exported websites. ",
      link: "/nextjs",
    },
    {
      image: "/images/React.png",
      title: "React: A JavaScript Library for Building User Interfaces",
      description:
        "React is a popular JavaScript library for building user interfaces.",
      link: "/react",
    },
    {
      image: "/images/graphql.png",
      title: "GraphQL: A Query Language for APIs",
      description:
        "GraphQL is a query language for APIs that provides a more efficient and flexible way to fetch and manipulate data. It is designed to be flexible, scalable, and easy to learn, making it a popular choice for building APIs and web applications.",
      link: "/graphql",
    },
    {
      image: "/images/tailwind.png",
      title: "Tailwind CSS: A Utility-First CSS Framework",
      description:
        "Tailwind CSS is a utility-first CSS framework that provides a wide range of built-in classes and utilities for building responsive and accessible websites.",
      link: "/tailwind",
    },
    {
      image: "/images/js.webp",
      title: "JavaScript: A Programming Language",
      description:
        "JavaScript is a powerful, interpreted programming language that allows developers to write code that runs in web browsers and on Node.js servers. ",
      link: "/javascript",
    },
    {
      image: "/images/node.jpg",
      title: "Node.js: A Runtime Environment for JavaScript",
      description:
        "Node.js is a runtime environment for JavaScript that allows developers to write server-side applications using JavaScript.",
      link: "/node",
    },
    {
      image: "/images/mongo.png",
      title: "MongoDB: A NoSQL Database",
      description:
        "MongoDB is a NoSQL database that provides a flexible and scalable solution for storing and retrieving data.",
      link: "/mongodb",
    },
    {
      image: "/images/redux.png",
      title: "Redux: A Predictable State Management Library",
      description:
        "Redux is a predictable state management library for JavaScript applications that provides a flexible and modular way to manage application state. ",
      link: "/redux",
    },
  ];

  return (
    <div className="px-5 py-10">
      <div className="bg-black px-5 py-10 rounded-lg">
        <h1 className="text-center text-5xl font-bold text-white my-20 ">
          Tech Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {posts.map((post, index) => (
            <Card
              key={index}
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
