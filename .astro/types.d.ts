declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"education": {
"gottingen.md": {
	id: "gottingen.md";
  slug: "gottingen";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"jedi.md": {
	id: "jedi.md";
  slug: "jedi";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
"upc.md": {
	id: "upc.md";
  slug: "upc";
  body: string;
  collection: "education";
  data: InferEntrySchema<"education">
} & { render(): Render[".md"] };
};
"experience": {
"virvig-vhir.md": {
	id: "virvig-vhir.md";
  slug: "virvig-vhir";
  body: string;
  collection: "experience";
  data: InferEntrySchema<"experience">
} & { render(): Render[".md"] };
};
"galleryCollection": {
"asturies.md": {
	id: "asturies.md";
  slug: "asturies";
  body: string;
  collection: "galleryCollection";
  data: InferEntrySchema<"galleryCollection">
} & { render(): Render[".md"] };
"barcelona.md": {
	id: "barcelona.md";
  slug: "barcelona";
  body: string;
  collection: "galleryCollection";
  data: InferEntrySchema<"galleryCollection">
} & { render(): Render[".md"] };
"ghana.md": {
	id: "ghana.md";
  slug: "ghana";
  body: string;
  collection: "galleryCollection";
  data: InferEntrySchema<"galleryCollection">
} & { render(): Render[".md"] };
"girona.md": {
	id: "girona.md";
  slug: "girona";
  body: string;
  collection: "galleryCollection";
  data: InferEntrySchema<"galleryCollection">
} & { render(): Render[".md"] };
"goettingen.md": {
	id: "goettingen.md";
  slug: "goettingen";
  body: string;
  collection: "galleryCollection";
  data: InferEntrySchema<"galleryCollection">
} & { render(): Render[".md"] };
};
"project": {
"bits-2021.md": {
	id: "bits-2021.md";
  slug: "bits-2021";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"grafy.md": {
	id: "grafy.md";
  slug: "grafy";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"jedi-project.md": {
	id: "jedi-project.md";
  slug: "jedi-project";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"magellan.md": {
	id: "magellan.md";
  slug: "magellan";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"nasco-2024.md": {
	id: "nasco-2024.md";
  slug: "nasco-2024";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"personal-website.md": {
	id: "personal-website.md";
  slug: "personal-website";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"space-odissey.md": {
	id: "space-odissey.md";
  slug: "space-odissey";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"tfg.md": {
	id: "tfg.md";
  slug: "tfg";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
"vuelin.md": {
	id: "vuelin.md";
  slug: "vuelin";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
