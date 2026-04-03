import React, { useContext, useState } from "react";
import Editor from "react-simple-wysiwyg";
import { ContextAPI } from "../../context/ContextAPI";
import { useLocation, useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { createPost } = useContext(ContextAPI);
  const navigate = useNavigate();

  console.log(createPost);

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      console.log("handleSubmit clicked");

      const formData = new FormData();

      formData.append("title", title);
      formData.append("content", content);

      const result = await createPost(formData);

      if (!result.success && !result.isLogin) return navigate("/auth/login");

      if (result.success) return navigate("/");
    } catch (error) {
      console.log("Error from handleSubmit", error.message);
    }
  }

  return (
    <>
      <section className="flex justify-between gap-10 lg:mx-70 lg:h-[92vh] h-[88vh] font-[LATO] lg:overflow-hidden overflow-auto py-2">
        {/* Create Blog */}
        <div className="Inputs w-full flex flex-col px-5 py-25">
          <h1 className="text-center font-semibold text-2xl">Create Blog</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="w-full flex flex-col lg:gap-5 gap-2"
          >
            <div className="w-full flex lg:gap-2">
              <div className="btn w-full flex justify-end">
                <button
                  type="submit"
                  className="bg-[#ff7b00] py-2 px-6 rounded-lg text-white font-medium text-lg"
                >
                  Create
                </button>
              </div>
            </div>

            <input
              type="text"
              name="title"
              id="title"
              placeholder="Blog Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="w-full p-2 focus:outline-[#ff7b00] border-b text-lg"
            />
            <Editor
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              className="h-[50vh]"
            />

            <button type="submit"></button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="preview w-full px-5 py-25 overflow-auto hidden lg:flex lg:flex-col">
          <h1 className="text-center font-semibold text-4xl">Preview Blog</h1>

          <div className="w-full flex flex-col gap-4 overflow-auto">
            <h1 className="title text-2xl font-bold">{title}</h1>

            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
