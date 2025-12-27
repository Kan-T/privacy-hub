import React from 'react';
import { APPS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
          Transparency & Trust
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Welcome to my developer hub. Here you can find the privacy policies and terms for all my applications. 
          I believe in privacy-by-design and minimal data collection.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {APPS.map((app) => (
          <Link 
            key={app.id} 
            to={`/app/${app.id}/privacy`}
            className="group block bg-white rounded-xl shadow-sm border border-slate-200 p-6 transition-all hover:shadow-md hover:border-blue-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {app.name.charAt(0)}
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {app.name}
            </h2>
            <p className="text-slate-500 text-sm mb-4 line-clamp-2">
              {app.description}
            </p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              View Privacy Policy
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;