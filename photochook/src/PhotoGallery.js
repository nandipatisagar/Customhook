import React from 'react';
import useFetch from './useFetch';

function PhotoGallery() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Photos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.slice(0, 12).map((photo) => (
                    <div key={photo.id} className="bg-gray-800 p-4 rounded-lg shadow-md text-center">
                        <img
                            src={photo.thumbnailUrl}
                            alt={photo.title}
                            className="w-full h-48 object-cover rounded"
                        />
                        <p className="text-white mt-2 text-sm truncate">{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
