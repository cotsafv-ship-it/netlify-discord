exports.handler = async () => {
  return {
    statusCode: 200,
    body: "<h2>Hello, Netlify Functions!</h2><p>This is a raw response from the serverless function.</p>"
  };
};
