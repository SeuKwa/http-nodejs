import { createServer } from 'http';

createServer((req, res) => {
  res.write('Salut Sam!');
  res.end();
}).listen(process.env.PORT);
