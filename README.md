# google-trans-api-cn
自动调用Google翻译API，且能越过翻译查询次数的限制

A Node.js module to invoke google trans api in china and automatically handles bulk translations that exceed the Google Translation API query limit.

## Npm Module

### Install
```
  $ npm install google-trans-api-cn --S
```

## Example

```javascript
  const translate = require('google-trans-api-cn');

  var s = new Date().getTime()
  let transText = 'I love u';
  translate.transText(transText,{from: 'en', to: 'ja'}).then(function(result){
      console.log(result.text)
      var e = new Date().getTime()
      console.log('耗时： ' + (e - s))
  });

```