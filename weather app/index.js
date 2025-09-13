 async function getWeather() {
      const location = document.getElementById("locationInput").value;
      const resultDiv = document.getElementById("result");

      if (!location) {
        resultDiv.innerHTML = "Please enter a location.";
        resultDiv.style.animation = "fadeInResult 1s ease forwards";
        return;
      }

      const apiKey = "56e19770aa984f7ca8b200729250704";
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Location not found");

        const data = await response.json();
        const temp = data.current.temp_c;
        resultDiv.innerHTML = `Temperature in ${location}: <strong>${temp}°C</strong>`;
        resultDiv.style.animation = "fadeInResult 1s ease forwards";
      } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
        resultDiv.style.animation = "fadeInResult 1s ease forwards";
      }
    }