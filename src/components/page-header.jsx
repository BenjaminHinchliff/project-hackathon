import React from 'react';

function PageHeader({ children }) {
  return (
    <h1 className="pb-2 border-bottom">{children}</h1>
  )
}

export default PageHeader;