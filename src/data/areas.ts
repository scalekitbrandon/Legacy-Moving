export interface LocalGuideSection {
  heading: string;
  body: string;
}

export interface AreaReview {
  quote: string;
  name: string;
}

export interface AreaFaqItem {
  q: string;
  a: string;
}

export interface CityGuide {
  /** 1-2 sentence hero intro, unique to this town, not reused elsewhere. */
  intro: string;
  /** Compact trust bar line — reuse only claims already approved sitewide. */
  trustBar: string[];
  /** 3-6 service slugs to feature as cards (subset of src/data/services.ts). */
  serviceSlugs: string[];
  /** 150-250 words total, genuinely location-specific. */
  whyLegacy: string[];
  /** The highest-value section: neighborhoods, home types, access, season, routes. */
  localGuide: LocalGuideSection[];
  /** 3-6 nearby town slugs for the "nearby communities" section. */
  nearbySlugs: string[];
  /** Bracket-placeholder testimonials until real reviews exist for this town. */
  reviews: AreaReview[];
  /** 5-8 real questions. Never state a specific price. */
  faq: AreaFaqItem[];
}

export interface Area {
  name: string;
  slug: string;
  distance?: string;
  availability: string;
  guide?: CityGuide;
}

const STANDARD_SERVICES = [
  'local-moving',
  'long-distance-moving',
  'residential-moving',
  'commercial-moving',
  'packing',
  'white-glove-moving',
];

const STANDARD_TRUST_BAR = [
  'Licensed & Insured',
  'Local & Long-Distance Movers',
  'Free, Itemized Quotes',
  'Serving Bozeman & Southwest Montana',
];

