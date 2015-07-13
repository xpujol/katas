// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('new shorthands for objects', () => {

  const x = 1;
  const y = 2;

  describe('with variables', () => {
    it('use the variables name as key', () => {
      const short = {y};
      assert.deepEqual(short, {y: y});
    });
    it('works with many too', () => {
      const short = {x, y};
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  
  describe('with methods', () => {
    
    const func = () => func;

    it('uses its name', () => {
      const short = {func};
      assert.deepEqual(short, {func: func});
    });
    
    it('different key must be given explicitly, just like before ES6', () => {
      const short = {otherKey: func};
      assert.deepEqual(short, {otherKey: func});
    });
    
    it('inline function, no need for `function(){}`', () => {
      const short = {
        inlineFunc: () => 'I am inline'
      };
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
  
});
