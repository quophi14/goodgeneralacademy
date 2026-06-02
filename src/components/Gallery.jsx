import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
    const images = [
        {src: "/images/img_1.png", alt: "Science Lab"},
      { src: "/images/img_2.png", alt: "Computer Lab" },
      { src: "/images/img_3.png", alt: "Graduation Day (Cultural Dancers)" },
      { src: "/images/img_4.png", alt: "Graduation Day (Akan Poetry)" },
      { src: "/images/img_5.png", alt: "Graduation Day (Local News Anchors)" },
      { src: "/images/img_9.jpg", alt: "A visit to Accra Zoo" },
      { src: "/images/img_10.jpg", alt: "At Osu Castle" },
      { src: "/images/img_11.jpg", alt: "At The National Museum" },    
      { src: "/images/img_13.jpg", alt: "At The Kwame Nkrumah Mausoleum" },
      { src: "/images/img_14.jpg", alt: "On Going Class Session" },
      { src: "/images/img_15.jpg", alt: "Discipline During Lesson Hours" },
      { src: "/images/img_16.jpg", alt: "At Shai Hills" },
      { src: "/images/img_17.jpg", alt: "At The Akosombo Dam" },
      { src: "/images/img_19.jpg", alt: "Friendly Environment for Learning" },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAll, setShowAll] = useState(false); // State to toggle visibility limit

    // Show 6 images initially, or all images if showAll is true
    const visibleImages = showAll ? images : images.slice(0, 4);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div id='gallery' className='py-20 px-4 sm:px-12 lg:px-24 xl:px-40 bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center gap-8'>
            <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white'>
                Life at Our School And Beyond
            </h2>
            
            {/* Grid layout displaying the dynamically sliced images */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
                {visibleImages.map((img, index) => (
                    <div key={index} onClick={() => openLightbox(index)} className='group relative cursor-pointer overflow-hidden rounded-xl aspect-square bg-gray-200'>
                        <img src={img.src} alt={img.alt} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        {/* Fixed typo: changed 'insert-0' to 'inset-0' */}
                        <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center'>
                            <span className='text-white text-sm font-medium'>View Details</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button handles layout toggling between 6 cards and 14 cards */}
            <button 
                onClick={() => setShowAll(!showAll)} 
                className='px-8 py-3 bg-primary hover:bg-blue-700 cursor-pointer text-white rounded-full font-semibold transition-all shadow-lg hover:scale-105'
            >
                {showAll ? 'Show Less' : 'View More'}
            </button>
        </div>

        {/* Lightbox Modal still accesses the full array natively */}
        {isOpen && (
            <div className='fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-4'>
                <button onClick={() => setIsOpen(false)}
                    className='absolute top-6 right-6 text-white hover:text-gray-300 transition-colors'
                >
                    <X size={32}/>
                </button>
                <button onClick={prevImage}
                    className='absolute left-4 p-2 text-white hover:bg-white/10 rounded-full transition'
                >
                    <ChevronLeft size={48} />
                </button>

                <div className='max-w-4xl max-h-[80vh] flex flex-col items-center'>
                    <img src={images[currentIndex].src} alt={images[currentIndex].alt} className='max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300' />
                    <p className='text-white mt-4 text-lg font-medium'>{images[currentIndex].alt}</p>
                    <span className='text-gray-400 text-sm'>{currentIndex + 1} / {images.length}</span>
                </div>

                <button onClick={nextImage} className='absolute right-4 p-2 text-white hover:bg-white/10 rounded-full transition'>
                    <ChevronRight size={48} />
                </button>
            </div>
        )}
    </div>
  )
}

export default Gallery
