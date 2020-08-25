## codewars pratice

## regular expression patern

- 找出sub string 在string里面出现的次数
- 以下是'abv'在string出现的次数
- match里面是regular expression pattern 第一个参数是match 的substring
- 第二个参数是config，gi 是指global 和case insensitive 检查

```js
 'abvabvabcabcabc'.match(new RegExp('abv', 'gi'))
[ 'abv', 'abv' ]
```
