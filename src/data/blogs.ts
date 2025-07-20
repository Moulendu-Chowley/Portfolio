export interface Blog {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  excerpt: string;
  image: string;
  content: string;
  readingTime: string;
  author: string;
}

export const blogs: Blog[] = [
  {
    title: "My 2025 Stack as a Frontend Developer",
    slug: "2025-frontend-stack",
    date: "2025-03-19",
    tags: ["frontend", "tools", "productivity"],
    excerpt: "As a Frontend Developer in 2025, I&apos;ve fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack and how these tools help me build better, faster, and more maintainable projects!",
    image: "/project1.png",
    content: `# My 2025 Stack as a Frontend Developer\n\nAs a Frontend Developer in 2025, my workflow is centered around tools that enable me to work faster and more effectively.\n\n## Why the Right Stack Matters\n\nThe tools you choose shape your development experience. A well-curated stack not only boosts productivity but also makes coding enjoyable and sustainable in the long run.\n\n## My Stack\n\n- Next.js\n- Tailwind CSS\n- TypeScript\n- Vite\n- ...\n\n## Final Thoughts\n\nChoosing the right stack can dramatically improve productivity.`,
    readingTime: "4 min read",
    author: "Moulendu"
  },
  {
    title: "How to Build a Blog with Next.js and MDX",
    slug: "nextjs-mdx-blog",
    date: "2025-06-28",
    tags: ["typescript", "nextjs", "mdx"],
    excerpt: "Build a blazing fast markdown blog using Next.js and MDX with this complete walkthrough.",
    image: "/project2.png",
    content: `# How to Build a Blog with Next.js and MDX\n\nLearn how to set up a markdown-powered blog using Next.js and MDX.\n\n## Why MDX?\n\nMDX allows you to write JSX in markdown files, making your content dynamic and interactive.\n\n## Steps\n\n1. Set up Next.js\n2. Add MDX support\n3. Create your first post\n\n## Conclusion\n\nYou now have a fast, flexible blog!`,
    readingTime: "14 min read",
    author: "Moulendu"
  }
]; 