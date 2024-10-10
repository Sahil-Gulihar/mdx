import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 style={{ borderBottom: '1px solid #eaecef', paddingBottom: '.3em', fontSize: '2em', marginTop: '24px', marginBottom: '16px', fontWeight: 600, lineHeight: 1.25 }} {...props} />,
    h2: (props) => <h2 style={{ borderBottom: '1px solid #eaecef', paddingBottom: '.3em', fontSize: '1.5em', marginTop: '24px', marginBottom: '16px', fontWeight: 600, lineHeight: 1.25 }} {...props} />,
    h3: (props) => <h3 style={{ fontSize: '1.25em', marginTop: '24px', marginBottom: '16px', fontWeight: 600, lineHeight: 1.25 }} {...props} />,
    h4: (props) => <h4 style={{ fontSize: '1em', marginTop: '24px', marginBottom: '16px', fontWeight: 600, lineHeight: 1.25 }} {...props} />,
    h5: (props) => <h5 style={{ fontSize: '0.875em', marginTop: '24px', marginBottom: '16px', fontWeight: 600, lineHeight: 1.25 }} {...props} />,
    h6: (props) => <h6 style={{ fontSize: '0.85em', marginTop: '24px', marginBottom: '16px', fontWeight: 600, lineHeight: 1.25, color: '#6a737d' }} {...props} />,
    p: (props) => <p style={{ marginTop: 0, marginBottom: '16px' }} {...props} />,
    a: (props) => <a style={{ color: '#0366d6', textDecoration: 'none' }} {...props} />,
    ul: (props) => <ul style={{ paddingLeft: '2em', marginTop: 0, marginBottom: '16px' }} {...props} />,
    ol: (props) => <ol style={{ paddingLeft: '2em', marginTop: 0, marginBottom: '16px' }} {...props} />,
    li: (props) => <li style={{ marginTop: '0.25em' }} {...props} />,
    blockquote: (props) => <blockquote style={{ padding: '0 1em', color: '#6a737d', borderLeft: '0.25em solid #dfe2e5', marginLeft: 0, marginRight: 0 }} {...props} />,
    table: (props) => <table style={{ borderCollapse: 'collapse', marginTop: 0, marginBottom: '16px', display: 'block', width: '100%', overflow: 'auto' }} {...props} />,
    th: (props) => <th style={{ padding: '6px 13px', border: '1px solid #dfe2e5', fontWeight: 600 }} {...props} />,
    td: (props) => <td style={{ padding: '6px 13px', border: '1px solid #dfe2e5' }} {...props} />,
    inlineCode: (props) => <code style={{ padding: '0.2em 0.4em', margin: 0, fontSize: '85%', backgroundColor: 'rgba(27,31,35,0.05)', borderRadius: '3px' }} {...props} />,
    code: ({ children, className }) => {
      const language = className ? className.replace('language-', '') : 'javascript';
      return (
        <SyntaxHighlighter 
          language={language} 
          style={dark}
          customStyle={{
            margin: '0 0 16px',
            padding: '16px',
            overflow: 'auto',
            fontSize: '85%',
            lineHeight: 1.45,
            backgroundColor: '#f6f8fa',
            borderRadius: '3px'
          }}
        >
          {children as string}
        </SyntaxHighlighter>
      );
    },
    pre: (props) => <pre style={{ margin: '0 0 16px' }} {...props} />,
    hr: () => <hr style={{ height: '0.25em', padding: 0, margin: '24px 0', backgroundColor: '#e1e4e8', border: 0 }} />,
    img: (props) => <img style={{ maxWidth: '100%', boxSizing: 'content-box' }} {...props} />,
    ...components,
  };
}