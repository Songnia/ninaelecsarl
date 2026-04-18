import { GraphQLClient, gql } from 'graphql-request';

const API_ENDPOINT = process.env.HYGRAPH_MANAGEMENT_ENDPOINT; // Using the non-CDN management endpoint to write content
const PAT = process.env.HYGRAPH_PAT;

if (!API_ENDPOINT || !PAT) {
    console.error('Missing HYGRAPH_MANAGEMENT_ENDPOINT or HYGRAPH_PAT in environment.');
    process.exit(1);
}

const client = new GraphQLClient(API_ENDPOINT, {
    headers: {
        Authorization: `Bearer ${PAT}`,
    }
});

const clients = [
    {
        title: 'Neon Bank OS',
        slug: 'neon-bank-os',
        category: 'Platform Design',
        description: 'Complete systemic overhaul of a leading fintech OS, focusing on brutalist efficiency, rapid transaction flows, and completely tearing down the "clean tech" aesthetic of modern banking.',
        services: ['UX/UI Design', 'Frontend Development', 'Platform Architecture'],
        imageUrl: '/src/assets/img/hero_collage_2.png',
        testimonialQuote: "Finally, an agency that understands that the attention economy requires dominance, not just 'clean design'.",
        testimonialAuthor: "Kyle Reese",
        testimonialRole: "VP of Growth, Neon Bank"
    },
    {
        title: 'Solarity Energy',
        slug: 'solarity-energy',
        category: 'Brand Architecture',
        description: 'A ground-up rebuild of Solarity Energy’s digital footprint, unifying their sprawling brand identity into a single cohesive system.',
        services: ['Branding', 'Web Design'],
        imageUrl: '/src/assets/img/service_branding.png',
        testimonialQuote: '',
        testimonialAuthor: '',
        testimonialRole: ''
    },
    {
        title: 'Hyperion Motors',
        slug: 'hyperion-motors',
        category: 'Interactive 3D Web',
        description: 'Constructed an unparalleled interactive 3D web experience that allows users to explore Hyperion engines in real-time right from their browsers.',
        services: ['3D WebGL', 'Technical Strategy', 'UI Design'],
        imageUrl: '/src/assets/img/blog_featured_1.png',
        testimonialQuote: '',
        testimonialAuthor: '',
        testimonialRole: ''
    },
    {
        title: 'Aura Skincare',
        slug: 'aura-skincare',
        category: 'E-Commerce UX/UI',
        description: 'Transformed an underperforming e-commerce checkout flow into a ruthless conversion engine, increasing sales by 140% in Q1.',
        services: ['UX/UI Design', 'CRO', 'Shopify Dev'],
        imageUrl: '/src/assets/img/service_market_research.png',
        testimonialQuote: '',
        testimonialAuthor: '',
        testimonialRole: ''
    },
    {
        title: 'Nexus VR',
        slug: 'nexus-vr',
        category: 'Digital Campaign',
        description: 'Spearheaded the Nexus VR global rollout campaign, generating digital hype through dark, glitch-art inspired interactive experiences.',
        services: ['Digital Marketing', 'Interactive Design'],
        imageUrl: '/src/assets/img/blog_featured_3.png',
        testimonialQuote: "They didn't just build a website; they constructed a brutal, effective lead-generation machine that scaled our ARR by 300%.",
        testimonialAuthor: "Sarah Connor",
        testimonialRole: "CMO, Nexus VR"
    },
    {
        title: 'Omni Logistics',
        slug: 'omni-logistics',
        category: 'Dashboard Dev',
        description: 'Built a proprietary internal tool for Omni Logistics capable of tracking global freight on a custom, high-density map UI.',
        services: ['Dashboard Design', 'Data Visualization', 'Frontend Development'],
        imageUrl: '/src/assets/img/service_digital_design.png',
        testimonialQuote: "The velocity of their team is terrifying. They design with mathematical precision and ruthless creativity.",
        testimonialAuthor: "Marcus Wright",
        testimonialRole: "Founder, Omni Logistics"
    },
];

