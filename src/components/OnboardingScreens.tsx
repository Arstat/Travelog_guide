import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Shield, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

const onboardingData = [
  {
    id: 1,
    icon: <MapPin className="w-16 h-16 text-blue-500" strokeWidth={1.5} />,
    title: "Track Your Journeys",
    description: "Automatically detect and record your daily trips across India to help improve transportation planning."
  },
  {
    id: 2,
    icon: <Shield className="w-16 h-16 text-green-500" strokeWidth={1.5} />,
    title: "Your Privacy Matters",
    description: "All data is anonymized and secure. We never store personal information or share individual travel patterns."
  },
  {
    id: 3,
    icon: <BarChart3 className="w-16 h-16 text-blue-500" strokeWidth={1.5} />,
    title: "Building Better Transport",
    description: "Your contributions help create data-driven insights for smarter public transportation and infrastructure planning."
  }
];

interface OnboardingScreensProps {
  onComplete: () => void;
}

export function OnboardingScreens({ onComplete }: OnboardingScreensProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [agreedToShare, setAgreedToShare] = useState(false);

  const isLastStep = currentStep === onboardingData.length - 1;

  const handleNext = () => {
    if (isLastStep && agreedToShare) {
      onComplete();
    } else if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentData = onboardingData[currentStep];

  return (
    <div className="h-full bg-white flex flex-col" style={{ height: '748px' }}>
      {/* Header with step indicator */}
      <div className="flex items-center justify-between px-6 py-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="text-gray-600"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="flex space-x-2">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center mb-10">
          <div className="mb-8 flex justify-center">
            {currentData.icon}
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">
            {currentData.title}
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-xs px-4">
            {currentData.description}
          </p>
        </div>

        {/* Privacy checkbox on last step */}
        {isLastStep && (
          <div className="mb-8">
            <div className="flex items-start space-x-3 max-w-sm">
              <Checkbox
                id="privacy-agreement"
                checked={agreedToShare}
                onCheckedChange={(checked) => setAgreedToShare(checked as boolean)}
                className="mt-1"
              />
              <label
                htmlFor="privacy-agreement"
                className="text-sm text-gray-600 leading-relaxed cursor-pointer"
              >
                I agree to share anonymized travel data to help improve India's transportation system
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Bottom navigation */}
      <div className="p-6">
        <Button
          onClick={handleNext}
          disabled={isLastStep && !agreedToShare}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl"
          size="lg"
        >
          {isLastStep ? 'Get Started' : 'Continue'}
          {!isLastStep && <ChevronRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </div>
  );
}