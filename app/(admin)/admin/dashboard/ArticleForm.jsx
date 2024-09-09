"use client";

import { useState } from "react";

export default function ArticleForm({ article, onSubmit }) {
  const [mainImage, setMainImage] = useState(article?.mainImage || null);
  const [title, setTitle] = useState(article?.title || "");
  const [description, setDescription] = useState(article?.description || "");
  const [content, setContent] = useState(
    article?.content || [{ type: "paragraph", text: "" }],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (mainImage) {
      formData.append("mainImage", mainImage);
    }
    formData.append("title", title);
    formData.append("description", description);
    formData.append("content", JSON.stringify(content));
    if (article) {
      onSubmit(article?.id, formData);
    } else {
      onSubmit(formData);
    }
  };

  const addContentBlock = (type) => {
    setContent([...content, { type, text: "" }]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="image" className="block">
          Image
        </label>
        <input
          name="mainImage"
          id="mainImage"
          type="file"
          onChange={(e) => setMainImage(e.target.files[0])}
          accept="image/*"
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label htmlFor="description" className="block">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full rounded border p-2"
        />
      </div>
      <div>
        <label className="block">Content</label>
        {content.map((block, index) => (
          <div key={index} className="mb-2">
            {block.type === "heading" ? (
              <input
                type="text"
                value={block.text}
                onChange={(e) => {
                  const newContent = [...content];
                  newContent[index].text = e.target.value;
                  setContent(newContent);
                }}
                className="w-full rounded border p-2 font-bold"
                placeholder="Heading"
              />
            ) : block.type === "paragraph" ? (
              <textarea
                value={block.text}
                onChange={(e) => {
                  const newContent = [...content];
                  newContent[index].text = e.target.value;
                  setContent(newContent);
                }}
                className="w-full rounded border p-2"
                placeholder="Paragraph"
              />
            ) : (
              <textarea
                value={block.text}
                onChange={(e) => {
                  const newContent = [...content];
                  newContent[index].text = e.target.value;
                  setContent(newContent);
                }}
                className="w-full rounded border p-2"
                placeholder="List items (one per line)"
              />
            )}
          </div>
        ))}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => addContentBlock("heading")}
            className="mr-2 rounded bg-gray-200 px-2 py-1"
          >
            Add Heading
          </button>
          <button
            type="button"
            onClick={() => addContentBlock("paragraph")}
            className="mr-2 rounded bg-gray-200 px-2 py-1"
          >
            Add Paragraph
          </button>
          <button
            type="button"
            onClick={() => addContentBlock("list")}
            className="rounded bg-gray-200 px-2 py-1"
          >
            Add List
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {article ? "Update Article" : "Create Article"}
      </button>
    </form>
  );
}
