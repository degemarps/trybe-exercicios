// githubApi.test.js

const { not } = require('micromatch');
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

describe('Teste a resposta do github', () => {
  test('Verifique se a resposta contém os repositórios indicados', async () => {
    const url = 'https://api.github.com/orgs/tryber/repos';

    const response = await getRepos(url);

    expect(response).toContain('sd-01-week4-5-project-todo-list');
    expect(response).toContain('sd-01-week4-5-project-meme-generator');
  });
}); 