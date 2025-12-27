import React, { useState } from 'react';
import { HashRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import PolicyViewer from './components/PolicyViewer';
import { APPS } from './constants';
import { PolicyType } from './types';

// Wrapper component to extract params and find the app
const PolicyRouteWrapper: React.FC<{ type: PolicyType }> = ({ type }) => {
  const { appId } = useParams<{ appId: string }>();
  const app = APPS.find(a => a.id === appId);

  if (!app) {
    return <Navigate to="/" replace />;
  }

  return <PolicyViewer app={app} type={type} />;
};

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 md:pl-72 transition-all duration-300">
        
        {/* Mobile Header */}
        <header className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
          <span className="font-bold text-slate-800">Privacy Hub</span>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </header>

        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/app/:appId/privacy" 
              element={<PolicyRouteWrapper type={PolicyType.PRIVACY} />} 
            />
            <Route 
              path="/app/:appId/terms" 
              element={<PolicyRouteWrapper type={PolicyType.TERMS} />} 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <footer className="p-6 text-center text-slate-400 text-sm border-t border-slate-100 mt-auto">
          &copy; {new Date().getFullYear()} Mobile App Privacy Hub. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  // Using HashRouter is critical for GitHub Pages compatibility
  // Example URL: https://username.github.io/privacy-repo/#/app/my-app/privacy
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

export default App;