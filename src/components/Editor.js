import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import "./Editor.scss";

const Editor = ({ setQuery, query, executeQuery }) => {
  const [content, setContent] = useState(query);
  return (
    <div className="editor">
      <CodeMirror
        value={content}
        extensions={[sql()]}
        onChange={(value, viewUpdate) => {
          setContent(value);
        }}
      />
      <div className="buttons">
        <button
          className="clear button"
          onClick={() => {
            setContent("");
            setQuery("");
          }}
        >
          Clear
        </button>
        <button
          className="run button"
          onClick={() => {
            setQuery(content);
            executeQuery(content);
          }}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default Editor;
