import { Home, Clock, Map, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: Home
    },
    {
      id: 'history',
      label: 'History',
      icon: Clock
    },
    {
      id: 'map',
      label: 'Map',
      icon: Map
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: User
    }
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40" style={{ height: '88px' }}>
      {/* Safe area for iPhone 14 home indicator */}
      <div className="flex items-center justify-around pt-2 pb-6 px-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center space-y-2 py-3 px-4 rounded-xl transition-colors ${
                isActive
                  ? 'text-blue-500'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <Icon 
                className={`w-6 h-6 ${isActive ? 'stroke-2' : 'stroke-1.5'}`} 
              />
              <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}