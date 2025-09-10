import { Bus } from 'lucide-react';

export function SplashScreen() {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center px-6" style={{ height: '844px' }}>
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="mb-12">
          <div className="w-32 h-32 bg-blue-500 rounded-3xl flex items-center justify-center shadow-xl">
            <Bus className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center tracking-tight">
          Travelog India
        </h1>
        
        <p className="text-xl text-gray-600 text-center max-w-xs leading-relaxed">
          Helping build smarter transport for India.
        </p>
      </div>
      
      <div className="mb-12">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-blue-200 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
}