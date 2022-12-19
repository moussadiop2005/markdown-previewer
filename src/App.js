import "./App.css";
import { useState } from "react";
import { marked } from "marked";

// a heading element (H1 size), a sub heading element (H2 size),
// a link, inline code, a code block, a list item,
// a blockquote, an image, and bolded text.

function App() {
  const [code, setCode] = useState(`
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading

  [title](https://www.freecodecamp.org)

  \`<div></div>\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  **bold text**

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

  `);

  marked.setOptions({
    breaks: true,
  });

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="App">
      <textarea
        id="editor"
        cols="30"
        rows="10"
        onChange={handleChange}
        value={code}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(code),
        }}
      ></div>
    </div>
  );
}

export default App;
