const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/cursos').get((request, response) => {
  response.send(CURSOS);
});

app.route('/api/cursos').post((request, response) => {
  let curso = request.body;

  const firstId = CURSOS ? Math.max.apply(null, CURSOS.map(cursoIterator => cursoIterator.id)) + 1 : 1;
  curso.id = firstId;
  CURSOS.push(curso);
  

  response.status(201).send(curso);
});

app.route('/api/cursos/:id').put((request, response) => {
  const cursoId = +request.params['id'];
  const curso = request.body;

  const index = CURSOS.findIndex(cursoIterator => cursoIterator.id === cursoId);
  CURSOS[index] = curso;

  response.status(200).send(curso);
});

app.route('/api/cursos/:id').get((request, response) => {
  const cursoId = +request.params['id'];

  response.status(200).send(CURSOS.find(cursoIterator => cursoIterator.id === cursoId));
});

app.route('/api/cursos/:id').delete((request, response)=> {
  const cursoId = +request.params['id'];
  CURSOS = CURSOS.filter(cursoIterator => cursoIterator.id !== cursoId);
  
  response.status(204).send({});
});

var CURSOS = [
  {
      id: 1,
      name: 'Angular: CLI',
      releaseDate: '17/08/2021',
      description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
      duration: 120,
      code: 'XLF-1212',
      rating: 3,
      price: 12.99,
      imageUrl: '/assets/images/cli.png',
  },
  {
      id: 2,
      name: 'Angular: Forms',
      releaseDate: '17/08/2021',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
      duration: 80,
      code: 'DWI-3412',
      rating: 3.5,
      price: 24.99,
      imageUrl: '/assets/images/forms.png',
  },
  {
      id: 3,
      name: 'Angular: HTTP',
      releaseDate: '17/08/2021',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
      duration: 80,
      code: 'KPL-0913',
      rating: 4.0,
      price: 36.99,
      imageUrl: '/assets/images/http.png',
  },
  {
      id: 4,
      name: 'Angular: Router',
      releaseDate: '17/08/2021',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
      duration: 80,
      code: 'OHP-1095',
      rating: 4.5,
      price: 46.99,
      imageUrl: '/assets/images/router.png',
  },
  {
      id: 5,
      name: 'Angular: Animations',
      releaseDate: '17/08/2021',
      description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
      duration: 80,
      code: 'PWY-9381',
      rating: 5,
      price: 56.99,
      imageUrl: '/assets/images/animations.png',
  }
];