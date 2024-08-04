import { defineCollection, z } from 'astro:content';

const project = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		coauthors: z.string().optional()
	}),
});

const experience = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		logoCompany: z.string().optional(),
	}),
});

const education = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		startDate: z.coerce.date(),
		endDate: z.coerce.date(),
		logoCompany: z.string().optional(),
	}),
});



export const collections = { project, experience, education };
