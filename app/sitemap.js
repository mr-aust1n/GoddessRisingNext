export default function sitemap() {
  const pages = [
    "/",
    "/about",
    "/consultation",
    "/mesh-integration",
    "/hair-extensions",
    "/contact",
    "/faq",
  ];

  return pages.map((page) => ({
    url: `https://www.goddessrisinghair.co.uk${page}`,
    lastModified: new Date(),
  }));
}
