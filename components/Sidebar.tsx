import React from 'react';
import { APPS, DEVELOPER_NAME } from '../constants';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  // Helper to check if a link is active
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed top-0 left-0 bottom-0 w-72 bg-white border-r border-slate-200 z-30
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-800">Privacy Hub</h1>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{DEVELOPER_NAME}</p>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-8 overflow-y-auto h-[calc(100vh-85px)]">
          <div className="space-y-2">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'bg-slate-100 text-slate-900' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              Home
            </Link>
          </div>

          <div>
            <h3 className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Applications
            </h3>
            <div className="space-y-1">
              {APPS.map((app) => (
                <div key={app.id}>
                  <Link
                    to={`/app/${app.id}/privacy`}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors
                      ${isActive(`/app/${app.id}`) ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}
                    `}
                  >
                   <span className="w-2 h-2 rounded-full bg-slate-300 mr-3" style={{ backgroundColor: isActive(`/app/${app.id}`) ? '#3b82f6' : '#cbd5e1' }}></span>
                   {app.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;