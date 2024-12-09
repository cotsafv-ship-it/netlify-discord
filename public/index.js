// index.js

document.getElementById('fetchData').addEventListener('click', async function() {
    try {
      // Send a request to the deployed Netlify function endpoint
      const response = await fetch('https://netlify-discord.netlify.app/.netlify/functions/app');
      
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the JSON response
      const data = await response.json();  // Parse JSON if the function returns JSON
      document.getElementById('functionResponse').innerHTML = `
        <h2>${data.message}</h2>
        <p>${data.description}</p>
      `;
    } catch (error) {
      console.error('Error fetching function:', error);
      document.getElementById('functionResponse').innerHTML = 'Error: ' + error.message;
    }
  });
  