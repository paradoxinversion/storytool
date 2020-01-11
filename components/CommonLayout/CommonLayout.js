function withCommonLayout(Page) {
  return () => (
    <div id="app-container">
      <header id="main-header">
        <p id="logo">StoryTool</p>
      </header>
      <Page />
    </div>
  );
}

export default withCommonLayout;
