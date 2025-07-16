import { notFound, useParams } from 'next/navigation';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogs } from '../../../data/blogs';

const AUTHOR_AVATAR = '/Profile.png'; // fallback avatar

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;
  const blog = useMemo(() => blogs.find(b => b.slug === slug), [slug]);

  if (!blog) return notFound();

  // Extract headings for TOC
  const headings = useMemo(() => {
    const regex = /^##\s+(.*)$/gm;
    const matches = [...blog.content.matchAll(regex)];
    return matches.map(m => m[1]);
  }, [blog.content]);

  return (
    <div className="min-h-screen bg-[#0b011d] w-full flex flex-col items-center">
      <div className="w-full relative h-[320px] md:h-[400px] flex items-end justify-start" style={{background: `url(${blog.image}) center/cover no-repeat`}}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative z-10 p-8 md:p-16">
          <div className="flex gap-2 mb-4">
            {blog.tags.map(tag => (
              <span key={tag} className="bg-[#18122B] text-[#bcb9d1] px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">{blog.title}</h1>
          <p className="text-[#cccccc] text-lg max-w-2xl mb-4">{blog.excerpt}</p>
          <div className="flex items-center gap-3 mt-4">
            <img src={AUTHOR_AVATAR} alt={blog.author} className="w-10 h-10 rounded-full border-2 border-[#916be7]" />
            <div>
              <div className="text-white font-medium">{blog.author}</div>
              <div className="text-[#bcb9d1] text-xs">{formatDate(blog.date)} &bull; {blog.readingTime}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 px-4 py-12">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="prose prose-invert max-w-none text-[#ededed] prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-2xl prose-h2:font-bold prose-p:mb-6 prose-li:marker:text-[#916be7] prose-strong:text-[#916be7] prose-blockquote:bg-[#18122B] prose-blockquote:p-4 prose-blockquote:rounded-xl prose-blockquote:text-[#bcb9d1] prose-blockquote:border-l-4 prose-blockquote:border-[#916be7]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({node, ...props}) => <h2 id={props.children?.toString().replace(/\s+/g, '-').toLowerCase()} {...props} />,
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
        {/* Table of Contents */}
        <aside className="hidden md:block w-72 flex-shrink-0 sticky top-24 self-start">
          <div className="bg-[#18122B] rounded-2xl p-6">
            <h3 className="text-white text-lg font-semibold mb-4 flex items-center gap-2"><span className="material-symbols-outlined">menu</span> On this page</h3>
            <ul className="flex flex-col gap-2">
              {headings.map(h => (
                <li key={h}>
                  <a href={`#${h.replace(/\s+/g, '-').toLowerCase()}`} className="text-[#bcb9d1] hover:text-[#916be7] text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined">chevron_right</span> {h}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
} 