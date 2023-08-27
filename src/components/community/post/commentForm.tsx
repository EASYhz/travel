"use client";

import { useState, useRef, useEffect } from "react";

export default function CommentForm() {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [val]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(e.target.value);
  };

  return (
    <form className="mb-6 pb-10">
      <div className="py-2 px-4 mb-4 bg-white border-b border-gray-200 ">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          ref={textAreaRef}
          value={val}
          onChange={onChange}
          rows={1}
          className="px-0 h-auto w-full border-0 focus:ring-0 focus:outline-none resize-none"
          placeholder="댓글을 입력하세요."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={val.length === 0 ? true : false}
        className="inline-flex float-right items-center py-2.5 px-4 text-xs font-medium text-center text-main-white bg-main-blue rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-etc-blue disabled:opacity-30"
      >
        Post comment
      </button>
    </form>
  );
}
