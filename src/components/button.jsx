import React from 'react';

export default function Button({ text, onClick, href, className = '', children, type = 'button', ...rest }) {
  const base = 'inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors';
  const styles = 'bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300';
  const combined = `${base} ${styles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={combined} {...rest}>
        {text || children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined} {...rest}>
      {text || children}
    </button>
  );
}
