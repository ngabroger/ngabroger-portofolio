'use client';
import { MovingBorder } from '@/components/animate/moving-border';
import React, { useLayoutEffect } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'; // Pastikan path ini benar
import gsap from 'gsap';
import { useAnimatedNavigate } from '@/components/animate/animate-navigate-provider';
export function ThreeDCardDemo() {
  const { cardRef, handleNavigate } = useAnimatedNavigate();

  useLayoutEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 1500, opacity: 0, rotateY: 180 },
        { y: 0, opacity: 1, duration: 2, rotateY: 0, ease: 'power3.out' }
      );
    }
  }, [cardRef]);
  return (
    <CardContainer className="inter-var">
      <CardBody
        ref={cardRef}
        className="bg-neutral-900 border-neutral-400 relative group/card  rounded-xl p-4 sm:p-6 md:p-8 border w-full max-w-sm  md:max-w-4xl mx-4"
      >
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6 md:gap-10">
          <div className="flex-1 w-full">
            <CardItem
              translateZ={50}
              className="text-2xl sm:text-3xl font-bold text-neutral-200 mb-4"
            >
              Hello There <span>👋</span>
            </CardItem>
            <CardItem
              as="p"
              translateZ={60}
              className="text-neutral-200 text-sm sm:text-base max-w-xl mb-6 text-justify"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis pharetra
              nulla, sed vehicula sapien. Suspendisse vitae varius ligula, fermentum sagittis
              sapien. Pellentesque vulputate consequat laoreet. Cras vel ornare nunc. Sed in sodales
              eros. Aliquam sit amet risus vitae felis aliquam pellentesque vel quis dolor.
            </CardItem>
            <div className="flex  sm:flex-row justify-center gap-6 sm:justify-start sm:gap-8 mt-4">
              <div className="relative w-fit">
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() =>
                    handleNavigate(
                      'https://drive.google.com/file/d/1cBzFLH42YglI8xqW8RSV1ZG7tpDFmBxN/view'
                    )
                  }
                  className="px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-600 rounded-xl bg-black text-white text-sm sm:text-base font-normal shadow-md hover:shadow-lg transition relative z-10"
                >
                  Check my CV
                </CardItem>
                <MovingBorder
                  rx="16"
                  ry="16"
                  color="#00fff7"
                  strokeWidth={2}
                  style={{
                    filter: 'drop-shadow(0 0 8px #00fff7) drop-shadow(0 0 16px #00fff7)',
                  }}
                  className="absolute inset-0 z-30 rounded-lg"
                />
              </div>
              <CardItem
                translateZ={20}
                as="a"
                className="flex items-center text-sm sm:text-base text-neutral-200"
                href="mailto:your@email.com"
              >
                Email Me <span className="ml-2 text-xl">📧</span>
              </CardItem>
            </div>
          </div>
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <CardItem translateZ={60}>
              <img
                src="/profile_image.jpg"
                alt="profile"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover object-top rounded-full border-4 border-white shadow-lg"
              />
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
