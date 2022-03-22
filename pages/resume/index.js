import React from "react";
import Layout from "../../components/layout/layout";
import dynamic from "next/dynamic";

const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <div className="py-40 min-h-screen">
        <div className="mx-40">
          <h2 className="text-center font-geometric text-4xl font-bold ">
            Resume.
          </h2>
          <div id="pdf-viewer" className="min-w-max rounded my-10 mx-auto">
            <FileViewer
              width="100%"
              fileType="pdf"
              filePath="/rifqi-rosyidi-resume.pdf"
            />
          </div>

          <div className="text-center ">
            <a
              className="font-geometric bg-blue-600 hover:bg-primary-600 text-white py-2 px-4 rounded shadow-lg shadow-blue-500/50"
              href="/rifqi-rosyidi-resume.pdf"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
