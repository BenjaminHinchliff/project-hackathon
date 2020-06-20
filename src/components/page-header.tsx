import React from 'react';

interface Props {
  children: React.ReactNode;
};

function PageHeader({ children }:  Props) {
  return (
    <h1 className="pb-2 border-bottom">{children}</h1>
  )
}

export default PageHeader;