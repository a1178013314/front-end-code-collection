const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;

// const sourceCode = `console.log(1);`;

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});
console.log(ast)

traverse(ast, {
  CallExpression (path, state) {
    // debugger
    console.log(path.node.callee)
      if ( types.isMemberExpression(path.node.callee) 
          && path.node.callee.object.name === 'console' 
          && ['log', 'info', 'error', 'debug'].includes(path.node.callee.property.name) 
         ) {
          const { line, column } = path.node.loc.start;
          path.node.arguments.unshift(types.stringLiteral(`filename: (${line}, ${column})`))
      }
  }
});

// const { code, map } = generate(ast);
// console.log(code);









// let packageJSON = require("../package.json")
// console.log(111111111)

// module.exports = function ({ types: babelTypes }) {
//   console.log(222222222)
//   return {
//     name: packageJSON.name,
//     visitor: {
//       Identifier(path, state) {
//         console.log(state.opts)
//         if (path.node.name === 'bad') {

//           path.node.name = 'good';
//         }
//       }
//     }
//   };
// };