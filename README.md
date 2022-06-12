# sample-nextjs-main
公開サイトのリンク

https://nextjs-blog-todos-chi-ten.vercel.app/

以下のサンプルコードを含む。
- 40x対応
- 50x対応
- sitemap対応
- RSS対応
- リダイレクト方法
- トレイリングスラッシュ対応
- 単体テスト
- Viewのテスト


## 開始方法

リポジトリをクローン

```bash
git clone https://github.com/ichizokichinosuke/sample-nextjs-main.git
```

development serverを起動

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開く。

## 40x対応、50x対応
参考（公式ドキュメント）

https://nextjs.org/docs/advanced-features/custom-error-page

- next.jsはデフォルトで404エラーページと500エラーページを提供しており、何も設定しなくてもそれらが表示される。
- pages/404.js, pages/500.js をそれぞれ作成することで表示内容をカスタマイズ可能。
- 404エラーページ
    - https://nextjs-blog-todos-chi-ten.vercel.app/no-exist-page
- 500エラーページに関しては未検証


## sitemap対応
参考（記事）

https://fwywd.com/tech/next-sitemap

 サイトマップリンク

## RSS対応
## トレイリングスラッシュ対応
## 単体テスト、Viewのテスト