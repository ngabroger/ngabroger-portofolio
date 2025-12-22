import React from 'react';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconWorld,
  IconDeviceMobile,
  IconServer,
} from '@tabler/icons-react';
import { featuredProjects } from '@/app/data/projects';

export const CardSecondaryMain = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 md:px-6 pb-6">
      <div className="max-w-7xl w-full">
        <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-2xl">
          <div className="bg-background p-4 md:p-6 rounded-2xl">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
              <div>
                <h2 className="text-white font-bold text-2xl">Featured Projects</h2>
                <p className="text-neutral-500 text-sm mt-1">Some of my recent work</p>
              </div>
              <a
                href="/projects"
                className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium flex items-center gap-1"
              >
                View All Projects <IconArrowUpRight size={16} />
              </a>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-neutral-800/20 rounded-xl overflow-hidden border border-neutral-800/50 hover:border-neutral-700 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-40 bg-neutral-800/50 overflow-hidden">
                    {/* Actual Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          const placeholder = (e.target as HTMLImageElement).nextElementSibling;
                          if (placeholder) placeholder.classList.remove('hidden');
                        }}
                      />
                    )}

                    {/* Placeholder */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-800/80 to-neutral-900 ${
                        project.image ? 'hidden' : ''
                      }`}
                    >
                      <div className="text-neutral-600 mb-2">
                        {project.category === 'Web' && <IconWorld size={40} />}
                        {project.category === 'Mobile' && <IconDeviceMobile size={40} />}
                        {project.category === 'Server' && <IconServer size={40} />}
                      </div>
                      <span className="text-neutral-600 text-xs">No Preview</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2 z-10">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-medium backdrop-blur-sm ${
                          project.category === 'Web'
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            : project.category === 'Mobile'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                      <a
                        href={project.liveUrl}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <IconArrowUpRight className="text-white" size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <IconBrandGithub className="text-white" size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-[10px] px-2 py-1 bg-neutral-800/50 text-neutral-400 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
