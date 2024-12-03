import { Monitor, Settings } from 'lucide-react';

export default function Logo() {
  return (
    <div className="relative">
      <Monitor className="h-12 w-12 text-purple-600" />
      <Settings className="h-6 w-6 text-indigo-500 absolute -bottom-1 -right-1 animate-spin-slow" />
    </div>
  );
}