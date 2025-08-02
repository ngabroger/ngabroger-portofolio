'use client';
import { useState } from 'react';

import { Timeline } from '@/components/ui/timeline';
export default function PathPage() {
  const pathSteps = [
    {
      title: 'Graduate on CCIT FTUI ',
      date: 'Jan 2023',
      description: 'Graduated from CCIT FTUI with a focus on Software Engineering.',
    },
    {
      title: 'Ungraduated on Politeknik Negeri Jakarta',
      date: 'August 2022',
      description: 'Still on my way to graduate from Politeknik Negeri Jakarta.',
    },
    {
      title: 'Graduate on Bangkit Academy',
      date: 'January 2025',
      description:
        'Graduated from Bangkit Academy with Distinction Score, a Google-Android Developer program focused on Kotlin.',
    },
    {
      title: 'Internship at PT. Amanah Karya Indonesia',
      date: 'January 2025',
      description: 'Internship at PT. Amanah Karya Indonesia, focusing on Android development.',
    },
    {
      title: 'Graduate on at Indosat Ooredoo Hutchison Digital Camp',
      date: 'May 2025',
      description: 'Internship at PT. Amanah Karya Indonesia, focusing on Android development.',
    },
    {
      title: 'Internship on at PT. Astra Otoparts Tbk',
      date: 'July 2025',
      description: 'Internship at PT. Astra Otoparts Tbk, focusing on Web development.',
    },
  ];

  // Format data untuk Timeline
  const timelineData = pathSteps.map((step) => ({
    title: step.title,
    content: (
      <div>
        <div className="text-sm text-white font-semibold mb-1">{step.date}</div>
        <div className="text-neutral-400">{step.description}</div>
      </div>
    ),
  }));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full p-0 m-0 ">
      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
      <div className="h-screen px-4 md:px-8 lg:px-10 py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white text-center mt-10 mb-4">Still Farming</h2>
        <p className="text-neutral-400 max-w-2xl text-center">
          Like a farmer tending to their crops, I'm still nurturing my skills and growing new ones
          every day. The journey isn't over—I'm planting seeds, pulling weeds, and waiting for the
          next big harvest of knowledge!
        </p>
      </div>
    </div>
  );
}
