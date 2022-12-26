import Giscus from "@giscus/react";
import BlockContent from "@sanity/block-content-to-react";
import React from "react";

type Props = {
  content: any;
};

const Body: React.FC<Props> = ({ content }) => {
  return (
    <div className="flex justify-center">
      <div className="prose prose-lg prose-headings:text-black prose-p:text-black prose-li:text-black prose-img:rounded-xl prose-img:mx-auto">
        <BlockContent
          blocks={content}
          projectId="29neet2j"
          dataset="production"
          serializers={{
            types: {
              code: (props: any) => (
                <pre data-language={props.node.language}>
                  <code>{props.node.code}</code>
                </pre>
              )
            }
          }}
        />
        <Giscus
          repo="scidroid/portfolio"
          repoId="MDEwOlJlcG9zaXRvcnkzNzY3MDExNjM="
          category="General"
          categoryId="DIC_kwDOFnQA684CAZ5E"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="1"
          theme="light"
        />
      </div>
    </div>
  );
};

export default Body;
