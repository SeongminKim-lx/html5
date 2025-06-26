<html>
  <head>
    <script>
       navigator.geolocation.getCurrentPosition( (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        console.log(`위도: ${lat}, 경도: ${lon}`);
        console.log(`정확도: ${accuracy} 미터`);
       });
    </script>    
  </head>
  <body>
    <h2>위치</h2>    
  </body>
 </html>  