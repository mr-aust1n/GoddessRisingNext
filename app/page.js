import Carousel from '../components/Carousel';

export const metadata = {
  title: 'Goddess Rising Hair Extensions | Specialist Hair Studio in Belper',
  description: 'A private hair studio in Belper offering bespoke hair extensions and mesh integration for natural looking results, comfort, and confidence.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Goddess Rising Hair Extensions | Belper',
    description: 'Private one to one hair services in Belper, specialising in bespoke extensions and mesh integration.',
    images: ['/assets/images/home-goddess-rising-og.webp'],
  },
};

export default function Home() {
  return (
    <main aria-label="Home Page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HairSalon',
            '@id': 'https://www.goddessrisinghair.co.uk/#hair-salon',
            name: 'Goddess Rising Hair Extensions',
            url: 'https://www.goddessrisinghair.co.uk',
            image: 'https://www.goddessrisinghair.co.uk/assets/images/home-goddess-rising-og.webp',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Belper',
              addressRegion: 'Derbyshire',
              addressCountry: 'GB',
            },
            priceRange: '££',
            sameAs: [
              'https://www.instagram.com/goddess_rising_hair/',
              'https://www.facebook.com/profile.php?id=61565118399072',
            ],
          }),
        }}
      />
      <Carousel />
    </main>
  );
}
