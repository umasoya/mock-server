# お手軽モックアップサーバー

`npm install && gulp watch`

## ディレクトリ

### ejs

テンプレートファイル置き場

### json

ejsに埋め込むjsonデータの置き場

### scss

scss置き場

### script

js置き場
babel で ES6 -> ES5 に変換されて public/js に保存される

### public

ejs,scss を html,css にコンパイルしたものの出力先


## gulp

`gulp [command]`

|command|description|
|:---|:---|
|ejs|`ejs/`以下の`*.ejs`をhtmlにコンパイル(`public/**/*.html`)|
|sass|`scss/`以下の`*.scss`をcssにコンパイル(`public/css/**/*.css`)|
|babel|`script/`以下の`*.js`をES5で動作するようトランスパイルする(`public/js/**/*.js`)|
|browserSync-init|`browser-sync`のサーバーを初期化する|
|reload|ブラウザリロード|
|watch|`ejs/`,`scss/`,`script/`を監視して変更があれば自動でコンパイルしてリロード|