export const areas: Area[] = [
  {
    name: 'Bozeman',
    slug: 'bozeman',
    distance: 'Home base',
    availability: 'Bozeman is where Legacy Moving is based, and every move starts and ends here.',
    guide: {
      intro:
        "As Montana State University's hometown and the fastest-growing city in the Gallatin Valley, Bozeman is where Legacy Moving got its start, and it's still the city we know best.",
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Legacy Moving Co. is based right here in Bozeman, so our crews already know the city's neighborhoods, its older downtown homes, and the busy move-in weekends around Montana State University. We handle residential moves of every size, from a studio near campus to a family home in one of Bozeman's newer subdivisions, along with long-distance moves for people relocating in or out of the valley.",
        "What sets us apart in Bozeman is attention to the details that actually affect your move day: narrow alley access downtown, loading rules at newer apartment buildings, and winter weather that can turn a simple move into a planning problem if you're not ready for it. We plan around all of it.",
        'Every Bozeman move starts with an itemized quote, not a guess, and the crew that shows up is the same crew that built your plan. Whether you\'re moving across town, into a Bozeman apartment for the first time, or packing up a house full of antiques and art, we treat the job with the same care.',
      ],
      localGuide: [
        {
          heading: 'Neighborhoods We Know',
          body: 'From the historic homes downtown and in the Cannery District, to the student rentals and apartments around the Montana State University campus, to newer subdivisions like Bridger Creek and Flanders Mill on the edges of town, Bozeman is a mix of housing types, and each one moves a little differently.',
        },
        {
          heading: 'Parking & Access',
          body: 'Downtown streets often require a parking permit or a reserved loading zone for a moving truck, and the alleys behind older homes can be narrow. Newer apartment and condo buildings sometimes require a reserved loading dock window. Tell us your address when you request a quote and we will plan around it.',
        },
        {
          heading: 'Seasonal Considerations',
          body: "Bozeman winters bring snow and ice from November through March, which can affect driveway and sidewalk access on moving day. Spring can bring mud season on some rural and unpaved roads outside town. We build the season into the move plan, not just the date.",
        },
        {
          heading: 'Common Routes',
          body: 'Most local moves run along 19th Avenue, Main Street, or Oak Street. Long-distance moves typically start from I-90, which runs straight through Bozeman, making it a convenient hub for moves across Montana and beyond.',
        },
      ],
      nearbySlugs: ['belgrade', 'big-sky', 'livingston', 'manhattan', 'gallatin-gateway', 'three-forks'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Bozeman, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Bozeman?',
          a: 'Two to four weeks is ideal, especially around move-in and move-out weekends near Montana State University and at the end of the month. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Bozeman?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Bozeman and nearby towns like Belgrade or Big Sky?',
          a: 'Yes. We regularly move between Bozeman and the surrounding Gallatin Valley communities, including Belgrade, Four Corners, Gallatin Gateway, Manhattan, Livingston, and Big Sky.',
        },
        {
          q: 'Do you offer long-distance moving from Bozeman?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Bozeman do you serve?',
          a: 'We serve Bozeman and the surrounding communities, including Belgrade, Four Corners, Gallatin Gateway, Manhattan, Livingston, Big Sky, Three Forks, Ennis, West Yellowstone, and Paradise Valley.',
        },
        {
          q: 'Do you move apartments without an elevator in Bozeman?',
          a: 'Yes. Walk-up moves are common in Bozeman. Tell us the floor and unit layout when you request your quote so we can staff the crew for the stairs.',
        },
      ],
    },
  },
  {
    name: 'Belgrade',
    slug: 'belgrade',
    distance: '~8 miles from Bozeman',
    availability: 'We serve Belgrade regularly for every type of move.',
    guide: {
      intro:
        "Home to Bozeman Yellowstone International Airport, Belgrade is one of the fastest-growing communities in the Gallatin Valley, and one of the towns we serve most often.",
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Legacy Moving Co. is based just down the road in Bozeman, and Belgrade is one of the communities we move in and out of most. Whether it's a new subdivision on the edge of town or a home near the airport, we know the routes, the traffic patterns on Jackrabbit Lane and Thorpe Road, and what it takes to get a move done efficiently so close to I-90.",
        "Belgrade has grown quickly over the past decade, which means a mix of established neighborhoods and brand-new construction, each with its own access and parking realities. We plan around both, whether that means coordinating with a new HOA or working around a narrower older street.",
        "Every Belgrade move starts with an itemized quote, not a guess, and the crew that shows up is the same crew that built your plan. Whether you're moving a few minutes across town or relocating in from out of state through Bozeman Yellowstone International Airport, we treat the job with the same care.",
      ],
      localGuide: [
        {
          heading: 'A Fast-Growing Community',
          body: "Belgrade has added new subdivisions and apartment communities on nearly every edge of town over the past several years, alongside its older downtown core near Broadway and Main. Each part of town has its own access considerations, and we plan around whichever one you're in.",
        },
        {
          heading: 'Parking & Access',
          body: 'Newer developments often have HOA rules or reserved loading areas, while homes near the historic downtown core can have narrower streets and less parking. Tell us your address when you request a quote and we will plan around it.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Like the rest of the Gallatin Valley, Belgrade sees real winter weather from November through March, which can affect driveway and sidewalk access on moving day. We build the season into the plan, not just the date.',
        },
        {
          heading: 'Common Routes',
          body: 'Belgrade sits right along I-90 and Jackrabbit Lane, with Bozeman Yellowstone International Airport on its east side. That makes it a convenient stop for both local moves and long-distance moves heading in or out of the valley.',
        },
      ],
      nearbySlugs: ['bozeman', 'four-corners', 'manhattan', 'three-forks', 'gallatin-gateway'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Belgrade, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Belgrade?',
          a: 'Two to four weeks is ideal, especially during the busy spring and summer moving season in the Gallatin Valley. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Belgrade?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Belgrade and Bozeman?',
          a: 'Yes. We regularly move between Belgrade and Bozeman, along with the rest of our Southwest Montana service area.',
        },
        {
          q: 'Do you offer long-distance moving from Belgrade?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details. Belgrade\'s location near Bozeman Yellowstone International Airport also makes it a convenient starting point.',
        },
        {
          q: 'What areas around Belgrade do you serve?',
          a: 'We serve Belgrade as part of our coverage across Bozeman and Southwest Montana, including Four Corners, Manhattan, Three Forks, and Gallatin Gateway.',
        },
      ],
    },
  },
  {
    name: 'Four Corners',
    slug: 'four-corners',
    distance: '~5 miles from Bozeman',
    availability: 'We serve Four Corners regularly for every type of move.',
    guide: {
      intro:
        'Four Corners sits just outside Bozeman at the junction of Huffine Lane and Cottonwood Road, and it\'s one of the closest communities we serve.',
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Four Corners may not have its own ZIP code, but it's grown into one of the busiest parts of the Gallatin Valley, with new neighborhoods, shopping, and homes springing up along Huffine Lane and Cottonwood Road. We move in and out of this area regularly, and we know the traffic patterns on Huffine during peak hours as well as the subdivisions tucked just off the highway.",
        "Because Four Corners sits right between Bozeman and the Gallatin Canyon, it's also a common staging point for moves headed toward Big Sky or back into town. We plan the route accordingly, whichever direction you're headed.",
        "As with every Legacy move, a Four Corners job starts with an itemized quote and the same crew from start to finish, so there are no surprises on moving day, whether you're moving a mile down the road or across the state.",
      ],
      localGuide: [
        {
          heading: 'A Growing Highway Corridor',
          body: 'Four Corners has grown around the intersection of Huffine Lane (Highway 191) and Cottonwood Road, with new subdivisions, townhomes, and shopping centers filling in what used to be open farmland. Most homes here are newer construction.',
        },
        {
          heading: 'Parking & Access',
          body: "Newer subdivisions around Four Corners often have HOA guidelines for moving trucks, and some streets are still being built out. Let us know your address and we'll confirm access ahead of time.",
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Winter driving on Huffine Lane and Cottonwood Road can slow things down between November and March. We build extra time into the plan when the weather calls for it.',
        },
        {
          heading: 'Common Routes',
          body: "Four Corners sits right where Huffine Lane meets Highway 191 toward Big Sky, making it a quick move from almost anywhere in the Gallatin Valley.",
        },
      ],
      nearbySlugs: ['bozeman', 'gallatin-gateway', 'belgrade', 'big-sky'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Four Corners, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Four Corners?',
          a: 'Two to four weeks is ideal, especially during the busy spring and summer moving season. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Four Corners?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Four Corners and Bozeman?',
          a: 'Yes. We regularly move between Four Corners and Bozeman, along with the rest of our Southwest Montana service area.',
        },
        {
          q: 'Do you offer long-distance moving from Four Corners?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Four Corners do you serve?',
          a: 'We serve Four Corners as part of our coverage across Bozeman and Southwest Montana, including Gallatin Gateway, Belgrade, and Big Sky.',
        },
      ],
    },
  },
  {
    name: 'Gallatin Gateway',
    slug: 'gallatin-gateway',
    distance: '~12 miles from Bozeman',
    availability: 'We serve Gallatin Gateway regularly for every type of move.',
    guide: {
      intro:
        'As its name suggests, Gallatin Gateway sits at the mouth of the Gallatin Canyon, the route every Big Sky and Yellowstone-bound move passes through.',
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Gallatin Gateway is a small community with a big role: it's the last stop before Highway 191 climbs into the Gallatin Canyon toward Big Sky and Yellowstone. We move households here regularly, from historic homes near the old Gallatin Gateway Inn to newer properties along the highway.",
        'Because so many of our Big Sky and canyon moves pass directly through Gallatin Gateway, we know the route, the seasonal road conditions, and what it takes to stage a move headed further up the canyon.',
        "Every move starts with an itemized quote, and the crew that shows up is the crew that planned it, whether you're settling into Gallatin Gateway itself or just passing through on your way further south.",
      ],
      localGuide: [
        {
          heading: 'A Canyon Gateway Community',
          body: 'Gallatin Gateway is smaller and more rural than Bozeman, with properties ranging from historic homes near the old railroad depot to larger acreages along the highway. Many homes here have more land and longer driveways than in-town properties.',
        },
        {
          heading: 'Parking & Access',
          body: 'Long driveways and gravel access roads are common here, and some properties sit well off Highway 191. Tell us about your specific access when you request a quote.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Highway 191 through the canyon can see snow and ice well into spring, which matters for any move headed toward Big Sky. We watch the forecast and plan the route accordingly.',
        },
        {
          heading: 'Common Routes',
          body: "Highway 191 is the only route through Gallatin Gateway, connecting Bozeman to Big Sky and eventually West Yellowstone. It's the route for nearly every move we run south of town.",
        },
      ],
      nearbySlugs: ['four-corners', 'bozeman', 'big-sky', 'belgrade'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Gallatin Gateway, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Gallatin Gateway?',
          a: 'Two to four weeks is ideal, especially during the busy summer season. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Gallatin Gateway?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Gallatin Gateway and Bozeman?',
          a: 'Yes. We regularly move between Gallatin Gateway and Bozeman, along with the rest of our Southwest Montana service area.',
        },
        {
          q: 'Do you offer long-distance moving from Gallatin Gateway?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Gallatin Gateway do you serve?',
          a: 'We serve Gallatin Gateway as part of our coverage across Bozeman and Southwest Montana, including Four Corners, Belgrade, and Big Sky.',
        },
      ],
    },
  },
  {
    name: 'Manhattan',
    slug: 'manhattan',
    distance: '~20 miles from Bozeman',
    availability: 'We serve Manhattan regularly for every type of move.',
    guide: {
      intro:
        'A small agricultural town along old Highway 10, Manhattan still carries its early Dutch-settler roots alongside new growth from the Bozeman area.',
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Manhattan is a quieter, more rural community than Bozeman, but it's part of the Gallatin Valley we serve regularly. Many homes here sit on larger lots, and the town's small downtown core has a different feel than the newer subdivisions nearby.",
        "We handle moves in and out of Manhattan with the same crew and process as anywhere else in the valley: an itemized quote, careful handling, and a plan built around your specific address, whether that's a farmhouse on acreage or a home closer to Main Street.",
        'Manhattan sits a bit further from Bozeman than some of the towns we serve, which we factor into scheduling and routing, especially for moves that also involve packing or specialty items.',
      ],
      localGuide: [
        {
          heading: 'A Small-Town, Rural Feel',
          body: "Manhattan's homes range from in-town properties near Main Street to larger rural lots on the outskirts. It's a quieter, more agricultural community than Bozeman, and moves here often involve more open land and longer driveways.",
        },
        {
          heading: 'Parking & Access',
          body: 'In-town streets are generally easy to access, while rural properties may have gravel roads or longer driveways. Let us know what to expect when you request your quote.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Open, exposed roads around Manhattan can see more wind and drifting snow in winter than in-town Bozeman streets. We plan around it.',
        },
        {
          heading: 'Common Routes',
          body: 'Manhattan sits along old Highway 10 and near I-90, making it a straightforward stop for both local Gallatin Valley moves and long-distance moves passing through.',
        },
      ],
      nearbySlugs: ['belgrade', 'bozeman', 'three-forks', 'four-corners'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Manhattan, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Manhattan?',
          a: 'Two to four weeks is ideal, especially during the busy spring and summer moving season. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Manhattan?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Manhattan and Bozeman?',
          a: 'Yes. We regularly move between Manhattan and Bozeman, along with the rest of our Southwest Montana service area.',
        },
        {
          q: 'Do you offer long-distance moving from Manhattan?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Manhattan do you serve?',
          a: 'We serve Manhattan as part of our coverage across Bozeman and Southwest Montana, including Belgrade, Three Forks, and Four Corners.',
        },
      ],
    },
  },
  {
    name: 'Livingston',
    slug: 'livingston',
    distance: '~25-30 miles from Bozeman',
    availability: 'We serve Livingston regularly for every type of move.',
    guide: {
      intro:
        "A historic railroad town on the Yellowstone River, Livingston is known for its wind, its fly-fishing, and its gateway position to Paradise Valley and Yellowstone's north entrance.",
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Livingston has a character all its own: a historic downtown built around the old Northern Pacific depot, a strong fly-fishing community, and some of the most consistent wind in Montana. We've moved households in and out of Livingston enough to know what that wind means for a moving day, and we plan around it.",
        'Homes here range from century-old downtown properties to newer construction on the edges of town and out toward Paradise Valley. Each comes with its own access considerations, and we handle them the same way we handle every move: with an itemized quote and a plan built around your actual address.',
        "Livingston is also the gateway to Paradise Valley and Yellowstone's north entrance, so we're familiar with moves that continue further south along Highway 89 as well.",
      ],
      localGuide: [
        {
          heading: 'Historic Downtown and Beyond',
          body: "Livingston's downtown is full of well-preserved, century-old buildings and homes near the old Northern Pacific railroad depot, while newer neighborhoods have spread toward the edges of town. Older homes can mean narrower streets and less off-street parking.",
        },
        {
          heading: 'Parking & Access',
          body: "Downtown Livingston streets can be tight, and some historic homes have limited driveway space. Tell us your address and we'll plan the truck access ahead of time.",
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Livingston is known for strong, sustained wind, especially in the spring and fall, which can affect loading and unloading large or awkward items. We factor it into the plan.',
        },
        {
          heading: 'Common Routes',
          body: "Livingston sits along I-90 and Highway 89, which continues south through Paradise Valley toward Yellowstone's north entrance. It's a natural stop for moves connecting Bozeman and the Paradise Valley corridor.",
        },
      ],
      nearbySlugs: ['paradise-valley-emigrant', 'bozeman', 'big-sky', 'three-forks'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Livingston, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Livingston?',
          a: 'Two to four weeks is ideal, especially during the busy summer season. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Livingston?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Livingston and Bozeman?',
          a: 'Yes. We regularly move between Livingston and Bozeman, along with the rest of our Southwest Montana service area.',
        },
        {
          q: 'Do you offer long-distance moving from Livingston?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Livingston do you serve?',
          a: 'We serve Livingston and the Paradise Valley corridor as part of our coverage across Bozeman and Southwest Montana.',
        },
      ],
    },
  },
  {
    name: 'Big Sky',
    slug: 'big-sky',
    distance: '~45-50 miles from Bozeman',
    availability:
      'We serve Big Sky regularly, especially for larger or higher-value moves. Call us to confirm availability for your move.',
    guide: {
      intro:
        "One of Montana's premier mountain destinations, Big Sky draws year-round residents and second-home owners alike, and it's one of our most requested moves outside Bozeman.",
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        'Big Sky moves are different from an in-town Bozeman move, and we plan them that way. Between Meadow Village, Mountain Village, Town Center, and the surrounding mountain neighborhoods, properties range from condos to large mountain homes, often with HOA rules, gated access, or limited loading windows that have to be coordinated in advance.',
        'We regularly handle Big Sky moves, especially for larger households and higher-value belongings, from furniture and antiques to fine art that needs careful packing and transport up the canyon. The drive itself, nearly an hour from Bozeman through the Gallatin Canyon, is part of the plan, not an afterthought.',
        'Every Big Sky move starts with an itemized quote that accounts for the canyon drive and any building access requirements, so there are no surprises when the truck arrives.',
      ],
      localGuide: [
        {
          heading: 'Mountain Neighborhoods',
          body: 'Big Sky is split across Meadow Village, Mountain Village, Town Center, and surrounding areas like Moonlight Basin and Spanish Peaks. Each has its own mix of condos, townhomes, and larger mountain homes, often managed by an HOA.',
        },
        {
          heading: 'Building & Access Rules',
          body: 'Many Big Sky condo and townhome buildings require a reserved loading dock or elevator window, and some communities have gated or seasonal road access. Tell us your building and unit when you request a quote so we can plan around it.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Big Sky sees heavy snow in winter and can have limited daylight and road conditions through the canyon. We watch the forecast and build extra time into winter moves.',
        },
        {
          heading: 'Common Routes',
          body: 'The only way in and out of Big Sky is Highway 191 through the Gallatin Canyon, roughly 45 to 50 minutes from Bozeman. We plan every Big Sky move around that drive.',
        },
      ],
      nearbySlugs: ['gallatin-gateway', 'four-corners', 'bozeman', 'west-yellowstone'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Big Sky, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance from Bozeman. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Big Sky?',
          a: 'Two to four weeks is ideal, especially during ski season and the summer peak. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Big Sky?',
          a: 'Yes. Full and partial packing are available, including careful handling for fine art and antiques. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Big Sky and Bozeman?',
          a: 'Yes. Big Sky is one of our most requested moves outside Bozeman, especially for larger households and higher-value belongings.',
        },
        {
          q: 'Do you offer long-distance moving from Big Sky?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Big Sky do you serve?',
          a: 'We serve all of Big Sky, including Meadow Village, Mountain Village, and Town Center, as part of our coverage across Southwest Montana.',
        },
      ],
    },
  },
  {
    name: 'Three Forks',
    slug: 'three-forks',
    distance: '~30 miles from Bozeman',
    availability: 'We serve Three Forks. Call us to confirm scheduling for your move date.',
    guide: {
      intro:
        'Three Forks sits where the Jefferson, Madison, and Gallatin Rivers meet to form the Missouri River, a small historic town with deep Lewis and Clark roots.',
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "Three Forks is one of the smaller communities we serve, with a close-knit, historic downtown and homes spread out toward the surrounding countryside. It's quieter than Bozeman, and moves here often involve more rural properties and longer driveways than an in-town move.",
        "We handle Three Forks moves with the same process as anywhere else: an itemized quote, careful planning around your specific address, and a crew that shows up ready to work, whether that's a home near Main Street or a property out toward the Missouri Headwaters.",
        'Three Forks sits a bit further from Bozeman than some of the towns we serve, which we factor into scheduling, especially for moves that also involve packing, specialty items, or a long-distance leg.',
      ],
      localGuide: [
        {
          heading: 'A Historic River Town',
          body: "Three Forks' downtown is small and historic, with homes nearby dating back generations, while other properties sit out toward the Missouri Headwaters and surrounding farmland. Rural properties often have longer driveways and more open land.",
        },
        {
          heading: 'Parking & Access',
          body: 'In-town streets are generally easy to access, while rural and riverside properties may have gravel roads or seasonal access. Let us know what to expect when you request your quote.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Open roads and farmland around Three Forks can see more wind and drifting snow in winter. We plan around it the same way we do anywhere else in the valley.',
        },
        {
          heading: 'Common Routes',
          body: 'Three Forks sits along I-90, making it a straightforward stop for moves connecting Bozeman, Manhattan, Belgrade, and points further west like Ennis.',
        },
      ],
      nearbySlugs: ['manhattan', 'belgrade', 'bozeman', 'ennis'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Three Forks, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Three Forks?',
          a: 'Two to four weeks is ideal. Call us and we will tell you what is available, especially during the busy summer season.',
        },
        {
          q: 'Do you provide packing services in Three Forks?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Three Forks and Bozeman?',
          a: 'Yes. We regularly move between Three Forks and Bozeman, along with the rest of our Southwest Montana service area.',
        },
        {
          q: 'Do you offer long-distance moving from Three Forks?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Three Forks do you serve?',
          a: 'We serve Three Forks as part of our coverage across Bozeman and Southwest Montana, including Manhattan, Belgrade, and Ennis.',
        },
      ],
    },
  },
  {
    name: 'Ennis',
    slug: 'ennis',
    distance: '~50 miles from Bozeman',
    availability:
      'We serve Ennis depending on the scope of the move. Call us to confirm availability for your move.',
    guide: {
      intro:
        'A small fly-fishing town on the Madison River, Ennis is a popular destination for anglers and second-home owners in the Madison Valley.',
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        'Ennis sits further from Bozeman than most of the towns we serve, out in the Madison Valley along the Madison River. It\'s a popular spot for fly-fishing and second homes, and moves here often involve seasonal properties as well as full-time households.',
        'Because of the distance, we plan Ennis moves around the scope of the job. Larger moves and higher-value belongings are easiest for us to schedule efficiently for the drive out. Call us with your details and we\'ll confirm availability and timing for your specific move.',
        "As with every move, you'll get an itemized quote before anything is confirmed, so you know exactly what's included for a move to or from Ennis.",
      ],
      localGuide: [
        {
          heading: 'A Fly-Fishing Destination',
          body: 'Ennis is known for the Madison River and draws both full-time residents and seasonal second-home owners. Homes range from in-town properties near Main Street to riverside and ranch properties outside town.',
        },
        {
          heading: 'Parking & Access',
          body: 'Many Ennis-area properties sit on larger lots with gravel or seasonal roads. Let us know your address and any access considerations when you request a quote.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'The Madison Valley can see heavy snow and cold temperatures in winter, and some seasonal properties are harder to access outside the warmer months. We plan the timing with you.',
        },
        {
          heading: 'Common Routes',
          body: 'Ennis is reached from Bozeman via Norris and Highway 287, about 50 miles southwest. It\'s a longer drive than our closer service areas, which is part of why we plan these moves around scope and scheduling.',
        },
      ],
      nearbySlugs: ['three-forks', 'bozeman', 'big-sky', 'west-yellowstone'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Ennis, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance from Bozeman. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Ennis?',
          a: 'Two to four weeks is ideal, especially during fishing season in the summer months. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Ennis?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Ennis and Bozeman?',
          a: 'Yes, depending on the scope of the move. Call us with your details and we will confirm availability and timing.',
        },
        {
          q: 'Do you offer long-distance moving from Ennis?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Ennis do you serve?',
          a: 'We serve Ennis and the Madison Valley as part of our broader Southwest Montana coverage. Call us to confirm availability for your specific location.',
        },
      ],
    },
  },
  {
    name: 'West Yellowstone',
    slug: 'west-yellowstone',
    distance: '~90 miles from Bozeman',
    availability:
      'West Yellowstone is on our route mainly for larger or higher-value moves, given the distance. Call us to confirm availability for a smaller move.',
    guide: {
      intro:
        "The western gateway to Yellowstone National Park, West Yellowstone is a seasonal destination town nearly 90 miles south of Bozeman.",
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        "West Yellowstone is the furthest community we regularly serve, sitting right at Yellowstone National Park's west entrance, nearly 90 miles from Bozeman. The town's population swells with seasonal workers and visitors for much of the year, and housing here ranges from year-round residences to seasonal rentals.",
        "Because of the distance and the town's seasonal rhythm, we plan West Yellowstone moves mainly around larger households and higher-value belongings, where the trip makes sense for both of us. If you're planning a smaller move to or from West Yellowstone, call us and we'll talk through timing and availability honestly rather than guess.",
        'Every move, regardless of size, starts with an itemized quote, so you know exactly what is covered before anything is confirmed.',
      ],
      localGuide: [
        {
          heading: 'A Seasonal Gateway Town',
          body: "West Yellowstone's population and housing needs shift with Yellowstone National Park's visitor season, with a mix of year-round homes and seasonal rentals. Many moves here are tied to seasonal work or second homes.",
        },
        {
          heading: 'Parking & Access',
          body: "Winter conditions and seasonal businesses can affect access and parking in town. Let us know your address and timing so we can plan around it.",
        },
        {
          heading: 'Seasonal Considerations',
          body: 'West Yellowstone sees long, cold winters with significant snowfall, and some roads and properties are harder to access outside the warmer months. Timing matters more here than almost anywhere else we serve.',
        },
        {
          heading: 'Common Routes',
          body: "West Yellowstone is reached from Bozeman via Highway 191 through Big Sky and the Gallatin Canyon, about an hour and a half each way. That drive is a central part of how we plan and price these moves.",
        },
      ],
      nearbySlugs: ['big-sky', 'ennis', 'bozeman'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in West Yellowstone, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the nearly 90-mile distance from Bozeman. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in West Yellowstone?',
          a: "Book as early as you can, especially during Yellowstone's busy summer visitor season. Call us and we will tell you what is available.",
        },
        {
          q: 'Do you provide packing services in West Yellowstone?',
          a: 'Yes. Full and partial packing are available. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between West Yellowstone and Bozeman?',
          a: 'We do, mainly for larger households or higher-value moves where the drive makes sense. Call us with your details and we will confirm availability honestly.',
        },
        {
          q: 'Do you offer long-distance moving from West Yellowstone?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around West Yellowstone do you serve?',
          a: 'We serve West Yellowstone as the furthest point in our Southwest Montana coverage, along with Big Sky and Ennis along the way.',
        },
      ],
    },
  },
  {
    name: 'Paradise Valley / Emigrant',
    slug: 'paradise-valley-emigrant',
    availability:
      'We serve Paradise Valley and Emigrant along the Yellowstone River corridor. Call us to confirm availability and scheduling for your move.',
    guide: {
      intro:
        "A scenic stretch of the Yellowstone River between Livingston and Yellowstone's north entrance, Paradise Valley is home to ranches, second homes, and the community of Emigrant.",
      trustBar: STANDARD_TRUST_BAR,
      serviceSlugs: STANDARD_SERVICES,
      whyLegacy: [
        'Paradise Valley and Emigrant sit along Highway 89 south of Livingston, a scenic, rural stretch of the Yellowstone River valley known for ranches, fly-fishing access, and destinations like Chico Hot Springs. Properties here tend to be larger and more spread out than in-town moves, with longer driveways and more varied road conditions.',
        'We serve this area as part of our broader Livingston and Southwest Montana coverage, and we plan each move around the specific property, whether that\'s a full-time ranch home or a seasonal getaway. Call us to confirm availability and scheduling for your move.',
        'As with every Legacy move, you will get an itemized quote before anything is confirmed, so the price you approve is the price you pay.',
      ],
      localGuide: [
        {
          heading: 'A Rural River Valley',
          body: "Paradise Valley runs along the Yellowstone River between Livingston and Yellowstone's north entrance, with ranches, riverside homes, and the small community of Emigrant. Properties here are generally more spread out than in-town moves.",
        },
        {
          heading: 'Parking & Access',
          body: 'Long driveways, gravel roads, and ranch gates are common throughout the valley. Let us know your specific address and access when you request a quote.',
        },
        {
          heading: 'Seasonal Considerations',
          body: 'Highway 89 through Paradise Valley can see winter weather and wind similar to Livingston. We plan the timing and route around the season.',
        },
        {
          heading: 'Common Routes',
          body: "Highway 89 is the only route through Paradise Valley, connecting Livingston to Yellowstone's north entrance at Gardiner. It's a straightforward extension of our Livingston service area.",
        },
      ],
      nearbySlugs: ['livingston', 'bozeman', 'big-sky'],
      reviews: [
        {
          quote:
            'Beau and his crew were incredible to work with. They are responsive, kind, and so helpful. I could not recommend them more highly for any moving needs!!!!',
          name: 'Sarah Skoglund, Google Review',
        },
        {
          quote: 'Very experienced, very patient and the job was done with care. Thank you!',
          name: 'Tyler Erickson, Google Review',
        },
      ],
      faq: [
        {
          q: 'How much does it cost to hire movers in Paradise Valley, MT?',
          a: 'It depends on the size of your move, how much packing you need, and the distance. We provide a free, itemized quote before you commit, so you know the full price upfront.',
        },
        {
          q: 'How far in advance should I book movers in Paradise Valley or Emigrant?',
          a: 'Two to four weeks is ideal, especially during the busy summer season. Call us and we will tell you what is available.',
        },
        {
          q: 'Do you provide packing services in Paradise Valley?',
          a: 'Yes. Full and partial packing are available, along with unpacking at your new home. See our packing services for details.',
        },
        {
          q: 'Do you move furniture between Paradise Valley and Livingston or Bozeman?',
          a: 'Yes. We serve Paradise Valley and Emigrant as part of our Livingston and Southwest Montana coverage.',
        },
        {
          q: 'Do you offer long-distance moving from Paradise Valley?',
          a: 'Yes. We serve all 50 states for long-distance moves. See our long-distance moving page for details.',
        },
        {
          q: 'What areas around Paradise Valley do you serve?',
          a: 'We serve the full Paradise Valley corridor, including Emigrant, as part of our coverage around Livingston and Southwest Montana.',
        },
      ],
    },
  },
];

export const serviceAreas = areas.map((area) => area.name);
