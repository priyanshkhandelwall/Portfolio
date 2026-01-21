import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data'; // adjust path if needed

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://priyanshkhandelwal.dev';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.8,
      lastModified: new Date(),
    },
  ];

  // Dynamic project pages (from your data file)
  const projectPages: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    priority: 0.7,
    lastModified: new Date(),
  }));

  return [...staticPages, ...projectPages];
}
