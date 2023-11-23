import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string(),
		authorImage: z.string().optional(),
        standFirst: z.string().optional(),
		tags: z.array(z.string()).optional(),
        category: z.string(),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string(),
	}),
});

const eventsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        order: z.number().optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        metaKeywords: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        type: z.string(),
        image: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    'events': eventsCollection,
};