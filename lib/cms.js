import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const cmsDirectory = path.join(process.cwd(), "cms");
const postsDirectory = path.join(cmsDirectory, "posts");

const getJson = async (src) => {
  const filePath = path.join(cmsDirectory, src);
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

const getMarkdown = async (src) => {
  const fullPath = path.join(cmsDirectory, src);
  const fileContents = await fs.readFile(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the content
  return {
    contentHtml,
    ...matterResult.data
  };
};

export async function getSettings() {
  const result = await getJson("settings.json");
  const { theme, md, fontSize, images } = result.ogImage;
  result.ogImage = `https://og-image.now.sh/${encodeURI(
    result.title
  )}.png?theme=${theme}&md=${md}&fontSize=${fontSize}&images=${encodeURI(
    images
  )}`;
  return result;
}

export async function getServices() {
  return await getJson("services.json");
}

export async function getProjects() {
  return await getJson("projects.json");
}

export async function getVideos() {
  return await getJson("videos.json");
}

export async function getHero() {
  return getMarkdown("hero.md");
}

export async function getAbout() {
  return getMarkdown("about.md");
}

/* Posts */

export async function getPostIds() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, "")
      }
    };
  });
}

export async function getPosts() {
  const fileNames = await fs.readdir(postsDirectory);
  const items = [];

  for (const fileName of fileNames) {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    items.push({
      id,
      html: contentHtml,
      ...matterResult.data
    });
  }
  return items.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostById(id) {
  const fileName = `${id}.md`;
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return {
    id,
    html: contentHtml,
    ...matterResult.data
  };
}
