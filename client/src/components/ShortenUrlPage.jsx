import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
        }
    }, [url]);
    
  return (
    <div className="min-h-screen flex items-start justify-start p-6">
      <p className="text-left">Redirecting...</p>
    </div>
  );
}

export default ShortenUrlPage