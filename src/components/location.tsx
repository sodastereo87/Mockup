import React from 'react';
import locationCSS from './location.module.css'

interface ParagraphComponentProps {
  content: string;
}

const Paragraph: React.FC<ParagraphComponentProps> = ({ content }) => {
  return (
    <div>
      <p className={locationCSS.par}>{content}</p>
    </div>
  );
};

export default Paragraph;
