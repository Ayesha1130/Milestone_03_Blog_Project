"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Tailwind = () => {
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
      <div className=" flex flex-col  bg-gradient-to-b to-white from-purple-900 text-black  py-10 md:py-20 px-5 md:px-20 justify-center items-center text-center">
        <h1 className="font-bold text-3xl md:text-5xl text-primary">
        Why Tailwind CSS is Revolutionizing Web Design
        </h1>
        <Image
          src={"/images/tailwind.png"}
          alt="typescript-logo"
          width={500}
          height={300}
          className="mt-5"
        />

        <p className="mt-5 text-sm md:text-base">
        In the world of web development, creating beautiful and responsive user interfaces quickly and efficiently is a top priority. Traditional CSS frameworks like Bootstrap have long been popular for providing pre-designed components and layouts. However, in recent years, Tailwind CSS has emerged as a powerful alternative, gaining widespread popularity among developers for its unique approach to styling. Tailwind's utility-first philosophy, combined with flexibility and scalability, has made it a favorite for many developers. Here's why Tailwind CSS is revolutionizing the way we design websites.
        </p>
        <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

        <div className="leading-7">
          <h1 className="font-bold text-2xl">
          Utility-First Approach
          </h1>
          <p className="mt-5 text-sm md:text-base">
          Tailwind CSS follows a utility-first design approach, which means instead of writing custom CSS for specific components, you apply pre-defined utility classes directly to your HTML elements. These classes control layout, spacing, typography, colors, and more. For example, to create padding, margins, or background colors, you simply add utility classes like p-4 for padding or bg-blue-500 for a blue background
          </p>
          <h1 className="font-bold text-2xl">Strongly Typed Schema</h1>
          <p className="mt-5 text-sm md:text-base">
          This approach contrasts with traditional CSS, where you create separate stylesheets for each component and apply them with specific class names. Tailwind’s utility-first approach leads to faster development, as you can quickly prototype and iterate on your design without having to switch between HTML and CSS files.
          </p>

          <hr className="border-1 border-secondary my-5 w-full  mx-auto" />
        </div>
      </div>

      <div className="text-black py-10 md:py-20 px-5 md:px-20 ">
        <h1 className="font-bold text-2xl md:text-4xl">
        Customization and Flexibility
        </h1>
        <p className="mt-5 text-sm md:text-base">
        One of the biggest advantages of Tailwind CSS is its customizability. While many traditional CSS frameworks come with predefined themes and designs, Tailwind is highly flexible and can be tailored to suit any design system. The configuration file (tailwind.config.js) allows you to easily adjust default settings such as colors, fonts, spacing, breakpoints, and more
        </p>
        <p className="mt-5 text-sm md:text-base">
        Tailwind’s flexibility means you can create a unique design without having to override a lot of pre-existing styles. This is particularly useful for developers who need complete control over the appearance of their websites or applications without the restrictions imposed by traditional CSS frameworks.
        </p>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      <div className="text-black py-2 md:py-5 px-5 md:px-20">
        <h1 className="font-bold text-2xl md:text-4xl">
        Responsiveness Out of the Box
        </h1>
        <p className="mt-5 text-sm md:text-base">
        Tailwind CSS makes it incredibly easy to build responsive designs. With a set of built-in breakpoints (such as sm, md, lg, xl), you can apply different styles at various screen sizes. This allows developers to design responsive websites directly within the HTML by simply adding responsive classes, such as md:text-xl or lg:w-1/2..
        </p>
        <p className="mt-5 text-sm md:text-base">
          Tailwind’s responsiveness makes it easy to build websites that adapt to different screen sizes and devices, making it a popular choice for developers looking to create modern, responsive websites.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">Faster Development and Prototyping</h1>
        <p className="mt-5 text-sm md:text-base">
        With Tailwind CSS, development speeds up significantly because you can style your elements directly in the HTML using utility classes. You don’t need to spend time switching between different files or writing custom styles for each component. Tailwind’s predefined utilities let you create fully styled layouts in a fraction of the time it would take with traditional CSS or frameworks.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">
        No Unused CSS
        </h1>
        <p className="mt-5 text-sm md:text-base">
        Another significant advantage of Tailwind is its ability to remove unused CSS in production. By using a tool like PurgeCSS, which is integrated with Tailwind, you can eliminate any CSS that isn’t being used in your project. This results in a much smaller CSS file size and improves performance, especially on mobile devices where speed is crucial.
        </p>

        <h1 className="font-bold text-2xl md:text-4xl">
        Consistency Across Projects
        </h1>
        <p className="mt-5 text-sm md:text-base">
        Tailwind CSS promotes design consistency across projects by enforcing a common set of spacing, colors, and typography throughout your application. Since developers use the same utility classes to style elements, there’s a uniformity in the design, which can be especially helpful in large teams or for companies with multiple web applications.
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
        Great Developer Experience
        </h1>
        <p className="mt-5 text-sm md:text-base">
        Tailwind’s developer experience is one of the key reasons why it has gained so much traction. The utility-first approach allows developers to see their styles applied immediately in the browser. You no longer have to worry about writing complicated CSS selectors or managing large stylesheets. Instead, you focus on applying relevant utility classes directly to your HTML elements, which reduces the cognitive load.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">
        Community and Support
        </h1>
        <p className="mt-5 text-sm md:text-base">
        Tailwind CSS has a strong community and support, with a large number of active developers, tutorials, and plugins. You can find help and support from the community on platforms like Discord, GitHub, and Stack Overflow.
        </p>
        <h1 className="font-bold text-2xl md:text-4xl">
        Conclusion
        </h1>
        <p className="mt-5 text-sm md:text-base">
        Tailwind CSS is a powerful tool that has revolutionized the way we build websites and applications. It promotes design consistency, improves development speed, and removes unused CSS, making it a popular choice for developers around the world.
        </p>
      </div>

      <div className="justify-center items-center py-5 md:py-5 px-5 md:px-20">
        <Link
          href="https://v2.tailwindcss.com/docs"
          className="bg-secondary py-4 px-10 rounded-md hover:bg-black hover:text-white hover:border-secondary hover:border-3 transition-transform hover:scale-90 "
        >
          Read More
        </Link>
      </div>
      <hr className="border-1 border-secondary my-5 w-full  mx-auto" />

      {/**Comments Section */}
      <div className="text-black py-10 md:py-20 px-5 md:px-20   bg-gradient-to-b to-white from-purple-600 ">
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

export default Tailwind;
