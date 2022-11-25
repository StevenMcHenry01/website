const Favicon = (): JSX.Element => {
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" />
      <meta name="msapplication-TileColor" content="#ca4b4b" />
      <meta name="theme-color" content="#ca4b4b" />
    </>
  );
};

export default Favicon;
