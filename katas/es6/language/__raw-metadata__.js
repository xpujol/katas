import {SKILL_LEVEL} from '../../skill-levels.js';

const TEMPLATE_STRING_BASICS = 1;
const TEMPLATE_STRING_MULTILINE = 2;
const TEMPLATE_STRING_TAGGED = 3;
const TEMPLATE_STRING_RAW = 4;
const ARROW_FUNCTION_BASICS = 5;
const ARROW_FUNCTION_BINDING = 6;
const LET = 7;
const CONST = 8;
const OBJECT_LITERAL_BASICS = 9;
const DESTRUCTURING_ARRAY = 10;

const DESTRUCTURING_STRING = 11;
const DESTRUCTURING_OBJECT = 12;
const DESTRUCTURING_DEFAULTS = 13;
const DESTRUCTURING_PARAMETERS = 14;
const DESTRUCTURING_RENAME = 15;
const OBJECT_LITERAL_COMPUTED_PROPERTIES = 16;
const UNICODE_IN_STRINGS = 17;
const REST_OPERATOR_AS_PARAMETER = 18;
const REST_OPERATOR_WITH_DESTRUCTURING = 19;

const SPREAD_WITH_ARRAYS = 20;
const SPREAD_WITH_STRINGS = 21;
const CLASS_CREATION = 22;
const CLASS_ACCESSORS = 23;
const CLASS_STATIC = 24;
const CLASS_EXTENDS = 25;
const CLASS_MORE_EXTENDS = 26;
const CLASS_SUPER_IN_METHOD = 27;
const CLASS_SUPER_IN_CONSTRUCTOR = 28;
const ARRAY_FROM = 29;

const ARRAY_OF = 30;
const ARRAY_FILL = 31;
const ARRAY_FIND = 32;
const ARRAY_FIND_INDEX = 33;
const SYMBOL_BASICS = 34;
const SYMBOL_FOR = 35;
const SYMBOL_KEY_FOR = 36;
const ITERATOR_ARRAY = 37;
const ITERATOR_STRING = 38;
const ITERATOR_PROTOCOL = 39;

const ITERATOR_USAGES = 40;
const ARRAY_ENTRIES = 41;
const ARRAY_KEYS = 42;
const ARRAY_VALUES = 43;
const MAP_BASICS = 44;
const MAP_GET = 45;
const MAP_SET = 46;
const SET_BASICS = 47;
const SET_ADD = 48;
const GENERATOR_CREATION = 49;

const GENERATOR_ITERATOR = 50;
const GENERATOR_YIELD = 51;
const GENERATOR_SEND_VALUE = 52;
const MAP_INITIALIZE = 53;
const OBJECT_IS = 54;
const NUMBER_ISINTEGER = 55;
const GENERATOR_SEND_FUNCTION = 56;
const DEFAULT_PARAMETERS_BASICS = 57;
const REFLECT_BASICS = 58;
const REFLECT_APPLY = 59;
const REFLECT_GET_PROTOTYPE_OF = 60;
const MODULES_IMPORT = 61;
const MAP_HAS = 62;
const STRING_INCLUDES = 63;
const SET_DELETE = 64;
const SET_API = 65;

