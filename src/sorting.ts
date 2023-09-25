import { Post, User } from "./types";

/**
 * Sorts an array of posts in ascending order based on the 'publishedAt' date. The
 * original array is not modified. Instead, a new array is returned.
 *
 * @param posts The array of post objects to be sorted.
 * @returns A new array with the posts sorted by publishedAt time.
 */

function dateFormat(posts: Post[]){
    for (let p of posts){
        if(typeof String(p.publishedAt)){
        new Date(p.publishedAt).getTime()/1000;}
    }

}

function sortPostsFunction(posts: Post[]): Post[] {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < posts.length -1; i++){
            if(posts[i].publishedAt > posts[i+1].publishedAt){
                let position= posts[i];
                posts[i] = posts[i+1];
                posts[i+1] = position;
                swapped=true;
            }
        }
    }while (swapped);
    return posts;
    
}


export function sortPostsByPublishedDate(posts: Post[]): Post[] {
    // TODO: Implement manual sorting logic here.
    // The existing `sort` method must not be used!
    // See https://en.wikipedia.org/wiki/Sorting_algorithm.
    
    let sortedPosts: Post[] = sortPostsFunction(posts);
    return [...sortedPosts];
}


/**
 * Sorts an array of user objects in ascending order based on the 'registeredAt' date.
 * Handles different data types for 'registeredAt': integer (seconds) and string (iso).
 *
 * @param users The array of user objects to be sorted.
 * @returns New array of users sorted by `registeredAt` timestamps.
 */
export function sortUsersByRegistrationDate(users: User[]): User[] {
    // TODO: Implement sorting logic. This time you are allowed to use the existing `sort` method.

    // NOTE! The users' timestamps are presented in Unix time, which counts seconds since epoch.
    // JavaScript Dates use milliseconds instead of seconds. See https://stackoverflow.com/a/221297 for more info.
    return [...users];
}
