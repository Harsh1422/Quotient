import React, { useState } from 'react';
import './FAQ.css';

const CollapseElement = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="collapse-element">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span>{title}</span>  {isCollapsed ? '+' : '-'}
      </div>
      {!isCollapsed && <div className="collapse-content">{content}</div>}
    </div>
  );
};

function FAQ() {
  return (
    <div className="FAQ">
      <div className="FAQHeader">
        <h3>Need Answers?</h3>
        <p>Check out our most commonly asked questions below to find the information you need.</p>
      </div>
      <div className="collapse-group">
        <CollapseElement title="What is Manage Wise and what does it offer?" content="Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more." />
        <CollapseElement title="Is Manage Wise suitable for small businesses and larger enterprises alike?" content="Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes." />
        <CollapseElement title="Can I access Manage Wise from different devices and platforms?" content="Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices." />
        <CollapseElement title="What kind of support options do you offer to users?" content="We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise." />
        <CollapseElement title="How secure is the data stored within Manage Wise?" content="Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected." />
      </div>
    </div>
  );
}

export default FAQ;
