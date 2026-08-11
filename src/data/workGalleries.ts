import { getCloudinaryImageUrl } from '../lib/cloudinary'
export type WorkGalleryImages = {
  [categoryId: string]: {
    images: { src: string; alt: string }[]
  }
}

export const workGalleryImages: WorkGalleryImages = {
  'government-media': {
    images: [
      { src: getCloudinaryImageUrl('/GOVT.webp'), alt: 'The President in attendance' },
      { src: getCloudinaryImageUrl('/KDF5.webp'), alt: 'Military parade moment' },
      { src: getCloudinaryImageUrl('/CHIEFS&ASS.CHIEF5.webp'), alt: 'Presentation during government event' },
      { src: getCloudinaryImageUrl('/CHIEFS&ASS.CHIEF14.webp'), alt: 'NGAO graduation' },
      { src: getCloudinaryImageUrl('/new01.webp'), alt: 'Officials in discussion during an event' },
      { src: getCloudinaryImageUrl('/new02.webp'), alt: 'Senior officials arrival' },
      { src: getCloudinaryImageUrl('/new04.webp'), alt: 'Government officials speeches' },
      { src: getCloudinaryImageUrl('/new07.webp'), alt: 'Board members (PBORA)' },
      { src: getCloudinaryImageUrl('/new10.webp'), alt: 'Media coverage setup during event' },
      { src: getCloudinaryImageUrl('/new13.webp'), alt: 'The First Lady giving a speech' },
      { src: getCloudinaryImageUrl('/new12.webp'), alt: 'Wide view of government event venue and audience' },
      { src: getCloudinaryImageUrl('/new17.webp'), alt: 'PBORA team engaging visitors' },
    ],
  },
  'international-ngo': {
    images: [
      { src: getCloudinaryImageUrl('/new05.webp'), alt: 'Partner-branded venue for international and NGO event' },
      { src: getCloudinaryImageUrl('/new09.webp'), alt: 'PBO sector overview display during NGO forum' },
      { src: getCloudinaryImageUrl('/new14.webp'), alt: 'Report launch celebration during public benefit event' },
      { src: getCloudinaryImageUrl('/new15.webp'), alt: 'International NGO booth exhibition' },
      { src: getCloudinaryImageUrl('/new16.webp'), alt: 'International NGO and humanitarian partner banners' },
      { src: getCloudinaryImageUrl('/new18.webp'), alt: 'Exhibitor booth visit during NGO showcase' },
      { src: getCloudinaryImageUrl('/new08.webp'), alt: 'Audience member listening during NGO session' },
      { src: getCloudinaryImageUrl('/new23.webp'), alt: 'Participant engaged at international sector forum' },
      { src: getCloudinaryImageUrl('/new24.webp'), alt: 'Discussion panel with international and local partners' },
      { src: getCloudinaryImageUrl('/new25.webp'), alt: 'Joyful Women Organization exhibition booth' },
      { src: getCloudinaryImageUrl('/new27.webp'), alt: 'Exhibitors posing at public benefit sector booth' },
      { src: getCloudinaryImageUrl('/new28.webp'), alt: 'Public benefit partner panel session in progress' },
    ],
  },
  'corporate-events': {
    images: [
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)1.webp'), alt: 'Leadership welcome' },
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)2.webp'), alt: 'Plenary session' },
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)3.webp'), alt: 'Token of appreciation' },
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)6.webp'), alt: 'Stakeholder delegation' },
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)7.webp'), alt: 'Celebratory moment' },
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)10.webp'), alt: 'Attentive delegates' },
      { src: getCloudinaryImageUrl('/LOGO_WEBSITE_LAUNCH(pbora)11.webp'), alt: 'Expert panel' },
      { src: getCloudinaryImageUrl('/PBORA_PPC1.webp'), alt: 'Organizing committee' },
      { src: getCloudinaryImageUrl('/PBORA_PPC2.webp'), alt: 'Audience engagement' },
      { src: getCloudinaryImageUrl('/coperate1.jpg'), alt: 'Executives in session' },
      { src: getCloudinaryImageUrl('/coperate2.jpg'), alt: 'Conference overview' },
      { src: getCloudinaryImageUrl('/coperate3.jpg'), alt: 'Keynote attendee' },
      { src: getCloudinaryImageUrl('/coperate4.jpg'), alt: 'Delegate check-in' },
      { src: getCloudinaryImageUrl('/coperate6.jpg'), alt: 'Speaker spotlight' },
      { src: getCloudinaryImageUrl('/coperate8.jpg'), alt: 'Executive roundtable' },      
    ],
  },
  weddings: {
    images: [
      { src: getCloudinaryImageUrl('/wedding-gallery3.jpg'), alt: 'Bridal prep' },
      { src: getCloudinaryImageUrl('/wedding-gallery5.jpg'), alt: 'Final makeup touches' },
      { src: getCloudinaryImageUrl('/vows.jpg'), alt: 'Vows exchange' },
      { src: getCloudinaryImageUrl('/wedding-gallery2.jpg'), alt: 'Family portrait outdoors' },
      { src: getCloudinaryImageUrl('/reception-entry.jpg'), alt: 'Reception entrance' },
      { src: getCloudinaryImageUrl('/dance.jpg'), alt: 'Dance floor energy' },
      { src: getCloudinaryImageUrl('/wedding-gallery7.jpg'), alt: 'Group photo' },
      { src: getCloudinaryImageUrl('/wedding-gallery9.jpg'), alt: 'Outdoor celebration' },
      { src: getCloudinaryImageUrl('/wedding-gallery15.jpg'), alt: 'Family group portrait' },
      { src: getCloudinaryImageUrl('/wedding-gallery11.jpg'), alt: 'Couple moment' },
      { src: getCloudinaryImageUrl('/wedding-gallery14.jpg'), alt: 'Cake sneak peek' },
      { src: getCloudinaryImageUrl('/cake-cut.jpg'), alt: 'Cake cutting moment' },
    ],
  },
  concerts: {
    images: [
      { src: getCloudinaryImageUrl('/KOLA1.webp'), alt: 'Lead singer on the mic' },
      { src: getCloudinaryImageUrl('/KOLA2.webp'), alt: 'Singer performing with guitar' },
      { src: getCloudinaryImageUrl('/KOLA3.webp'), alt: 'Performer close-up between sets' },
      { src: getCloudinaryImageUrl('/KOLA4.webp'), alt: 'Drummer caught in the moment' },
      { src: getCloudinaryImageUrl('/KOLA5.webp'), alt: 'Performer moving with the beat' },
      { src: getCloudinaryImageUrl('/KOLA6.webp'), alt: 'Guest watching from backstage' },
      { src: getCloudinaryImageUrl('/KOLA7.webp'), alt: 'Live set under warm lights' },
      { src: getCloudinaryImageUrl('/KOLA8.webp'), alt: 'Band performing on stage' },
    ],
  },
  farewell: {
    images: [
      { src: getCloudinaryImageUrl('/farewell1.jpg'), alt: 'Decorated funeral cortege vehicle on arrival' },
      { src: getCloudinaryImageUrl('/farewell2.jpg'), alt: 'Funeral procession in transit' },
      { src: getCloudinaryImageUrl('/farewell3.jpg'), alt: 'Body viewing' },
      { src: getCloudinaryImageUrl('/farewell4.jpg'), alt: 'Family tribute during the memorial service' },
      { src: getCloudinaryImageUrl('/farewell5.jpg'), alt: 'Mourners seated during the funeral service' },
      { src: getCloudinaryImageUrl('/farewell6.jpg'), alt: 'Congregation observing a moment of prayer' },
      { src: getCloudinaryImageUrl('/farewell7.jpg'), alt: 'Funeral convoy arriving at the burial grounds' },
      { src: getCloudinaryImageUrl('/farewell9.jpg'), alt: 'Clergy leading the graveside committal service' },
      { src: getCloudinaryImageUrl('/farewell10.jpg'), alt: 'Family members in solemn reflection' },
      { src: getCloudinaryImageUrl('/farewell11.jpg'), alt: 'A mourner overcome with emotion' },
      { src: getCloudinaryImageUrl('/farewell13.jpg'), alt: 'Memorial portrait placed beside floral tributes' },
      { src: getCloudinaryImageUrl('/farewell14.jpg'), alt: 'Aerial view of mourners gathering at the venue' },
      { src: getCloudinaryImageUrl('/farewell15.jpg'), alt: 'Aerial view of the memorial grounds' },
      { src: getCloudinaryImageUrl('/farewell17.jpg'), alt: 'Casket laid in honor before the altar' },
      { src: getCloudinaryImageUrl('/farewell18.jpg'), alt: 'Clergy delivering the funeral homily' },
    ],
  },
}
