import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/app/component/ui/3d-card';

export function Grid({
  items,
  emptyCount = 15,
}: {
  items: { name: string }[];
  emptyCount?: number;
}) {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-6 w-full h-full">
      {items
        .concat(Array(emptyCount).fill(null))
        .slice(0, emptyCount)
        .map((cert, idx) =>
          cert ? (
            <CardContainer key={cert.name + idx} className="h-full w-full">
              <CardBody className="h-full w-full">
                <CardItem className="h-full w-full flex items-center justify-center bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 text-white text-center text-lg font-semibold">
                  {cert.name}
                </CardItem>
              </CardBody>
            </CardContainer>
          ) : (
            <div
              key={`empty-${idx}`}
              className="h-full w-full bg-neutral-800 rounded-lg border border-neutral-700 opacity-40"
            />
          )
        )}
    </div>
  );
}
