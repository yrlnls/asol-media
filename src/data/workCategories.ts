import type { Service } from './services'

export const workCategories: Service[] = [
  {
    id: 'government-media',
    title: 'Government Media',
    image: {
      src: '/GOVT.webp',
      alt: 'Government media coverage team',
    },
    intro:
      'Public sector stories demand accuracy, sensitivity, and clear approvals. We cover official launches, policy announcements, and civic programs with disciplined production and messaging.',
    highlights: ['Official communications', 'Press-ready visuals', 'Protocol-aware crews'],
    whatWeDo: [
      'Ministerial events and official launches',
      'Public information campaigns',
      'Press conferences and briefings',
      'Stakeholder interviews and documentation',
      'Broadcast-ready edits for public channels',
    ],
    whyChooseUs:
      'We understand protocol, approvals, and tight timelines. Our team works discreetly around officials while delivering clean, accurate media.',
    ctas: [{ label: 'Request Government Coverage', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'international-ngo',
    title: 'International and NGO',
    image: {
      src: '/NGO.webp',
      alt: 'NGO field documentation',
    },
    intro:
      'Programs and impact need to be communicated with dignity and clarity. We document field work, donor engagements, and advocacy moments for global audiences.',
    highlights: ['Impact storytelling', 'Field-ready crews', 'Donor reporting assets'],
    whatWeDo: [
      'Program documentation in the field',
      'Impact stories and beneficiary interviews',
      'Advocacy and awareness campaigns',
      'Donor and partner events',
      'Social, web, and report-ready deliverables',
    ],
    whyChooseUs:
      'We balance sensitivity with strong storytelling, ensuring communities are represented respectfully and outcomes are clear.',
    ctas: [{ label: 'Plan NGO Coverage', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    image: {
      src: '/LOGO_WEBSITE_LAUNCH(pbora)2.webp',
      alt: 'Corporate event media coverage',
    },
    intro:
      'From AGMs to product launches, we capture the moments that matter for your brand and stakeholders with polished, professional coverage.',
    highlights: ['Conferences and summits', 'Product launches', 'Executive coverage'],
    whatWeDo: [
      'Annual general meetings and town halls',
      'Product launches and brand activations',
      'Conferences and summits',
      'Executive interviews and keynote coverage',
      'Same-day highlights and recap edits',
    ],
    whyChooseUs:
      'We plan around your run-of-show, deliver on time, and keep the brand presentation consistent across every asset.',
    ctas: [{ label: 'Book Corporate Coverage', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'weddings',
    title: 'Weddings',
    image: {
      src: '/wedding.webp',
      alt: 'Wedding photography and videography',
    },
    intro:
      'A wedding is a story of people, vows, and emotion. We capture it unobtrusively so you can relive it for years to come.',
    highlights: ['Full-day coverage', 'Cinematic highlight films', 'Photo and video'],
    whatWeDo: [
      'Pre-wedding sessions and planning',
      'Ceremony and reception coverage',
      'Cinematic highlight films',
      'Family portraits and candid moments',
      'Edited photo galleries and keepsakes',
    ],
    whyChooseUs:
      'We blend into the day, capture real moments, and deliver timeless edits you will cherish.',
    ctas: [{ label: 'Reserve Your Date', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'concerts',
    title: 'Concerts',
    image: {
      src: '/KOLA5.webp',
      alt: 'Live concert coverage',
    },
    intro:
      'Live performances are about energy and atmosphere. We capture the crowd, the stage, and the moments that define the show.',
    highlights: ['Multi-camera coverage', 'Stage and crowd shots', 'Fast-turn highlights'],
    whatWeDo: [
      'Multi-camera concert coverage',
      'Backstage and rehearsal footage',
      'Artist interviews and soundbites',
      'Short promo cuts for socials',
      'Full performance edits',
    ],
    whyChooseUs:
      "We work fast in live environments and deliver dynamic edits that match the music's intensity.",
    ctas: [{ label: 'Cover My Concert', to: '/contact', variant: 'primary' }],
  },
  {
    id: 'farewell',
    title: 'Farewell',
    image: {
      src: '/farewell3.webp',
      alt: 'Farewell event coverage',
    },
    intro:
      'Farewell events deserve care and respect. We capture the tributes, memories, and shared moments with sensitivity.',
    highlights: ['Respectful coverage', 'Tribute videos', 'Family-focused storytelling'],
    whatWeDo: [
      'Farewell ceremonies and gatherings',
      'Tribute video production',
      'Guest messages and interviews',
      'Photo and video documentation',
      'Keepsake edits for families',
    ],
    whyChooseUs:
      'We approach every farewell with empathy and discretion, delivering a keepsake that honors the moment.',
    ctas: [{ label: 'Discuss Farewell Coverage', to: '/contact', variant: 'primary' }],
  },
]
