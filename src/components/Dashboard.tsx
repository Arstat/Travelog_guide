import { useState } from 'react';
import { Plus, Bus, Car, Bike, Footprints, Train } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Switch } from './ui/switch';

const todaysTrips = [
  {
    id: 1,
    time: '08:30 AM',
    from: 'Home',
    to: 'Office',
    mode: 'bus',
    duration: '45 min',
    distance: '12 km'
  },
  {
    id: 2,
    time: '01:15 PM',
    from: 'Office',
    to: 'Restaurant',
    mode: 'walk',
    duration: '8 min',
    distance: '0.6 km'
  },
  {
    id: 3,
    time: '02:30 PM',
    from: 'Restaurant',
    to: 'Office',
    mode: 'walk',
    duration: '10 min',
    distance: '0.7 km'
  }
];

const getModeIcon = (mode: string) => {
  switch (mode) {
    case 'bus':
      return <Bus className="w-5 h-5 text-blue-500" strokeWidth={1.5} />;
    case 'car':
      return <Car className="w-5 h-5 text-gray-600" strokeWidth={1.5} />;
    case 'bike':
      return <Bike className="w-5 h-5 text-green-500" strokeWidth={1.5} />;
    case 'walk':
      return <Footprints className="w-5 h-5 text-orange-500" strokeWidth={1.5} />;
    case 'train':
      return <Train className="w-5 h-5 text-purple-500" strokeWidth={1.5} />;
    default:
      return <Bus className="w-5 h-5 text-blue-500" strokeWidth={1.5} />;
  }
};

interface DashboardProps {
  onShowTripPopup: () => void;
}

export function Dashboard({ onShowTripPopup }: DashboardProps) {
  const [isTracking, setIsTracking] = useState(true);

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-4 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Hello, thanks for contributing!
        </h1>
        <p className="text-lg text-gray-600">
          Saturday, September 6, 2025
        </p>
      </div>

      {/* Content */}
      <div className="px-6 space-y-6">
        {/* Tracking Status Card */}
        <Card className="p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Trip Tracking
              </h3>
              <p className="text-sm text-gray-600">
                {isTracking ? 'Currently tracking your journeys' : 'Tracking is paused'}
              </p>
            </div>
            <Switch
              checked={isTracking}
              onCheckedChange={setIsTracking}
              className="data-[state=checked]:bg-blue-500"
            />
          </div>
        </Card>

        {/* Today's Trips */}
        <div>
          <h2 className="font-semibold text-gray-900 mb-4">Today's Trips</h2>
          
          {todaysTrips.length > 0 ? (
            <div className="space-y-3">
              {todaysTrips.map((trip, index) => (
                <Card key={trip.id} className="p-4 bg-white rounded-2xl shadow-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      {getModeIcon(trip.mode)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {trip.from}
                        </span>
                        <span className="text-gray-400">→</span>
                        <span className="text-sm font-medium text-gray-900">
                          {trip.to}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>{trip.time}</span>
                        <span>•</span>
                        <span>{trip.duration}</span>
                        <span>•</span>
                        <span>{trip.distance}</span>
                      </div>
                    </div>
                    
                    {index < todaysTrips.length - 1 && (
                      <div className="absolute left-8 mt-8 w-px h-6 bg-gray-200" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-8 bg-white rounded-2xl shadow-sm text-center">
              <Bus className="w-12 h-12 text-gray-300 mx-auto mb-3" strokeWidth={1.5} />
              <p className="text-gray-500">No trips detected today</p>
            </Card>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <Button
        onClick={onShowTripPopup}
        className="fixed bottom-28 right-6 w-16 h-16 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-xl"
        size="icon"
      >
        <Plus className="w-7 h-7" strokeWidth={2} />
      </Button>
    </div>
  );
}