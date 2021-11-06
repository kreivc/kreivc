declare interface IImage {
	_id: string;
	name: string;
	alternativeText: string;
	caption: string;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	width: number;
	height: number;
	url: string;
	provider_metadata: {
		public_id: string;
		resource_type: string;
	};
	formats: {
		thumbnail?: {
			name: string;
			hash: string;
			ext: string;
			mime: string;
			width: number;
			height: number;
			size: number;
			path: null;
			url: string;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
		};
		large?: {
			name: string;
			hash: string;
			ext: string;
			mime: string;
			width: number;
			height: number;
			size: number;
			path: null;
			url: string;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
		};
		medium?: {
			name: string;
			hash: string;
			ext: string;
			mime: string;
			width: number;
			height: number;
			size: number;
			path: null;
			url: string;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
		};
		small?: {
			name: string;
			hash: string;
			ext: string;
			mime: string;
			width: number;
			height: number;
			size: number;
			path: null;
			url: string;
			provider_metadata: {
				public_id: string;
				resource_type: string;
			};
		};
	};
	provider: string;
	related: [string];
	createdAt: Date;
	updatedAt: Date;
	__v: 0;
	id: string;
}

declare interface IAuthor {
	_id: string;
	name: string;
	published_at: Date;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	avatar: IImage;
	id: string;
}

declare interface IPost {
	cover: IImage;
	_id: string;
	title: string;
	slug: string;
	content: string;
	published_at: Date;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	author: IAuthor;
	id: string;
}
