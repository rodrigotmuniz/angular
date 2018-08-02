import { TesteModule } from './teste.module';

describe('TesteModule', () => {
  let testeModule: TesteModule;

  beforeEach(() => {
    testeModule = new TesteModule();
  });

  it('should create an instance', () => {
    expect(testeModule).toBeTruthy();
  });
});
