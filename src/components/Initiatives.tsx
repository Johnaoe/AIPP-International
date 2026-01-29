import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/coral.webp';
import image2 from '../assets/tradition.webp';
import image3 from '../assets/image3.webp';

interface Initiative {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  imageUrl: string;
}

const Initiatives: React.FC = () => {
  const { t } = useTranslation();
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const initiativesData: Initiative[] = [
    {
      id: 1,
      title: t('initiatives.items.1.title'),
      description: t('initiatives.items.1.description'),
      fullDescription: t('initiatives.items.1.fullDescription'),
      imageUrl: image1
    },
    {
      id: 2,
      title: t('initiatives.items.2.title'),
      description: t('initiatives.items.2.description'),
      fullDescription: t('initiatives.items.2.fullDescription'),
      imageUrl: image2
    },
    {
      id: 3,
      title: t('initiatives.items.3.title'),
      description: t('initiatives.items.3.description'),
      fullDescription: t('initiatives.items.3.fullDescription'),
      imageUrl: image3
    }
  ];

  const openModal = (initiative: Initiative) => {
    setSelectedInitiative(initiative);
  };

  const closeModal = () => {
    setSelectedInitiative(null);
  };

  return (
    <section id="initiatives" className="relative px-4 py-16 md:py-24 max-w-7xl mx-auto w-full overflow-hidden">
      
      <div className="relative z-10 flex items-center justify-between mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-dark-blue">{t('initiatives.title')}</h2>
      </div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {initiativesData.map((item) => (
          <article 
            key={item.id} 
            className="flex flex-col bg-white rounded-2xl shadow-sm border-t-4 border-primary overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-full h-52 md:h-64 overflow-hidden relative">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 md:p-8 flex flex-col gap-4 flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <div className="pt-4 mt-auto">
                <button 
                  onClick={() => openModal(item)}
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover uppercase tracking-wide group-hover:gap-2 transition-all"
                >
                  {t('initiatives.cta_read_more')} <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Modal
        isOpen={!!selectedInitiative}
        onClose={closeModal}
        title={selectedInitiative?.title || ''}
      >
        {selectedInitiative && (
          <div className="flex flex-col gap-6">
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
              <img 
                src={selectedInitiative.imageUrl} 
                alt={selectedInitiative.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="prose prose-teal max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedInitiative.fullDescription}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Initiatives;