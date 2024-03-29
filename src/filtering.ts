import { Post } from "./types";


/**
 * Filters an array of posts to exclude posts with a 'deletedAt' timestamp.
 *
 * @param posts  The array of post objects to be filtered.
 * @returns A copy of the given array of posts without deleted posts.
 */
export function filterOutDeletedPosts(posts: Post[]): Post[] {
    //const results = posts.filter(post => !post.deletedAt)

    return posts.filter(post => !post.deletedAt);
}
