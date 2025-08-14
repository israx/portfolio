'use client';

import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        // Deleting characters
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        
        if (currentText.length === 1) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => 
            loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)
          );
        }
      } else {
        // Typing characters
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        
        if (currentText.length === currentWord.length - 1) {
          if (currentWordIndex < words.length - 1 || loop) {
            setIsPaused(true);
          }
        }
      }
    }, isDeleting ? deleteSpeed : isPaused ? delayBetweenWords : typeSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentWordIndex,
    words,
    typeSpeed,
    deleteSpeed,
    delayBetweenWords,
    loop,
  ]);

  return {
    text: currentText,
    isComplete: currentWordIndex === words.length - 1 && currentText === words[words.length - 1],
  };
};

// Special hook for A.I -> Arcos Israel transition
export const useNameTransition = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    'A.I',      // Start
    'A.',       // Delete I
    'A',        // Delete .
    'Ar',       // Add r
    'Arc',      // Add c
    'Arco',     // Add o
    'Arcos',    // Add s
    'Arcos ',   // Add space
    'Arcos I',  // Add I
    'Arcos Is', // Add s
    'Arcos Isr', // Add r
    'Arcos Isra', // Add a
    'Arcos Israe', // Add e
    'Arcos Israel' // Add l
  ];

  useEffect(() => {
    if (currentStep >= steps.length) {
      setIsComplete(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(steps[currentStep]);
      setCurrentStep(prev => prev + 1);
    }, currentStep === 0 ? 1000 : 200); // Wait longer at start, then type normally

    return () => clearTimeout(timeout);
  }, [currentStep]);

  return { text: displayText, isComplete };
};

// Simple cursor blinking hook
export const useBlinkingCursor = (isVisible: boolean = true) => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, [isVisible]);

  return showCursor;
};