const blogs = [
    {
        title: 'Why Aesthetic Dominance Wins Markets',
        slug: 'why-aesthetic-dominance-wins-markets',
        category: 'Strategy',
        excerpt: 'How we shifted an entire industry’s paradigm by applying ruthless, minimalist aesthetic rules to a legacy B2B player.',
        content: '<div><h2>How we approached the legacy problem</h2><p>Most B2B platforms rely on safe, predictable designs. We decided to shatter that template by introducing stark contrast, neon highlights, and typography that demands attention.</p></div>',
        readTime: 5,
        publishedDate: '2026-10-12T00:00:00Z',
        imageUrl: '/src/assets/img/blog_featured_2.png'
    },
    {
        title: 'The Death of the "Clean" Corporate Site',
        slug: 'the-death-of-the-clean-corporate-site',
        category: 'Design',
        excerpt: 'B2B platforms have looked identical for a decade. It\'s time to bring personality, brutalism, and neon back to SaaS.',
        content: '<div><h2>Boring is risky</h2><p>In a sea of identical competitors, being invisible is far more dangerous than being polarizing.</p></div>',
        readTime: 6,
        publishedDate: '2026-09-28T00:00:00Z',
        imageUrl: '/src/assets/img/blog_featured_3.png'
    },
    {
        title: 'Generative UI: Building Interfaces that Build Themselves',
        slug: 'generative-ui-building-interfaces-that-build-themselves',
        category: 'Technology',
        excerpt: 'A deep dive into our stack that allows user interfaces to reconstruct dynamically based on user engagement metrics.',
        content: '<div><h2>The future is adaptive</h2><p>By leveraging real-time analytics, we have built UIs that literally shape-shift to match the user\'s dominant behavior patterns.</p></div>',
        readTime: 8,
        publishedDate: '2026-09-15T00:00:00Z',
        imageUrl: '/src/assets/img/blog_featured_4.png'
    },
    {
        title: 'Positioning for the Post-Attention Economy',
        slug: 'positioning-for-the-post-attention-economy',
        category: 'Strategy',
        excerpt: 'When everyone has 5 seconds of patience, your brand’s visual hook isn’t just an advantage, it’s the only metric that matters.',
        content: '<div><h2>The 5 second rule</h2><p>If you cannot captivate your user in 5 seconds, your backend infrastructure doesn\'t matter.</p></div>',
        readTime: 4,
        publishedDate: '2026-08-30T00:00:00Z',
        imageUrl: '/src/assets/img/blog_featured_1.png'
    },
    {
        title: 'How We hire at [AGENCY_NAME]: The "Anti-Portfolio"',
        slug: 'how-we-hire-at-agency-name-the-anti-portfolio',
        category: 'Culture',
        excerpt: 'Why we ignore traditional portfolios and focus on rapid-fire, chaos-driven design hackathons.',
        content: '<div><h2>Ditching the polish</h2><p>We want to see how you design when everything is falling apart. That\'s what client work feels like.</p></div>',
        readTime: 7,
        publishedDate: '2026-08-14T00:00:00Z',
        imageUrl: '/src/assets/img/blog_featured_3.png'
    },
    {
        title: 'Neumorphism is Dead. Long Live High-Contrast Brutalism',
        slug: 'neumorphism-is-dead-long-live-high-contrast-brutalism',
        category: 'Design',
        excerpt: 'Our agency manifesto on why stark colors, thick strokes, and immense typography is the future of the web.',
        content: '<div><h2>The era of soft shadows is over</h2><p>Brutalism isn\'t about making things ugly; it\'s about stripping away pretense until only function and raw impact remain.</p></div>',
        readTime: 5,
        publishedDate: '2026-07-22T00:00:00Z',
        imageUrl: '/src/assets/img/blog_featured_2.png'
    },
];

const CREATE_CLIENT_MUTATION = gql`
  mutation CreateClient(
    $title: String!
    $slug: String!
    $category: String
    $description: String
    $services: [String!]
    $imageUrl: String
    $testimonialQuote: String
    $testimonialAuthor: String
    $testimonialRole: String
  ) {
    createClient(
      data: {
        title: $title
        slug: $slug
        category: $category
        description: $description
        services: $services
        imageUrl: $imageUrl
        testimonialQuote: $testimonialQuote
        testimonialAuthor: $testimonialAuthor
        testimonialRole: $testimonialRole
      }
    ) {
      id
    }
  }
`;

const PUBLISH_CLIENT_MUTATION = gql`
  mutation PublishClient($id: ID!) {
    publishClient(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

const CREATE_BLOG_MUTATION = gql`
  mutation CreateBlog(
    $title: String!
    $slug: String!
    $category: String
    $excerpt: String
    $content: String
    $readTime: Int
    $imageUrl: String
    $publishedDate: Date
  ) {
    createBlog(
      data: {
        title: $title
        slug: $slug
        category: $category
        excerpt: $excerpt
        content: $content
        readTime: $readTime
        imageUrl: $imageUrl
        publishedDate: $publishedDate
      }
    ) {
      id
    }
  }
`;

const PUBLISH_BLOG_MUTATION = gql`
  mutation PublishBlog($id: ID!) {
    publishBlog(where: { id: $id }, to: PUBLISHED) {
      id
    }
  }
`;

async function migrateData() {
    console.log('Starting migration script...');

    // Migrate Clients
    console.log('--- Migrating Clients ---');
    for (const clientData of clients) {
        try {
            console.log(`Creating Client: ${clientData.title}...`);
            const createRes = await client.request(CREATE_CLIENT_MUTATION, clientData);
            const clientId = createRes.createClient.id;

            console.log(`Publishing Client: ${clientId}...`);
            await client.request(PUBLISH_CLIENT_MUTATION, { id: clientId });
            console.log(`✅ Success: ${clientData.title}`);
        } catch (err) {
            console.error(`❌ Failed to migrate client ${clientData.title}`);
            console.error(err?.response?.errors || err.message);
        }
    }

    // Migrate Blogs
    console.log('--- Migrating Blogs ---');
    for (const blogData of blogs) {
        try {
            console.log(`Creating Blog: ${blogData.title}...`);
            const createRes = await client.request(CREATE_BLOG_MUTATION, blogData);
            const blogId = createRes.createBlog.id;

            console.log(`Publishing Blog: ${blogId}...`);
            await client.request(PUBLISH_BLOG_MUTATION, { id: blogId });
            console.log(`✅ Success: ${blogData.title}`);
        } catch (err) {
            console.error(`❌ Failed to migrate blog ${blogData.title}`);
            console.error(err?.response?.errors || err.message);
        }
    }

    console.log('Migration complete!');
}

migrateData();
