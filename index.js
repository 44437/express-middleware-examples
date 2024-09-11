import express from 'express';

const app = express();
const MAIN_PORT = 8080;

app.listen(MAIN_PORT, () => {
  console.log(`the app is listening on port ${MAIN_PORT}`);
});

app.listen(8091, () =>
  console.log('the app is listening on port 8091'),
);
