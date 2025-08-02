import React from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { motion } from 'motion/react';

export function Grid({ items }: { items: { name: string; img?: string }[] }) {
  const [previewImg, setPreviewImg] = React.useState<string | null>(null);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-h-[50vh] md:max-h-[70vh] overflow-auto p-2">
        {items.map((card, idx) => (
          <CardContainer key={card.name + idx} className="w-full">
            <CardBody className="w-full flex">
              <CardItem
                className="relative h-[200px] w-full flex flex-col items-center justify-center bg-neutral-800 rounded-lg shadow-lg border border-neutral-700 text-white text-center text-lg font-semibold overflow-hidden"
                onClick={() => card.img && setPreviewImg(card.img)}
              >
                {card.img ? (
                  <img
                    src={card.img}
                    alt={card.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-xs text-neutral-400">No Image</span>
                )}
                <span className="mb-2 z-10 absolute justify-center text-black font-medium   backdrop-blur-lg p-2 rounded-md">
                  {card.name}
                </span>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      {previewImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setPreviewImg(null)}
          >
            <img
              src={previewImg}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
