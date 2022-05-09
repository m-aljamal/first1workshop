import client from "./sanity";

export async function getAllServices() {
  const query = `*[_type == "service"]{
    Icon,
    description,
    title,
    _id,
  } `;
  const services = await client.fetch(query);
  return services;
}

export async function getAllgellery() {
  const query = `*[_type == "gellery"]{
    title,
    image,
    _id,
  } `;
  const gellery = await client.fetch(query);
  return gellery;
}
