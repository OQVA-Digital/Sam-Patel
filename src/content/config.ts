import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
        standFirst: z.string().optional(),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: z.string().optional(),
	}),
});

const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        status: z.string(),
		name: z.string(),
		description: z.string().optional(),
		address: z.string().optional(),
        externalLink: z.string().optional(),
		eventDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
    }),
});

export const collections = {
    'blog': blogCollection,
    'events': eventsCollection,
};