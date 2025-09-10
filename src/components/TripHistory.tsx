import { useState } from 'react';
import { Calendar, Map, List, Bus, Car, Bike, Footprints, Train } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const tripHistory = [
  {
    id: 1,
    date: 'Today',
    trips: [
      {
        id: 'today-1',
        time: '08:30 AM',
        from: 'Home',
        to: 'Office',
        mode: 'bus',
        purpose: 'Work',
        duration: '45 min',
        distance: '12 km'
      },
      {
        id: 'today-2',
        time: '01:15 PM',
        from: 'Office',
        to: 'Restaurant',
        mode: 'walk',
        purpose: 'Leisure',
        duration: '8 min',
        distance: '0.6 km'
      },
      {
        id: 'today-3',
        time: '02:30 PM',
        from: 'Restaurant',
        to: 'Office',
        mode: 'walk',
        purpose: 'Work',
        duration: '10 min',
        distance: '0.7 km'
      }
    ]
  },
  {
    id: 2,
    date: 'Yesterday',
    trips: [
      {
        id: 'yesterday-1',
        time: '09:00 AM',
        from: 'Home',
        to: 'Market',
        mode: 'bike',
        purpose: 'Shopping',
        duration: '20 min',
        distance: '3.2 km'
      },
      {
        id: 'yesterday-2',
        time: '11:30 AM',
        from: 'Market',
        to: 'Bank',
        mode: 'car',
        purpose: 'Other',
        duration: '15 min',
        distance: '5.1 km'
      },
      {
        id: 'yesterday-3',
        time: '03:45 PM',
        from: 'Bank',
        to: 'Home',
        mode: 'bus',
        purpose: 'Other',
        duration: '35 min',
        distance: '8.7 km'
      }
    ]
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

export function TripHistory() {
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            Trip History
          </h1>
          
          <div className="flex bg-gray-100 rounded-xl p-1">
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 rounded-lg ${
                viewMode === 'list'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('map')}
              className={`px-3 py-2 rounded-lg ${
                viewMode === 'map'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Map className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        <Tabs defaultValue="today" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white rounded-2xl p-1 mb-6">
            <TabsTrigger value="today" className="rounded-xl">Today</TabsTrigger>
            <TabsTrigger value="week" className="rounded-xl">This Week</TabsTrigger>
            <TabsTrigger value="custom" className="rounded-xl">Custom</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            {viewMode === 'list' ? (
              <div className="space-y-6">
                {tripHistory.map((day) => (
                  <div key={day.id}>
                    <h3 className="font-semibold text-gray-900 mb-3">{day.date}</h3>
                    <div className="space-y-3">
                      {day.trips.map((trip) => (
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
                                <span>{trip.purpose}</span>
                                <span>•</span>
                                <span>{trip.duration}</span>
                                <span>•</span>
                                <span>{trip.distance}</span>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Card className="p-8 bg-white rounded-2xl shadow-sm text-center min-h-96 flex items-center justify-center">
                <div>
                  <Map className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-gray-900 mb-2">Map View</h3>
                  <p className="text-gray-500 max-w-sm">
                    Interactive map showing your trip routes and locations would appear here.
                  </p>
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="week" className="space-y-6">
            <Card className="p-8 bg-white rounded-2xl shadow-sm text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-gray-900 mb-2">Weekly Summary</h3>
              <p className="text-gray-500 max-w-sm">
                Your weekly trip summary and patterns would be displayed here.
              </p>
            </Card>
          </TabsContent>

          <TabsContent value="custom" className="space-y-6">
            <Card className="p-8 bg-white rounded-2xl shadow-sm text-center">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-semibold text-gray-900 mb-2">Custom Date Range</h3>
              <p className="text-gray-500 max-w-sm">
                Select a custom date range to view your travel history.
              </p>
              <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl">
                Select Dates
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}