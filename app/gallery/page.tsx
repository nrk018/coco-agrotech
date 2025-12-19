'use client'

import Header from '@/components/Header'

export default function Gallery() {
  const galleryCategories = [
    {
      title: 'Raw Materials',
      items: ['Raw coco husk', 'Coconut processing']
    },
    {
      title: 'Processing',
      items: ['Sieving & washing process', 'Drying yard', 'Block compression machines']
    },
    {
      title: 'Quality Control',
      items: ['Lab testing', 'Quality inspection']
    },
    {
      title: 'Packaging & Export',
      items: ['Packaging & loading', 'Export containers', 'Shipping']
    },
    {
      title: 'Applications',
      items: ['Farmland usage photos', 'Greenhouse cultivation', 'Hydroponic farms']
    }
  ]

  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-hero">
          <h1 className="page-title">Gallery</h1>
          <p className="page-subtitle">See Our Manufacturing Process & Facilities</p>
        </div>

        <section className="page-section">
          <div className="page-container">
            <div className="gallery-categories">
              {galleryCategories.map((category, index) => (
                <div key={index} className="gallery-category">
                  <h2 className="gallery-category-title">{category.title}</h2>
                  <div className="gallery-grid">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="gallery-item">
                        <div className="gallery-image-placeholder">
                          <span className="gallery-placeholder-text">{item}</span>
                        </div>
                        <p className="gallery-item-title">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

