import { Shield, Download, MessageCircle, Info, ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';
import { useState } from 'react';
import { Card } from './ui/card';
import { Switch } from './ui/switch';
import { Button } from './ui/button';

export function Profile() {
  const [autoDetection, setAutoDetection] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const settingsSections = [
    {
      title: 'Tracking Settings',
      items: [
        {
          id: 'auto-detection',
          icon: <ToggleLeft className="w-5 h-5 text-blue-500" strokeWidth={1.5} />,
          title: 'Auto Trip Detection',
          description: 'Automatically detect and record trips',
          type: 'toggle',
          value: autoDetection,
          onChange: setAutoDetection
        },
        {
          id: 'notifications',
          icon: <MessageCircle className="w-5 h-5 text-green-500" strokeWidth={1.5} />,
          title: 'Trip Notifications',
          description: 'Get notified when trips are detected',
          type: 'toggle',
          value: notifications,
          onChange: setNotifications
        }
      ]
    },
    {
      title: 'Privacy & Data',
      items: [
        {
          id: 'privacy',
          icon: <Shield className="w-5 h-5 text-blue-500" strokeWidth={1.5} />,
          title: 'Privacy Settings',
          description: 'Manage your data and privacy preferences',
          type: 'navigation'
        },
        {
          id: 'export',
          icon: <Download className="w-5 h-5 text-green-500" strokeWidth={1.5} />,
          title: 'Export Data',
          description: 'Download your anonymized travel data',
          type: 'navigation'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          id: 'feedback',
          icon: <MessageCircle className="w-5 h-5 text-orange-500" strokeWidth={1.5} />,
          title: 'Send Feedback',
          description: 'Help us improve the app',
          type: 'navigation'
        },
        {
          id: 'about',
          icon: <Info className="w-5 h-5 text-gray-500" strokeWidth={1.5} />,
          title: 'About',
          description: 'App version and information',
          type: 'navigation'
        }
      ]
    }
  ];

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">
      {/* Header */}
      <div className="bg-white px-6 pt-4 pb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
          Settings
        </h1>
        <p className="text-lg text-gray-600">
          Manage your preferences and data
        </p>
      </div>

      {/* Profile Summary Card */}
      <div className="px-6 mb-6">
        <Card className="p-6 bg-white rounded-2xl shadow-sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚌</span>
            </div>
            <h2 className="font-semibold text-gray-900 mb-1">Anonymous User</h2>
            <p className="text-sm text-gray-600 mb-4">Contributing to India's transport future</p>
            
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">47</div>
                <div className="text-xs text-gray-500">Total Trips</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">156</div>
                <div className="text-xs text-gray-500">Kilometers</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-semibold text-gray-900">12</div>
                <div className="text-xs text-gray-500">Days Active</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Settings Sections */}
      <div className="px-6 space-y-6">
        {settingsSections.map((section) => (
          <div key={section.title}>
            <h3 className="font-semibold text-gray-900 mb-3 px-2">
              {section.title}
            </h3>
            
            <Card className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {section.items.map((item, index) => (
                <div key={item.id}>
                  <div className="flex items-center p-4">
                    <div className="flex-shrink-0 mr-4">
                      {item.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex-shrink-0">
                      {item.type === 'toggle' && (
                        <Switch
                          checked={item.value as boolean}
                          onCheckedChange={item.onChange as (value: boolean) => void}
                          className="data-[state=checked]:bg-blue-500"
                        />
                      )}
                      {item.type === 'navigation' && (
                        <ChevronRight className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                      )}
                    </div>
                  </div>
                  
                  {index < section.items.length - 1 && (
                    <div className="border-t border-gray-100 ml-16" />
                  )}
                </div>
              ))}
            </Card>
          </div>
        ))}
      </div>

      {/* App Version */}
      <div className="px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          TravelTrack India v1.0.0
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Built for India's transportation future
        </p>
      </div>
    </div>
  );
}