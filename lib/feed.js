import fs from "fs";
import { Feed } from "feed";
import { getAllPostsData } from "./posts";

export async function generatedRssFeed() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
  const date = new Date();
  const author = {
    name: "Kenshiro Ata",
    email: "sample@sample.com",
    link: "https://...com",
  };

  // デフォルトになる feed の情報
  const feed = new Feed({
    title: process.env.NEXT_PUBLIC_BASE_NAME || "",
    description: process.env.NEXT_PUBLIC_BASE_DISC || "",
    id: baseUrl,
    link: baseUrl,
    language: "ja",
    image: `${baseUrl}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
    author: author,
  });

  const posts = await getAllPostsData();
//   console.log(posts);

  posts.forEach((post) => {
    // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
    const url = `${baseUrl}/posts/${post.id}`;
    feed.addItem({
      title: String(post.title),
      id: String(post.id),
      link: url,
      content: String(post.content),
      date: new Date(post.created_at),
    });
  });

  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
}
