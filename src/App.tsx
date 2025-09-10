import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { OnboardingScreens } from './components/OnboardingScreens';
import { Dashboard } from './components/Dashboard';
import { TripPopup } from './components/TripPopup';
import { TripHistory } from './components/TripHistory';
import { Profile } from './components/Profile';
import { BottomNavigation } from './components/BottomNavigation';

type AppState = 'splash' | 'onboarding' | 'main';

export default function App() {
  const [appState, setAppState] = useState<AppState>('splash');
  const [activeTab, setActiveTab] = useState('home');
  const [showTripPopup, setShowTripPopup] = useState(false);

  // Simulate splash screen delay
  useEffect(() => {
    if (appState === 'splash') {
      const timer = setTimeout(() => {
        setAppState('onboarding');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const handleOnboardingComplete = () => {
    setAppState('main');
  };

  const handleSaveTrip = () => {
    // Here you would typically save the trip to your data store
    console.log('Trip saved!');
  };

  const renderMapView = () => (
    <div className="h-full bg-gray-50 flex items-center justify-center overflow-y-auto">
      <div className="text-center px-6">
        <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🗺️</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
          Interactive Map
        </h2>
        <p className="text-lg text-gray-600 max-w-xs leading-relaxed">
          Real-time map view of India showing your travel patterns and transport hubs would appear here.
        </p>
      </div>
    </div>
  );

  if (appState === 'splash') {
    return <SplashScreen />;
  }

  if (appState === 'onboarding') {
    return <OnboardingScreens onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="relative w-full max-w-sm mx-auto bg-white" style={{ height: '844px', width: '390px' }}>
      {/* iPhone 14 Safe Area Top */}
      <div className="h-12 bg-white"></div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-hidden" style={{ height: 'calc(844px - 48px - 88px)' }}>
        {activeTab === 'home' && (
          <Dashboard onShowTripPopup={() => setShowTripPopup(true)} />
        )}
        {activeTab === 'history' && <TripHistory />}
        {activeTab === 'map' && renderMapView()}
        {activeTab === 'profile' && <Profile />}
      </div>

      {/* Bottom Navigation with iPhone 14 Safe Area */}
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Trip Popup */}
      {showTripPopup && (
        <TripPopup
          onClose={() => setShowTripPopup(false)}
          onSave={handleSaveTrip}
        />
      )}
    </div>
  );
}