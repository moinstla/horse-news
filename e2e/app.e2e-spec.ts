import { HackerNewsPage } from './app.po';

describe('hacker-news App', () => {
  let page: HackerNewsPage;

  beforeEach(() => {
    page = new HackerNewsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
