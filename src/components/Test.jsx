import React from 'react';

const gridStyles = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gridTemplateRows: 'auto auto',
  gridTemplateAreas: `
    "header header header"
    "sidebar content content"
    "footer footer footer"
  `,
  gap: '10px'
};

const headerStyle = {
  gridArea: 'header',
  backgroundColor: 'lightblue'
};

const sidebarStyle = {
  gridArea: 'sidebar',
  backgroundColor: 'lightgreen'
};

const contentStyle = {
  gridArea: 'content',
  backgroundColor: 'lightyellow'
};

const footerStyle = {
  gridArea: 'footer',
  backgroundColor: 'lightcoral'
};

const Test = () => {
  return (
    <div style={gridStyles}>
      <div style={headerStyle}>
        <h1>Header</h1>
      </div>
      <div style={sidebarStyle}>
        <p>Sidebar</p>
      </div>
      <div style={contentStyle}>
        <p>Main Content</p>
      </div>
      <div style={footerStyle}>
        <p>Footer</p>
      </div>
    </div>
  );
}

export default Test;
