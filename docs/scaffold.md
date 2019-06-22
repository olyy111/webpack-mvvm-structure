## TODOLIST
- [ ] typescript和css-module的结合
### typescript和css-module的结合
css-modules-typescript-loader, 利用这个loader

[solutions to this problem](https://www.npmjs.com/search?q=css%20modules%20typescript%20loader)

[some discussion](https://github.com/Quramy/typed-css-modules/issues/2#ref-issue-245213302)  

在开启css-loader的modules: true之后

只能这样
```javascript
<h2 className={styles.title}>hello， 这是一个react应用</h2>
```
这样就不可以了
```javascript
<h2 className="title">hello， 这是一个react应用</h2>
```