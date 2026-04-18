import { Client } from '@hygraph/management-sdk';

const client = new Client({
    authToken: process.env.HYGRAPH_PAT,
    endpoint: process.env.HYGRAPH_MANAGEMENT_ENDPOINT,
});

async function run() {
    try {
        console.log('Provisioning Hygraph Schema...');

        // 1. Create Client Model
        console.log('Creating Client model...');
        client.createModel({
            apiId: 'Client',
            apiIdPlural: 'Clients',
            displayName: 'Client',
        });

        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'title',
            displayName: 'Title',
            isRequired: true,
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'slug',
            displayName: 'Slug',
            isRequired: true,
            isUnique: true,
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'category',
            displayName: 'Category',
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'description',
            displayName: 'Description',
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'services',
            displayName: 'Services',
            isList: true,
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'imageUrl',
            displayName: 'Image URL',
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'testimonialQuote',
            displayName: 'Testimonial Quote',
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'testimonialAuthor',
            displayName: 'Testimonial Author',
        });
        client.createSimpleField({
            parentApiId: 'Client',
            type: 'STRING',
            apiId: 'testimonialRole',
            displayName: 'Testimonial Role',
        });

        // 2. Create Blog Model
        console.log('Creating Blog model...');
        client.createModel({
            apiId: 'Blog',
            apiIdPlural: 'Blogs',
            displayName: 'Blog',
        });

        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'STRING',
            apiId: 'title',
            displayName: 'Title',
            isRequired: true,
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'STRING',
            apiId: 'slug',
            displayName: 'Slug',
            isRequired: true,
            isUnique: true,
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'STRING',
            apiId: 'category',
            displayName: 'Category',
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'STRING',
            apiId: 'excerpt',
            displayName: 'Excerpt',
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'STRING',
            apiId: 'content',
            displayName: 'Rich Content',
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'INT',
            apiId: 'readTime',
            displayName: 'Read Time (mins)',
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'STRING',
            apiId: 'imageUrl',
            displayName: 'Image URL',
        });
        client.createSimpleField({
            parentApiId: 'Blog',
            type: 'DATE',
            apiId: 'publishedDate',
            displayName: 'Published Date',
        });

        console.log('Running migration...');
        const response = await client.run(true);

        if (response.errors) {
            console.error('Migration failed with errors:', response.errors);
            process.exit(1);
        } else {
            console.log('Schema successfully provisioned!');
        }
    } catch (err) {
        console.error('Error running migration:', err);
        process.exit(1);
    }
}

run();
