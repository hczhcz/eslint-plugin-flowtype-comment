eslint-plugin-flowtype-comment
===

This is an ESLint preprocessor to add [Comment Types](https://flow.org/en/docs/types/comments/) support to [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype).

**WARNING: THIS IS A DIRTY HACK**

**DO NOT USE IT IN PRODUCTION ENVIRONMENT**

Usage
---

Install the package:

```bash
npm install eslint-plugin-flowtype-comment --save-dev
```

In `.eslintrc.js`:

```javascript
'parser': 'babel-eslint',
'plugins': [
    'flowtype',
    'flowtype-comment',
],
```

TODO
---

* Transform line and column numbers correctly
* Handle `flowtype/space-before-type-colon`