const TAG_SPECIFICATION = 'spec';
const TAG_MDN = 'mdn';
const TAG_VIDEO = 'video';
const TAG_ARTICLE = 'article';
const TAG_DOCS = 'docs';
export const all = {
  name: 'ES6 Katas',
  groups: {
    'Template strings': {
      items: {
        [TEMPLATE_STRING_BASICS]: {
          name: 'basics',
          description: 'A template string, is wrapped in backticks.',
          path: 'template-strings/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [TEMPLATE_STRING_MULTILINE]: {
          name: 'multiline',
          description: 'Template strings, can be multiline.',
          path: 'template-strings/multiline',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS
          ]
        },
        [TEMPLATE_STRING_TAGGED]: {
          name: 'tagged',
          description: 'Tagged template strings are preceeded by an expression.',
          path: 'template-strings/tagged',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS
          ]
        },
        [TEMPLATE_STRING_RAW]: {
          name: '`raw` property',
          description: 'The `raw` property accesses the string as it was entered.',
          path: 'template-strings/raw',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            TEMPLATE_STRING_BASICS,
            TEMPLATE_STRING_TAGGED
          ]
        }
      }
    },
    'Arrow functions': {
      items: {
        [ARROW_FUNCTION_BASICS]: {
          name: 'basics',
          description: 'Arrow functions are a more convinient and shorter way to write a function.',
          path: 'arrow-functions/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [ARROW_FUNCTION_BINDING]: {
          name: 'function binding',
          description: 'Arrow functions have lexical `this`, no dynamic `this`.',
          path: 'arrow-functions/binding',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            ARROW_FUNCTION_BASICS,
            CLASS_CREATION
          ]
        }
      }
    },
    'Block scope': {
      items: {
        [LET]: {
          name: '`let` declaration',
          description: '`let` restricts the scope of the variable to the current block.',
          path: 'block-scoping/let',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [CONST]: {
          name: '`const` declaration',
          description: '`const` is like `let` plus read-only.',
          path: 'block-scoping/const',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET
          ]
        }
      }
    },
    'Object literal': {
      items: {
        [OBJECT_LITERAL_BASICS]: {
          name: 'basics',
          description: 'ES6 has new shorthands for objects.',
          path: 'object-literal/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            ARROW_FUNCTION_BASICS, 
            CONST
          ]
        },
        [OBJECT_LITERAL_COMPUTED_PROPERTIES]: {
          name: 'computed properties',
          description: 'Object literal properties may be computed values.',
          path: 'object-literal/computed-properties',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            OBJECT_LITERAL_BASICS,
            CONST
          ]
        }
      }
    },
    'Destructuring': {
      items: {
        [DESTRUCTURING_ARRAY]: {
          name: 'array',
          description: 'Destructuring arrays allows for more concise.',
          path: 'destructuring/array',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            TEMPLATE_STRING_BASICS,
            //FOR_OF
          ]
        },
        [DESTRUCTURING_STRING]: {
          name: 'string',
          description: 'Destructuring can also be done on strings.',
          path: 'destructuring/string',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            UNICODE_IN_STRINGS
          ]
        },
        [DESTRUCTURING_OBJECT]: {
          name: 'object',
          description: 'Destructuring objects is a core concepts for modules and more.',
          path: 'destructuring/object',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            OBJECT_LITERAL_BASICS
          ]
        },
        [DESTRUCTURING_DEFAULTS]: {
          name: 'defaults',
          description: 'When destructuring you can also use default values.',
          path: 'destructuring/defaults',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST,
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT
          ]
        },
        [DESTRUCTURING_PARAMETERS]: {
          name: 'parameters',
          description: 'Destructuring function parameters.',
          path: 'destructuring/parameters',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT,
            ARROW_FUNCTION_BASICS
          ]
        },
        [DESTRUCTURING_RENAME]: {
          name: 'rename',
          description: 'Rename variables while destructuring.',
          path: 'destructuring/rename',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            DESTRUCTURING_ARRAY,
            DESTRUCTURING_OBJECT,
            DESTRUCTURING_DEFAULTS,
            CONST,
            ARROW_FUNCTION_BASICS
          ]
        }
      }
    },
    'Unicode': {
      items: {
        [UNICODE_IN_STRINGS]: {
          name: 'in strings',
          description: 'How to use unicode in strings.',
          path: 'unicode/in-strings',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            CONST,
            TEMPLATE_STRING_BASICS
          ]
        }
      }
    },
    'Rest operator': {
      items: {
        [REST_OPERATOR_AS_PARAMETER]: {
          name: 'as parameter',
          description: 'Use the rest operator as parameter.',
          path: 'rest/as-parameter',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        [REST_OPERATOR_WITH_DESTRUCTURING]: {
          name: 'with destructuring',
          description: 'Use the rest operator with destructuring.',
          path: 'rest/with-destructuring',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Spread operator': {
      items: {
        [SPREAD_WITH_ARRAYS]: {
          name: 'with arrays',
          description: 'Spread operator in use with arrays.',
          path: 'spread/with-arrays',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        [SPREAD_WITH_STRINGS]: {
          name: 'with strings',
          description: 'Apply spread operator on strings.',
          path: 'spread/with-strings',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Class': {
      items: {
        [CLASS_CREATION]: {
          name: 'creation',
          description: 'Create a class.',
          path: 'class/creation',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [CLASS_ACCESSORS]: {
          name: 'accessors',
          description: 'Getter+setters as class properties.',
          path: 'class/accessors',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        [CLASS_STATIC]: {
          name: 'static',
          description: 'Use of the static keyword inside a class.',
          path: 'class/static',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [CLASS_EXTENDS]: {
          name: 'extends',
          description: 'How to do inheritance, using `extends`.',
          path: 'class/extends',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [CLASS_MORE_EXTENDS]: {
          name: 'more extends',
          description: 'More in depth `extends` stuff',
          path: 'class/more-extends',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: []
        },
        [CLASS_SUPER_IN_METHOD]: {
          name: 'super in method',
          description: 'Use of `super` inside a method.',
          path: 'class/super-in-method',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        [CLASS_SUPER_IN_CONSTRUCTOR]: {
          name: 'super in constructor',
          description: 'Use of `super` inside the constructor.',
          path: 'class/super-in-constructor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        }
      }
    },
    'Array': {
      items: {
        [ARRAY_FROM]: {
          name: '`Array.from()`',
          description: 'Convert a not-array into an array.',
          path: 'array-api/from',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARRAY_OF]: {
          name: '`Array.of()`',
          description: '`Array.of` creates an array with the given arguments as elements.',
          path: 'array-api/of',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARRAY_FILL]: {
          name: '`[].fill()`',
          description: '`[].fill` can fill up an array with one value.',
          path: 'array-api/fill',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [],
          links: {
            discussions: [
              {
                url: 'https://github.com/tddbin/es6katas.org/issues/9',
                comment: 'A discussion in a github issue, about how to use this kata.'
              }
            ],
            documentation: [
              {
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill',
                comment: 'API doc on MDN.',
                tags: [TAG_MDN, TAG_DOCS]
              }
            ]
          }
        },
        [ARRAY_FIND]: {
          name: '`[].find()`',
          description: '`[].find` makes finding items in arrays easier.',
          path: 'array-api/find',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARRAY_FIND_INDEX]: {
          name: '`[].findIndex()`',
          description: '`[].findIndex` makes finding items in arrays easier.',
          path: 'array-api/findIndex',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ARRAY_ENTRIES]: {
          name: '`[].entries()`',
          description: '`[].entries()` returns an iterator object with all entries.',
          path: 'array-api/entries',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, ARRAY_FROM, ITERATOR_PROTOCOL]
        },
        [ARRAY_KEYS]: {
          name: '`[].keys()`',
          description: '`[].keys()` returns an iterator for all keys in the array.',
          path: 'array-api/keys',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ARRAY_FROM, ITERATOR_PROTOCOL]
        },
        [ARRAY_VALUES]: {
          name: '`[].values()`',
          description: '`[].values()` returns an iterator for all values in the array',
          path: 'array-api/values',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [CONST, DESTRUCTURING_ARRAY, ITERATOR_PROTOCOL]
        }
      }
    },
    'Symbol': {
      items: {
        [SYMBOL_BASICS]: {
          name: 'basics',
          description: 'Symbol basics.',
          path: 'symbol/basics',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        [SYMBOL_FOR]: {
          name: '`Symbol.for()`',
          description: '`Symbol.for()` for registering Symbols globally.',
          path: 'symbol/for',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: []
        },
        [SYMBOL_KEY_FOR]: {
          name: '`Symbol.keyFor()`',
          description: '`Symbol.keyFor()` gets the symbol key for a given symbol.',
          path: 'symbol/keyFor',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [SYMBOL_FOR]
        }
      }
    },
    'Iterator': {
      items: {
        [ITERATOR_ARRAY]: {
          name: 'array',
          description: '',
          path: 'iterator/array',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [ITERATOR_STRING]: {
          name: 'string',
          description: '',
          path: 'iterator/string',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            SYMBOL_BASICS, 
            ITERATOR_ARRAY
          ]
        },
        [ITERATOR_PROTOCOL]: {
          name: 'protocol',
          description: '',
          path: 'iterator/protocol',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: []
        },
        [ITERATOR_USAGES]: {
          name: 'usage',
          description: '',
          path: 'iterator/usages',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            LET, 
            DESTRUCTURING_ARRAY, DESTRUCTURING_OBJECT, 
            SYMBOL_BASICS, 
            ITERATOR_PROTOCOL, 
            SPREAD_WITH_ARRAYS
          ]
        }
      }
    },
    'Map': {
      items: {
        [MAP_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'map/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        },
        [MAP_GET]: {
          name: '`map.get()`',
          description: '',
          path: 'map/get',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [ITERATOR_ARRAY]
        },
        [MAP_SET]: {
          name: '`map.set()`',
          description: '',
          path: 'map/set',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: []
        },
        [MAP_INITIALIZE]: {
          name: 'initialize',
          description: 'Initializing a map with values.',
          path: 'map/initialize',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            LET, CONST,
            ARRAY_FROM,
            MAP_BASICS, MAP_SET
          ]
        },
        [MAP_HAS]: {
          name: '`map.has()`',
          description: 'Indicates whether an element with a key exists.',
          path: 'map/has',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            MAP_BASICS,
            MAP_SET
            //MAP_DELETE
          ],
          links: {
            various: {
              url: 'https://www.youtube.com/watch?v=71aX1z0SzZU',
              comment: 'A video (15min) documenting how this kata was created.',
              tags: [TAG_VIDEO]
            } 
          }
        }
      }
    },
    'Set': {
      items: {
        [SET_BASICS]: {
          name: 'basics',
          description: '',
          path: 'set/basics',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: []
        },
        [SET_ADD]: {
          name: '`set.add()`',
          description: 'Appends a new element to the end of a Set object.',
          path: 'set/add',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            SET_BASICS
          ]
        },
        [SET_DELETE]: {
          name: '`set.delete()`',
          description: 'Removes an element from a set.',
          path: 'set/delete',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            SET_BASICS,
            SET_ADD
          ]
        },
        [SET_API]: {
          name: 'the API',
          description: '`Set` API overview.',
          path: 'set/api',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET, CONST,
            ARRAY_FROM,
            SET_BASICS, SET_ADD, SET_DELETE,
            // SET_SIZE, SET_CLEAR, SET_ENTRIES, SET_HAS, SET_KEYS, SET_VALUES, SET_ITERATOR
            ARROW_FUNCTION_BASICS,
            SPREAD_WITH_ARRAYS
          ],
          links: [
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set',
              comment: '',
              tags: [TAG_MDN, TAG_DOCS]
            }
          ]
        }
      }
    },
    'Generator': {
      links: [
        {
          url: 'https://hacks.mozilla.org/2015/05/es6-in-depth-generators/',
          comment: 'ES6 In Depth: Generators',
          tags: [TAG_MDN, TAG_ARTICLE]
        },
        {
          url: 'https://hacks.mozilla.org/2015/07/es6-in-depth-generators-continued/',
          comment: 'ES6 In Depth: Generators, continued',
          tags: [TAG_MDN, TAG_ARTICLE]
        },
        {
          url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generator-objects',
          comment: 'The specification chapter about generators.',
          tags: [TAG_SPECIFICATION]
        },
        {
          url: 'http://davidwalsh.name/es6-generators',
          comment: 'The article "The Basics Of ES6 Generators".',
          tags: [TAG_ARTICLE]
        }
      ],
      items: {
        [GENERATOR_CREATION]: {
          name: 'creation',
          description: 'There are many ways to create a generator',
          path: 'generator/creation',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            OBJECT_LITERAL_COMPUTED_PROPERTIES,
            CLASS_CREATION
          ]
        },
        [GENERATOR_ITERATOR]: {
          name: 'iterator',
          description: 'Generators return iterable objects',
          path: 'generator/iterator',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            GENERATOR_CREATION
          ]
        },
        [GENERATOR_YIELD]: {
          name: 'yield expressions',
          description: 'The yield keyword is used to pause and resume a generator function',
          path: 'generator/yield',
          level: SKILL_LEVEL.TBD,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR
          ]
        },
        [GENERATOR_SEND_VALUE]: {
          name: 'send value to a generator',
          description: 'By calling next() with a parameter, you can pass a value to a generator.',
          path: 'generator/send-value',
          level: SKILL_LEVEL.ADVANCED,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR,
            GENERATOR_YIELD
          ],
          links: [
            {
              url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-generatorresume',
              comment: 'The part in the spec, that describes how a generator resumes.',
              tags: [TAG_SPECIFICATION]
            }
          ]
        },
        [GENERATOR_SEND_FUNCTION]: {
          name: 'send function to a generator',
          description: 'By calling next() with a function, you can pass it to the generator.',
          path: 'generator/send-function',
          level: SKILL_LEVEL.EXPERT,
          requiresKnowledgeFrom: [
            LET,
            GENERATOR_CREATION,
            GENERATOR_ITERATOR,
            GENERATOR_YIELD,
            GENERATOR_SEND_VALUE
          ]
        }
      }
    },
    
    'Object': {
      items: {
        [OBJECT_IS]: {
          name: '`Object.is()`',
          description: '`Object.is()` compares if two values are the same.',
          path: 'object-api/is',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            CONST, LET,
            MAP_BASICS
          ]
        }
      }
    },
    
    'Number': {
      items: {
        [NUMBER_ISINTEGER]: {
          name: '`Number.isInteger()`',
          description: '`Number.isInteger()` determines if a value is an integer.',
          path: 'number-api/isinteger',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        }
      }
    },
    
    'Default parameters': {
      items: {
        [DEFAULT_PARAMETERS_BASICS]: {
          name: 'Basics',
          description: 'Default parameters make function parameters more flexible.',
          path: 'default-parameters/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            ARROW_FUNCTION_BASICS,
            TEMPLATE_STRING_BASICS
          ]
        }
      }
    },
    
    'Reflect': {
      items: {
        [REFLECT_BASICS]: {
          name: 'Basics',
          description: '',
          path: 'reflect/basics',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            CLASS_CREATION,
            CLASS_EXTENDS,
            CLASS_SUPER_IN_CONSTRUCTOR
          ]
        },
        [REFLECT_APPLY]: {
          name: '`Reflect.apply()`',
          description: 'Calls a target function with given scope and arguments.',
          path: 'reflect/apply',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            LET, CONST,
            CLASS_CREATION,
            ARROW_FUNCTION_BASICS,
            ARRAY_FILL
          ]
        },
        [REFLECT_GET_PROTOTYPE_OF]: {
          name: '`Reflect.getPrototypeOf()`',
          description: 'It returns the prototype of the given object.',
          path: 'reflect/getprototypeof',
          level: SKILL_LEVEL.INTERMEDIATE,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            CLASS_CREATION,
            ARROW_FUNCTION_BASICS
          ]
        }
      }
    },
    
    'Modules': {
      items: {
        [MODULES_IMPORT]: {
          name: '`import` statement',
          description: 'Use `import` to import functions that have been exported somewhere else.',
          path: 'modules/import',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: []
        }
      }
    },
    
    'String': {
      items: {
        [STRING_INCLUDES]: {
          name: '`string.includes()`',
          description: 'Finds string within another string.',
          path: 'string-api/includes',
          level: SKILL_LEVEL.BEGINNER,
          requiresKnowledgeFrom: [
            LET,
            CONST,
            ARROW_FUNCTION_BASICS,
            DEFAULT_PARAMETERS_BASICS
          ],
          links: {
            documentation: [
              {
                url: 'http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.includes',
                comment: 'The official specification, actually quite good to read for this function.',
                tags: [TAG_SPECIFICATION]
              },
              {
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes',
                comment: 'The Mozilla Developer Network docs, contains good examples.',
                tags: [TAG_MDN, TAG_DOCS]
              }
            ]
          }
        }
      }
    }
    
  }
};
