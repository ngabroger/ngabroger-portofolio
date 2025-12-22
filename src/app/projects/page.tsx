'use client';
import { useLayoutEffect, useState } from 'react';
import { useAnimatedNavigate } from '../../components/animate/animate-navigate-provider';
import gsap from 'gsap';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconWorld,
  IconDeviceMobile,
  IconServer,
  IconApps,
} from '@tabler/icons-react';
import { projects, categories, getProjectsByCategory, Project } from '../data/projects';

const categoryIcons = {
  All: IconApps,
  Web: IconWorld,
  Mobile: IconDeviceMobile,
  Server: IconServer,
};

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const { cardRef } = useAnimatedNavigate();

  useLayoutEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 1500, opacity: 0, rotateY: 180 },
        { y: 0, opacity: 1, duration: 2, rotateY: 0, ease: 'power3.out' }
      );
    }
  }, [cardRef]);

  const handleCategoryChange = (category: string) => {
    setSelected(category);
    setFilteredProjects(getProjectsByCategory(category));
  };

  return (
    <div className="w-full min-h-screen mb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            A collection of my work across web development, mobile applications, and backend
            systems. Each project represents my commitment to clean code and great user experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selected === category
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-900/30'
                    : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 hover:text-white border border-neutral-700/50'
                }`}
              >
                <Icon size={18} />
                {category}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-md ${
                    selected === category ? 'bg-white/20' : 'bg-neutral-700/50'
                  }`}
                >
                  {category === 'All' ? projects.length : getProjectsByCategory(category).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-2xl hover:from-yellow-600/20 hover:to-orange-600/20 transition-all duration-500"
            >
              <div className="bg-background rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-neutral-800/50 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium backdrop-blur-sm ${
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
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
                      title="Live Demo"
                    >
                      <IconArrowUpRight className="text-white" size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors border border-white/20"
                      title="View Code"
                    >
                      <IconBrandGithub className="text-white" size={20} />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] px-2.5 py-1 bg-neutral-800/70 text-neutral-300 rounded-md border border-neutral-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-neutral-600 mb-4">
              <IconApps size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-neutral-400">Try selecting a different category.</p>
          </div>
        )}

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-2xl inline-block">
            <div className="bg-background px-8 py-6 rounded-2xl">
              <h3 className="text-white font-semibold text-lg mb-2">
                Interested in working together?
              </h3>
              <p className="text-neutral-400 text-sm mb-4">Let's build something amazing!</p>
              <a
                href="mailto:dev.ngabroger@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 rounded-xl text-white text-sm font-medium transition-all shadow-lg shadow-yellow-900/20"
              >
                Get in Touch <IconArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
