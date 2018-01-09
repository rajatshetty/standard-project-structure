import { StandardProjectStructurePage } from './app.po';

describe('standard-project-structure App', function() {
  let page: StandardProjectStructurePage;

  beforeEach(() => {
    page = new StandardProjectStructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
