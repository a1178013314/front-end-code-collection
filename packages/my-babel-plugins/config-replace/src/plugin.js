const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;


const sourceCode = `
const BASE_URL="AAAAA"

`

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous'
});

traverse(ast, {
    
    CallExpression(path, state) {
        console.log(111111111)
    }
});

const { code, map } = generate(ast);
console.log(code);