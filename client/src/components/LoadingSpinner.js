import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
            <div className="relative w-16 h-16">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
            <div className="text-slate-400 font-medium animate-pulse">
                Optimizing your dashboard...
            </div>
        </div>
    );
};

export default LoadingSpinner;
