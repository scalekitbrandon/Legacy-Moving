import { services } from './services';
import { areas } from './areas';

export const PHONE = '406-539-9641';
export const EMAIL = 'legacymovingmt@gmail.com';

export const navLinks = [
  {
    label: 'Services',
    href: '/services/',
    children: services.map((service) => ({
      label: service.navLabel,
      href: `/services/${service.slug}/`,
    })),
  },
  {
    label: 'Service Areas',
    href: '/#service-areas',
    children: areas.map((area) => ({ label: area.name, href: `/moving-company-${area.slug}/` })),
  },
  { label: 'About', href: '/about/' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact/' },
];

export const footerGroups = [
  {
    heading: 'Services',
    links: services.map((service) => ({ label: service.navLabel, href: `/services/${service.slug}/` })),
  },
  {
    heading: 'Service Areas',
    links: areas.map((area) => ({ label: area.name, href: `/moving-company-${area.slug}/` })),
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Reviews', href: '/#reviews' },
      { label: 'Contact', href: '/contact/' },
      { label: 'Get a Quote', href: '/#quote' },
    ],
  },
];
