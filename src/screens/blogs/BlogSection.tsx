'use client';
import { useState } from 'react';
import BlogCard from '../../components/cards/BlogCard';
import { blogs } from '../../data/blogs';

// Extract unique topics from blogs data
const allTopics = Array.from(new Set(blogs.flatMap(blog => blog.tags.concat(blog.tags))));

export default function BlogSection() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Filter and sort blogs
  let filteredBlogs = blogs.filter(blog =>
    (!selectedTopic || blog.tags.includes(selectedTopic)) &&
    (blog.title.toLowerCase().includes(search.toLowerCase()) || blog.excerpt.toLowerCase().includes(search.toLowerCase()))
  );
  if (sort === 'newest') {
    filteredBlogs = filteredBlogs.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else {
    filteredBlogs = filteredBlogs.slice().sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  return (
    <div className="min-h-screen bg-[#0b011d] w-full flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto pt-16 pb-8 px-4">
        <p className="text-center text-xs font-medium tracking-[2px] text-[#bcb9d1] mb-2">THE BLOG</p>
        <h1 className="text-center text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Handpicked insights<br />from <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#916be7] to-[#ff6f91]">the pensieve</span>
        </h1>
        {/* Search bar */}
        <div className="flex justify-center mt-8">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full rounded-full px-6 py-3 bg-[#18122B] border border-[#6971a2]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#916be7] text-lg pr-16"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#bcb9d1] text-lg">Ctrl <span className="font-bold">K</span></span>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        {/* Blog list */}
        <div className="flex-1 flex flex-col gap-8">
          {filteredBlogs.map((blog, idx) => (
            <BlogCard
              key={idx}
              image={blog.image}
              tag={blog.tags[0]}
              title={blog.title}
              description={blog.excerpt}
              link={`/blogs/${blog.slug}`}
            />
          ))}
        </div>
        {/* Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 flex flex-col gap-8">
          {/* Sort dropdown */}
          <div className="bg-[#18122B] rounded-2xl p-6 mb-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-lg font-semibold">Newest First</span>
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                className="ml-auto bg-[#18122B] text-[#bcb9d1] border-none focus:outline-none"
              >
                <option value="newest">Most recent posts first</option>
                <option value="oldest">Oldest posts first</option>
              </select>
            </div>
          </div>
          {/* Topics */}
          <div className="bg-[#18122B] rounded-2xl p-6">
            <h3 className="text-white text-lg font-semibold mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {allTopics.map(topic => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic === selectedTopic ? '' : topic)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border border-[#916be7]/40 transition-all ${selectedTopic === topic ? 'bg-[#916be7] text-white' : 'bg-[#1c1140] text-[#bcb9d1]'}`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 