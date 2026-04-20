"use client";

import React, { useRef, useEffect } from "react";

interface TinyMCEPreviewProps {
  content: string;
  /** When true, iframe auto-resizes to content height (for full blog posts) */
  autoHeight?: boolean;
}

/** Renders HTML using TinyMCE's exact content CSS so it matches Editor File->Preview. */
export default function TinyMCEPreview({
  content,
  autoHeight = false,
}: TinyMCEPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument) return;

    const doc = iframe.contentDocument;
    doc.open();
    doc.write(
      `<!DOCTYPE html><html><head><base href="/" target="_parent"><link rel="stylesheet" href="/tinymce/skins/content/default/content.min.css"><style>body{margin:1rem;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,sans-serif;font-size:14px;line-height:1.6}img{max-width:100%;height:auto;display:block}</style></head><body class="mce-content-body">${content || "<p></p>"}</body></html>`
    );
    doc.close();

    if (autoHeight) {
      const resize = () => {
        try {
          const body = doc.body;
          const html = doc.documentElement;
          if (body && html) {
            const height = Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight
            );
            iframe.style.height = `${height + 24}px`;
          }
        } catch {
          iframe.style.minHeight = "400px";
        }
      };
      resize();
      void doc.fonts?.ready?.then(resize);
      const link = doc.querySelector('link[rel="stylesheet"]');
      if (link) link.addEventListener("load", resize);
      const t = setTimeout(resize, 100);
      return () => clearTimeout(t);
    }
  }, [content, autoHeight]);

  return (
    <iframe
      ref={iframeRef}
      title="Content preview"
      className={`w-full border border-gray-200 rounded bg-white ${autoHeight ? "min-h-[200px]" : "h-[400px]"
        }`}
      sandbox="allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    />
  );
}
