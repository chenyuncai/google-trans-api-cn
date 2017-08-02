# translate-api
A Node.js module for working with the Google Translation.
Automatically handles bulk translations that exceed the Google Translation API query limit.

## DEMO
node ./example.js

## Npm Module

### Install
```
  $ npm install google-trans-api-cn --save
```

## Example

```javascript
  const translate = require('google-trans-api-cn');

  
  let transText = 'hello world!';
  translate.getText(transText,{to: 'zh-CN'}).then(function(text){
    console.log(text)
  });

```