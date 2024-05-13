import { ValidateObjectMiddleware } from './validate-object.middleware';

describe('ValidateObjectMiddleware', () => {
  it('should be defined', () => {
    expect(new ValidateObjectMiddleware()).toBeDefined();
  });
});
