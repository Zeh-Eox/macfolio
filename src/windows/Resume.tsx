import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import { DownloadIcon } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>My Resume</h2>

        <a
          href="/files/curriculum.pdf"
          download
          className="cursor-pointer"
          title="Download Resume"
        >
          <DownloadIcon className="icon" />
        </a>
      </div>

      <div className="pdf-container overflow-y-auto max-h-[60vh]">
        <Document
          file="/files/curriculum.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="mb-4"
            />
          ))}
        </Document>

        {numPages > 0 && (
          <p className="text-center text-sm text-gray-600 mt-2">
            {numPages} page{numPages > 1 ? "s" : ""}
          </p>
        )}
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper({
  Component: Resume,
  windowKey: "resume",
});

export default ResumeWindow;
