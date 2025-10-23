import { useEffect, useRef } from "react";

const halfGap = 5;

const useCarouselAnimation = (isRight: boolean) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const positionDecreaseRate = isRight ? -0.5 : 0.5;

  useEffect(() => {
    const trackElement = trackRef.current;
    if (!trackElement) return;

    const maxScrollWidth = trackElement.scrollWidth / 2;
    let position = isRight ? -maxScrollWidth : 0;
    trackElement.style.transform = `translateX(${position}px)`;

    let animationFrameId: number;

    const animate = () => {
      position -= positionDecreaseRate;

      if (isRight) {
        if (position >= 0) position = -(maxScrollWidth + halfGap);
      } else if (Math.abs(position) >= maxScrollWidth) position = halfGap;

      trackElement.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRight, positionDecreaseRate]);

  return trackRef;
};

export default useCarouselAnimation;
