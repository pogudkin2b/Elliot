import { createClient, type QueryParams } from '@sanity/client'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster, cached responses in production
})

/**
 * Helper function to fetch data from Sanity with type safety
 */
export async function fetchSanity<T = unknown>(
  query: string,
  params?: QueryParams
): Promise<T> {
  if (params) {
    return sanityClient.fetch<T>(query, params)
  }
  return sanityClient.fetch<T>(query)
}
