'use client';
import { Timeline } from '@/components/ui/timeline';
import {
  IconSchool,
  IconBriefcase,
  IconCertificate,
  IconRocket,
  IconSeedling,
  IconArrowUpRight,
} from '@tabler/icons-react';

export default function PathPage() {
  const timelineData = [
    {
      title: '2022',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl">
            <div className="bg-background p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-blue-500/10 rounded-lg shrink-0">
                  <IconSchool className="text-blue-400" size={22} />
                </div>
                <div>
                  <span className="text-xs text-blue-400 font-medium">August 2022</span>
                  <h4 className="text-white font-semibold text-lg mt-1">
                    Started at Politeknik Negeri Jakarta
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Enrolled in Computer Engineering program, focusing on software development and
                    computer systems. Currently pursuing my degree with dedication to becoming a
                    skilled developer.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Computer Engineering
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      In Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2023',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl">
            <div className="bg-background p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-green-500/10 rounded-lg shrink-0">
                  <IconCertificate className="text-green-400" size={22} />
                </div>
                <div>
                  <span className="text-xs text-green-400 font-medium">January 2023</span>
                  <h4 className="text-white font-semibold text-lg mt-1">
                    Graduated from CCIT FTUI
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Successfully completed the program at CCIT Faculty of Engineering, University of
                    Indonesia with a focus on Software Engineering. Gained strong foundations in
                    programming and system design.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Software Engineering
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-green-500/20 text-green-400 rounded-md">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2025',
      content: (
        <div className="space-y-4">
          {/* Bangkit Academy */}
          <div className="bg-gradient-to-br from-yellow-600/20 to-background p-[1px] rounded-xl">
            <div className="bg-background p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-yellow-500/10 rounded-lg shrink-0">
                  <IconCertificate className="text-yellow-400" size={22} />
                </div>
                <div>
                  <span className="text-xs text-yellow-400 font-medium">January 2025</span>
                  <h4 className="text-white font-semibold text-lg mt-1">
                    Graduated from Bangkit Academy
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Completed the Google-supported Android Developer program with{' '}
                    <span className="text-yellow-400 font-medium">Distinction Score</span>. Mastered
                    Kotlin, Jetpack Compose, and modern Android development practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Android Development
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Kotlin
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md">
                      Distinction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PT. Amanah Karya Indonesia */}
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl">
            <div className="bg-background p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-purple-500/10 rounded-lg shrink-0">
                  <IconBriefcase className="text-purple-400" size={22} />
                </div>
                <div>
                  <span className="text-xs text-purple-400 font-medium">January 2025</span>
                  <h4 className="text-white font-semibold text-lg mt-1">
                    Internship at PT. Amanah Karya Indonesia
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Worked on Android development projects, implementing new features and improving
                    app performance. Collaborated with senior developers and gained hands-on
                    industry experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Android
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Mobile Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IDCamp */}
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl">
            <div className="bg-background p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-cyan-500/10 rounded-lg shrink-0">
                  <IconCertificate className="text-cyan-400" size={22} />
                </div>
                <div>
                  <span className="text-xs text-cyan-400 font-medium">May 2025</span>
                  <h4 className="text-white font-semibold text-lg mt-1">
                    Graduated from IDCamp by Indosat Ooredoo Hutchison
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Completed the Digital Camp program, advancing skills in modern mobile and web
                    development technologies through comprehensive training modules.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Android Expert
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-md">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PT. Astra Otoparts */}
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl">
            <div className="bg-background p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-red-500/10 rounded-lg shrink-0">
                  <IconBriefcase className="text-red-400" size={22} />
                </div>
                <div>
                  <span className="text-xs text-red-400 font-medium">July 2025</span>
                  <h4 className="text-white font-semibold text-lg mt-1">
                    Internship at PT. Astra Otoparts Tbk
                  </h4>
                  <p className="text-neutral-400 text-sm mt-2 leading-relaxed">
                    Currently working on web development projects at one of Indonesia's leading
                    automotive parts manufacturers. Building enterprise-level applications and
                    internal tools.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Web Development
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-neutral-800/70 text-neutral-300 rounded-md">
                      Enterprise
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-red-500/20 text-red-400 rounded-md">
                      Current
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            A timeline of my educational and professional journey, highlighting key milestones that
            have shaped my career as a developer.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>

      {/* Still Growing Section */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-20">
        <div className="bg-gradient-to-br from-yellow-600/10 to-background p-[1px] rounded-2xl">
          <div className="bg-background p-8 md:p-12 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center p-4 bg-yellow-500/10 rounded-full mb-6">
              <IconSeedling className="text-yellow-500" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Still Growing</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Like a farmer tending to their crops, I'm continuously nurturing my skills and
              cultivating new ones every day. The journey isn't over—I'm planting seeds, learning
              from challenges, and preparing for the next big harvest of knowledge and
              opportunities!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 rounded-xl text-white font-medium transition-all shadow-lg shadow-yellow-900/20"
              >
                <IconRocket size={18} />
                View My Projects
              </a>
              <a
                href="/certificates"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 rounded-xl text-white font-medium transition-all"
              >
                <IconCertificate size={18} />
                See Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
