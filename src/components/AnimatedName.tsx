'use client';

import { useNameTransition, useBlinkingCursor } from '@/hooks/useTypewriter';

export const AnimatedName = () => {
  const name ="Israel Arcos"
  const { text, isComplete } = useNameTransition(name);
  const showCursor = useBlinkingCursor(!isComplete);

  return (
    <span className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold text-green-400">
      {text}
      {showCursor && (
        <span className="text-green-400 animate-pulse">|</span>
      )}
    </span>
  );
};
