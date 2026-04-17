const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 My Node App is Running (CI/CD Ready for nodejs final update printo sibin )');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});