"use client";

import React, { useRef, useEffect, useState, startTransition } from "react";
import dynamic from "next/dynamic";

// Load the TinyMCE React Editor dynamically on the client to avoid SSR errors
const Editor = dynamic(
  () => import("@tinymce/tinymce-react").then((mod) => mod.Editor),
  { ssr: false }
);

interface TextEditorProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (content: string) => void;
  height?: number;
  // No cloud API key used; always use self-hosted TinyMCE in /public/tinymce
}

const TextEditor: React.FC<TextEditorProps> = (props) => {
  const { value, onChange, height = 400 } = props;
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState(value || "");

  /** Convert uploaded image to Base64 */
  const handleImageUpload = async (blobInfo: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blobInfo.blob());
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Failed to convert image to Base64"));
        }
      };
      reader.onerror = () => reject(new Error("Image conversion failed"));
    });
  };

  /** Handle content change */
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    onChange(newContent);
  };

  /** Keep editor in sync with external value */
  useEffect(() => {
    if (value !== content && editorRef.current) {
      startTransition(() => {
        setContent(value || "");
      });
    }
  }, [value, content]);

  // Always use the self-hosted TinyMCE script copied to /public/tinymce
  return (
    <Editor
      tinymceScriptSrc="/tinymce/tinymce.min.js"
      licenseKey="gpl" // Use 'gpl' for open-source self-hosted usage
      onInit={(_evt, editor) => {
        editorRef.current = editor;
      }}
      value={content}
      onEditorChange={handleEditorChange}
      init={{
        height,
        menubar: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "help",
          "wordcount",
        ],
        toolbar:
          "undo redo | formatselect | bold italic underline forecolor backcolor | " +
          "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
          "table image link | removeformat | code | help",
        automatic_uploads: true,
        images_upload_handler: handleImageUpload,
        file_picker_types: "image",
        image_caption: true,
        image_advtab: true,
        content_style:
          "body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; font-size: 14px; line-height: 1.6; }",
        paste_data_images: true,
        branding: false,
        promotion: false,
        // Self-hosted configuration
        base_url: "/tinymce",
        suffix: ".min",
        skin: "oxide",
        content_css: "default",
        // Additional settings for better UX
        contextmenu: "link image table",
        resize: true,
        statusbar: true,
      }}
      onBlur={() => {
        const latestValue = editorRef.current?.getContent() || "";
        if (latestValue !== content) {
          setContent(latestValue);
          onChange(latestValue);
        }
      }}
    />
  );
};

export default TextEditor;