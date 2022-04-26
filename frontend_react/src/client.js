import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2s0tchx4',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skwDPYsQ4RcpKzFdN6H8ZPwFl0vgCuwyHkMHEWRHcqHBYWRjvDu8lX3t07csaXQnbCewvXHb6NZ6A1TvWodOD1Sl0EUvv9QM1shR9lL9Xo2OoMOmhqEvcNeP44sWxS6ab7byMaXtX2njSDhRwRCvYmsie4CHwpRu7Ja3ebrLCZmqUEdNDgzE',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);