import { business, servicePages, zonePages } from './data/spurghi';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Servizi',
      links: servicePages.map((service) => ({
        text: service.shortTitle,
        href: getPermalink(`/services/${service.slug}`),
      })),
    },
    {
      text: 'Zone',
      links: zonePages.map((zone) => ({
        text: zone.title,
        href: getPermalink(`/zone/${zone.slug}`),
      })),
    },
    {
      text: 'Chi siamo',
      href: getPermalink('/about'),
    },
    {
      text: 'Contatti',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: `Chiama ${business.phone}`, href: `tel:${business.phoneHref}`, icon: 'tabler:phone-call' }],
};

export const footerData = {
  links: [
    {
      title: 'Servizi',
      links: servicePages.map((service) => ({ text: service.shortTitle, href: getPermalink(`/services/${service.slug}`) })),
    },
    {
      title: 'Zone',
      links: zonePages.map((zone) => ({ text: zone.title, href: getPermalink(`/zone/${zone.slug}`) })),
    },
    {
      title: 'Azienda',
      links: [
        { text: 'Chi siamo', href: getPermalink('/about') },
        { text: 'Contatti', href: getPermalink('/contact') },
        { text: 'Pronto intervento 24H', href: `tel:${business.phoneHref}` },
      ],
    },
    {
      title: 'Contatti',
      links: [
        { text: business.phone, href: `tel:${business.phoneHref}` },
        { text: business.email, href: `mailto:${business.email}` },
        { text: business.address, href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Privacy', href: getPermalink('/privacy') },
    { text: 'Termini', href: getPermalink('/terms') },
  ],
  socialLinks: [],
  footNote: `
    <span class="text-sm text-muted">© Spurghi Novara Fast · Pronto intervento 24H a Novara</span>
  `,
};
