import React from 'react';
import locationCSS from './location.module.css'

// defines the props that this component expects
interface ParagraphComponentProps {
  content: string;
}

// declares a functional component named Paragraph that receives the content prop
const Paragraph: React.FC<ParagraphComponentProps> = ({ content }) => {
  return (
    <div>
      <p className={locationCSS.par}>{content}</p>
    </div>
  );
};

export default Paragraph;
