export interface FaqItem {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  navLabel: string;
  cardTitle: string;
  cardBody: string;
  icon: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  whatItIs: string[];
  whoItHelps: string[];
  approach: string[];
  extra?: { id: string; heading: string; body: string[] };
  faq: FaqItem[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'local-moving',
    navLabel: 'Local Moves',
    cardTitle: 'Local Moves',
    cardBody:
      'Across town or across the valley, our local crews handle the logistics so nothing gets left behind or left to chance.',
    icon: 'truck',
    title: 'Local Moving Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Local moving in Bozeman and the Gallatin Valley. The same crew, truck, and itemized quote for every move across town. Get a free estimate.',
    h1: 'Local Moving Company in Bozeman, MT',
    intro:
      'A local move is still a real move. Our crew brings the same truck, equipment, and care to a move across town as we do to any other.',
    whatItIs: [
      'A local move is a residential move within the Bozeman area and the Gallatin Valley. Across town or across the neighborhood, the same crew, truck, and quote process apply.',
      'Send us your pickup and drop-off addresses and we will confirm the drive, parking, and any building requirements before move day.',
    ],
    whoItHelps: [
      'Anyone moving within Bozeman or the Gallatin Valley',
      'Renters moving between apartments in the same area',
      'Families moving a short distance across town',
      'Anyone who wants a full crew for a small or short move',
    ],
    approach: [
      'We plan the route and the loading order around your specific addresses, so the move stays on schedule.',
      'The price you approve is the price you pay, with no hourly surprises added once the truck is loaded.',
    ],
    faq: [
      {
        q: 'Is a local move priced differently than a long-distance move?',
        a: 'Yes. Local moves are quoted on the size of the move and the crew and time required, not on distance. You get one itemized quote before you commit.',
      },
      {
        q: 'How far in advance should I book a local move?',
        a: 'Two to four weeks is ideal, especially for weekends and month-end dates. Call us and we will tell you what is available.',
      },
      {
        q: 'Can you move me the same week?',
        a: 'Sometimes, depending on the crew schedule. Call us at the number above and we will check availability in real time.',
      },
    ],
    related: ['residential-moving', 'packing', 'long-distance-moving'],
  },
  {
    slug: 'long-distance-moving',
    navLabel: 'Long-Distance Moves',
    cardTitle: 'Long-Distance Moves',
    cardBody:
      'Moving out of Montana, or into it? Our long-distance crew handles the full move, door to door.',
    icon: 'road',
    title: 'Long Distance Moving Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Long-distance moving from Bozeman, Montana to all 50 states. Door-to-door service with an itemized quote, packing options, and careful handling. Get a free estimate.',
    h1: 'Long Distance Moving Company in Bozeman, MT',
    intro:
      'Moving out of Montana, or into it? Legacy handles the full move, from packing and loading to transport and delivery, with the same crew standards as a local move.',
    whatItIs: [
      'A long-distance move covers a move beyond our local service area. We pack, load, transport, and deliver your belongings, and you get one itemized quote before you commit.',
      'Coverage: all 50 states.',
    ],
    whoItHelps: [
      'Families relocating for work or school',
      'Retirees moving out of state',
      'Anyone moving a full household across a long route',
      'People who want one company for the whole move',
    ],
    approach: [
      'Your quote covers distance, weight or volume, and any packing or crating you request. We confirm the inventory before the move, so there are no surprises at delivery.',
      'Send your delivery date window when you request your quote so we can plan the route.',
    ],
    faq: [
      {
        q: 'How is a long-distance quote priced?',
        a: 'Quotes are based on the size of your move and the distance. We confirm your inventory before you commit, so the price you approve is the price you pay.',
      },
      {
        q: 'Can I pack for a long-distance move?',
        a: 'Yes. Full and partial packing are available, and art or antiques can be crated.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'Book as early as you can, especially for summer and month-end dates. Call us to check availability.',
      },
      {
        q: 'Do you move out of state?',
        a: 'Yes. We serve all 50 states for long-distance moves. Call us with your route and timeline and we will build your quote.',
      },
    ],
    related: ['local-moving', 'packing', 'residential-moving'],
  },
  {
    slug: 'residential-moving',
    navLabel: 'Residential & Apartment Moves',
    cardTitle: 'Residential & Apartment Moves',
    cardBody:
      'Houses, condos, and apartments, including walk-up buildings. One crew handles every room from start to finish.',
    icon: 'home',
    title: 'Residential Moving Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Houses, condos, and apartments in Bozeman and Southwest Montana, with an itemized quote before you commit. Get a free, no-obligation estimate.',
    h1: 'Residential Moving Company in Bozeman, MT',
    intro:
      'Moving out of a Bozeman apartment, a condo, or a family home? Our crew handles every room, every staircase, and every piece of furniture, so you can focus on the rest of the move.',
    whatItIs: [
      'Residential moving covers the full move of a household: furniture, appliances, boxes, and everything in between. We move within Bozeman, Big Sky, Belgrade, Livingston, and throughout Southwest Montana.',
      'Each move starts with a detailed inventory, so the quote reflects what is actually moving.',
    ],
    whoItHelps: [
      'Apartment and condo residents, including walk-up buildings',
      'Families moving to or from a house',
      'Downsizing and first-time move-ins',
      'Anyone moving across town or across the valley',
    ],
    approach: [
      'We protect floors, walls, and doorframes on every move, and we disassemble and reassemble beds and tables when that makes the move easier.',
      'Our crew plans the load around your move date and building rules, and keeps you updated through the day. The price you approve is the price you pay, with no surprise line items on moving day.',
    ],
    faq: [
      {
        q: 'Do you move apartments without an elevator?',
        a: 'Yes. Walk-up moves are common for us. Tell us the floor and unit layout when you request your quote so we can staff the crew for the stairs.',
      },
      {
        q: 'How far in advance should I book?',
        a: 'Two to four weeks is ideal, especially for weekends and month-end dates. Call us and we will tell you what is available.',
      },
      {
        q: 'Do you pack for me?',
        a: 'Yes. Packing and unpacking are available as separate services, or you can pack yourself and let us handle the loading, transport, and placement.',
      },
      {
        q: 'Do I need to be home during the move?',
        a: 'You do not have to be there for the whole move, but we recommend being reachable by phone for questions and building access.',
      },
    ],
    related: ['local-moving', 'packing', 'long-distance-moving'],
  },
  {
    slug: 'commercial-moving',
    navLabel: 'Commercial Moves',
    cardTitle: 'Commercial Moves',
    cardBody:
      'We relocate offices, retail spaces, and business equipment on a schedule built to minimize downtime for your team.',
    icon: 'building',
    title: 'Commercial Moving Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Commercial moving in Bozeman, Montana. Office, retail, and small business relocations scheduled around your hours. Get a free, no-obligation quote.',
    h1: 'Commercial Moving Company in Bozeman, MT',
    intro:
      'A business move has to work around your hours, not the other way around. We plan the move to limit downtime and keep your team working.',
    whatItIs: [
      'Commercial moving covers offices, retail spaces, and small business locations: desks, equipment, inventory, and furniture, moved on a schedule built around your business.',
      'We walk through the timeline with you before move day, including after-hours or weekend scheduling when it helps your business stay open.',
    ],
    whoItHelps: [
      'Offices relocating to a new space',
      'Retail businesses moving or changing locations',
      'Small businesses moving equipment and furniture',
      'Anyone who needs a move scheduled around business hours',
    ],
    approach: [
      'We plan the load order so equipment and furniture go in and come out in a sequence that keeps setup fast at the new location.',
      'Your quote covers the scope of the move and the schedule you need, with no surprise line items on moving day.',
    ],
    faq: [
      {
        q: 'Can you move us after hours or on a weekend?',
        a: 'In many cases, yes. Tell us your hours and constraints when you request your quote and we will plan around them.',
      },
      {
        q: 'Do you move office equipment and electronics?',
        a: 'Yes. Tell us what you are moving, including any electronics or sensitive equipment, so we can plan the right handling and packing.',
      },
      {
        q: 'How far in advance should we book a commercial move?',
        a: 'As early as possible, especially around the start or end of a lease. Call us to talk through your timeline.',
      },
    ],
    related: ['packing', 'long-distance-moving', 'local-moving'],
  },
  {
    slug: 'white-glove-moving',
    navLabel: 'White Glove & Luxury',
    cardTitle: 'White Glove & Luxury',
    cardBody: 'Antiques, heirlooms, pianos, and luxury homes, moved with extra care at every step.',
    icon: 'glove',
    title: 'White Glove Moving Company Bozeman, MT | Legacy Moving Co.',
    description:
      'White glove moving in Bozeman, Montana: careful handling and placement for luxury homes, antiques, pianos, and heirlooms. Get a free quote.',
    h1: 'White Glove Moving Company in Bozeman, MT',
    intro:
      'Some belongings need more than a strong crew. Our white glove service adds careful packing, secure transport, and precise placement for the pieces that matter most.',
    whatItIs: [
      'White glove moving is a higher level of care for valuable and fragile belongings. It includes careful packing, padded transport, and placement in the new home, usually with the same crew from start to finish.',
      'We also move luxury residences and specialty items, including pianos and safes.',
    ],
    whoItHelps: [
      'Owners of luxury homes and estates',
      'Anyone moving antiques or heirloom furniture',
      'Pianos, safes, and other heavy specialty items',
      'Interior designers coordinating a client move',
    ],
    approach: [
      'Every piece is wrapped, padded, and moved on a route planned around the item. We protect floors and walls, and place furniture where you want it.',
      'For the most valuable items, we can add custom crating. Ask for it when you request your quote.',
    ],
    faq: [
      {
        q: 'What is the difference between white glove and standard moving?',
        a: 'White glove adds more careful packing, padded transport, and placement. It is for valuable and fragile items, and the crew stays with the move from start to finish.',
      },
      {
        q: 'Can you move a piano?',
        a: 'Yes, pianos are part of our specialty service. Tell us the make, size, and route when you request your quote.',
      },
      {
        q: 'Do you place furniture in the new home?',
        a: 'Yes. Our crew places each piece where you want it, so the room is set up when the move is done.',
      },
    ],
    related: ['fine-art-moving', 'custom-crating', 'residential-moving'],
  },
  {
    slug: 'custom-crating',
    navLabel: 'Custom Crating',
    cardTitle: 'Custom Crating',
    cardBody: 'Protective crates built to the exact dimensions of your artwork, mirror, or fragile item.',
    icon: 'crate',
    title: 'Custom Crating Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Custom crating in Bozeman, Montana. Crates built to the exact size of your artwork, mirror, or fragile item for safe transport. Request a free quote.',
    h1: 'Custom Crating Company in Bozeman, MT',
    intro:
      'A custom crate protects a piece by fitting it exactly. We build each crate to the dimensions of the item, so it moves without shifting.',
    whatItIs: [
      'Custom crating is the construction of a protective crate around one item. The crate is measured to the piece, lined and padded, and secured so the item cannot move during transport.',
      'We crate artwork, mirrors, glass tabletops, sculpture, antiques, and other items that a blanket or box cannot protect.',
    ],
    whoItHelps: [
      'Owners of paintings, prints, and photography',
      'Collectors moving sculpture or glass',
      'Anyone moving a mirror or glass tabletop',
      'Interior designers and galleries handling installs',
    ],
    approach: [
      'Every crate starts with measurements of the item and the route. Send the dimensions when you request your quote.',
      'We build, line, and secure the crate, then label it so the crew knows how to handle it at each stop.',
    ],
    faq: [
      {
        q: 'How do I request a crate?',
        a: 'Mention it when you request your quote and include the item’s dimensions and any fragile areas. We will build the crate into your move plan.',
      },
      {
        q: 'Is crating included in a standard move?',
        a: 'Crating is quoted separately because each crate is built to the item. Your itemized quote shows it as its own line.',
      },
      {
        q: 'Can you crate items I already own?',
        a: 'Yes, as long as the item can be measured and handled safely. Call us if you are unsure about a specific piece.',
      },
    ],
    related: ['fine-art-moving', 'white-glove-moving'],
  },
  {
    slug: 'fine-art-moving',
    navLabel: 'Art Moving',
    cardTitle: 'Art Moving',
    cardBody:
      'Paintings, sculpture, and photography, packed, crated, and transported with the care each piece needs.',
    icon: 'frame',
    title: 'Art Moving Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Art moving in Bozeman and Montana: careful packing, custom crating, and secure transport for paintings, sculpture, and collections. Get a free quote.',
    h1: 'Art Moving Company in Bozeman, MT',
    intro:
      'Artwork needs more than a standard moving crew. We pack, crate, and transport each piece with the care its value and fragility call for.',
    whatItIs: [
      'Art moving is the careful transport of paintings, sculpture, photography, and other valuable works. It combines hand packing, custom crating when a piece needs it, and secure transport in a truck set up for the move.',
      'Every job starts with a conversation about the pieces, their size and condition, and the route, so the plan fits the artwork.',
    ],
    whoItHelps: [
      'Homeowners and collectors moving a single piece or a full collection',
      'Galleries, studios, and artists relocating work',
      'Interior designers coordinating art for a client',
      'Anyone moving a piece that cannot be replaced',
    ],
    approach: [
      'We inspect and document each piece before packing, and use materials suited to the artwork’s size, medium, and frame.',
      'For larger or more fragile works, we build a custom crate fitted to the piece. See our custom crating service for details.',
      'Valuation and insurance options are reviewed before move day, so you know what is covered before you commit.',
    ],
    faq: [
      {
        q: 'Do you crate artwork?',
        a: 'Yes. Custom crating is one of our services. We build crates sized to each piece so it is secured for transport. Ask for crating when you request your quote.',
      },
      {
        q: 'Can you move one painting, or only full homes?',
        a: 'Both. We move a single piece, a collection, or a full home that includes art.',
      },
      {
        q: 'Do you move art outside Bozeman?',
        a: 'We move art within Bozeman, Big Sky, Belgrade, Livingston, and throughout Southwest Montana. For moves out of state, call us so we can confirm the route and the service.',
      },
      {
        q: 'How do you protect my artwork in transit?',
        a: 'Each piece is packed to its needs, secured inside the truck, and inspected at delivery. Tell us about any fragile areas when you request your quote.',
      },
    ],
    related: ['custom-crating', 'white-glove-moving', 'residential-moving'],
  },
  {
    slug: 'packing',
    navLabel: 'Packing & Unpacking',
    cardTitle: 'Packing & Unpacking',
    cardBody:
      'Full packing, partial packing, unpacking, and loading and unloading, so the move fits your schedule.',
    icon: 'box',
    title: 'Packing Company Bozeman, MT | Legacy Moving Co.',
    description:
      'Packing and unpacking services in Bozeman, Montana: full or partial packing, unpacking, and loading and unloading. Get a free, itemized quote.',
    h1: 'Packing Company in Bozeman, MT',
    intro:
      'Let us handle the boxes. Our team can pack your whole home or just the rooms you choose, then unpack and set up on the other end.',
    whatItIs: [
      'Packing ranges from a full pack, where we pack everything, to a partial pack for the items you choose. Unpacking is available at the new home, and loading and unloading are part of every move.',
      'Packing is its own line in your itemized quote, so you can choose the level of help that fits your budget.',
    ],
    whoItHelps: [
      'Busy professionals with little time to pack',
      'Families moving a full household',
      'Anyone who wants fragile or valuable items packed carefully',
      'People who want the new home unpacked and set up',
    ],
    approach: [
      'We pack room by room, label every box by room, and keep fragile items separate. Our crew unpacks in the rooms you choose.',
    ],
    faq: [
      {
        q: 'Can I pack some rooms and have you pack the rest?',
        a: 'Yes. A partial pack is a common choice. Tell us which rooms you want packed when you request your quote.',
      },
      {
        q: 'Do you unpack at the new home?',
        a: 'Yes. Unpacking is a separate service, and we unpack in the rooms you choose.',
      },
      {
        q: 'Do you pack dishes and electronics?',
        a: 'Yes. We pack household items, including dishes and electronics, and keep fragile items separate for extra care.',
      },
      {
        q: 'Do I need to pack anything before you arrive?',
        a: 'Not if you choose full packing. If you pack yourself, have boxes ready and label them by room.',
      },
    ],
    related: ['residential-moving', 'white-glove-moving', 'fine-art-moving'],
  },
];
