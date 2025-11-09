"use client";

import React, { useRef, useEffect, useCallback, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange }) => {
  const editorRef = useRef<any>(null);
  const [content, setContent] = useState(value || "");

  /** ✅ Convert uploaded image to Base64 and return as URL */
  const handleImageUpload = useCallback(async (blobInfo: any): Promise<string> => {
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
  }, []);

  /** ✅ Handle content change */
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
    onChange(newContent);
  };

  /** ✅ Keep editor in sync with external value */
  useEffect(() => {
    if (value !== content) {
      setContent(value || "");
    }
  }, [value, content]);

  return (
    <Editor
      apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
      onInit={(_evt, editor) => {
        editorRef.current = editor;
      }}
      value={content}
      onEditorChange={handleEditorChange}
      init={{
        height: 400,
        menubar: true,
        plugins:
          "advlist autolink lists link image charmap preview anchor searchreplace visualblocks code fullscreen insertdatetime media table help wordcount",
        toolbar:
          "undo redo | formatselect | bold italic underline forecolor backcolor | " +
          "alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | " +
          "table image | removeformat | help",
        automatic_uploads: true,
        images_upload_handler: handleImageUpload,
        file_picker_types: "image",
        image_caption: true,
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        paste_data_images: true,
        branding: false,
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
