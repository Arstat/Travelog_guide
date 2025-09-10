import { useState } from 'react';
import { X, MapPin, Clock, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface TripPopupProps {
  onClose: () => void;
  onSave: () => void;
}

export function TripPopup({ onClose, onSave }: TripPopupProps) {
  const [transportMode, setTransportMode] = useState<string>('');
  const [purpose, setPurpose] = useState<string>('');
  const [companions, setCompanions] = useState<string>('');

  const handleSave = () => {
    // Here you would typically save the trip data
    onSave();
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end z-50">
      <div className="w-full bg-white rounded-t-3xl overflow-hidden" style={{ maxHeight: '600px' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Trip Details</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Trip Summary */}
          <Card className="p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <MapPin className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">Kochi</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-medium text-gray-900">Ernakulam</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" strokeWidth={1.5} />
                <span>25 min</span>
              </div>
              <span>•</span>
              <span>8.5 km</span>
              <span>•</span>
              <span>Just now</span>
            </div>
          </Card>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Mode of Transport
              </label>
              <Select value={transportMode} onValueChange={setTransportMode}>
                <SelectTrigger className="w-full rounded-2xl border-gray-200 bg-gray-50">
                  <SelectValue placeholder="Select transport mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bus">🚌 Bus</SelectItem>
                  <SelectItem value="car">🚗 Car</SelectItem>
                  <SelectItem value="bike">🚲 Bicycle</SelectItem>
                  <SelectItem value="motorcycle">🏍️ Motorcycle</SelectItem>
                  <SelectItem value="train">🚆 Train</SelectItem>
                  <SelectItem value="auto">🛺 Auto Rickshaw</SelectItem>
                  <SelectItem value="walk">🚶 Walking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Purpose of Trip
              </label>
              <Select value={purpose} onValueChange={setPurpose}>
                <SelectTrigger className="w-full rounded-2xl border-gray-200 bg-gray-50">
                  <SelectValue placeholder="Select trip purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="work">💼 Work/Office</SelectItem>
                  <SelectItem value="education">📚 Education</SelectItem>
                  <SelectItem value="shopping">🛒 Shopping</SelectItem>
                  <SelectItem value="healthcare">🏥 Healthcare</SelectItem>
                  <SelectItem value="leisure">🎯 Leisure/Recreation</SelectItem>
                  <SelectItem value="family">👨‍👩‍👧‍👦 Family/Social</SelectItem>
                  <SelectItem value="other">📍 Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-3">
                Travel Companions
              </label>
              <Select value={companions} onValueChange={setCompanions}>
                <SelectTrigger className="w-full rounded-2xl border-gray-200 bg-gray-50">
                  <SelectValue placeholder="How many people traveled?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alone">👤 Alone</SelectItem>
                  <SelectItem value="2">👥 2 people</SelectItem>
                  <SelectItem value="3-4">👨‍👩‍👧 3-4 people</SelectItem>
                  <SelectItem value="5+">👨‍👩‍👧‍👦 5+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-6 border-t border-gray-100 space-y-3">
          <Button
            onClick={handleSave}
            disabled={!transportMode || !purpose || !companions}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-2xl"
            size="lg"
          >
            Save Trip
          </Button>
          
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full border-gray-300 text-gray-700 py-3 rounded-2xl"
            size="lg"
          >
            Edit Details
          </Button>
        </div>
      </div>
    </div>
  );
}