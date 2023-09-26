import { Post, User } from "./types";

/**
 * Sorts an array of posts in ascending order based on the 'publishedAt' date. The
 * original array is not modified. Instead, a new array is returned.
 *
 * @param posts The array of post objects to be sorted.
 * @returns A new array with the posts sorted by publishedAt time.
 */

function dateFormat(users: User[]){
    const formattedUsers = [...users]
    for (let i=0; i<formattedUsers.length; i++){
    const user = formattedUsers[i];
    if (typeof user.registeredAt === 'number'){
        const formattedDate = new Date((user.registeredAt)*1000).toISOString();
    formattedUsers[i].registeredAt = formattedDate;
    }
    }
    return formattedUsers;
}

function sortPostsFunction(posts: Post[]): Post[] {
    const sortedPosts = [...posts];
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < sortedPosts.length -1; i++){
            if(sortedPosts[i].publishedAt > sortedPosts[i+1].publishedAt){
                let position= sortedPosts[i];
                sortedPosts[i] = sortedPosts[i+1];
                sortedPosts[i+1] = position;
                swapped=true;
            }
        }
    }while (swapped);
    return sortedPosts;
    
}

function sortUsers(users: User[]): User[]{
    const sortedUsers = dateFormat(users);
    sortedUsers.sort((a, b) => new Date(a.registeredAt).getTime() - new Date(b.registeredAt).getTime());
    return(sortedUsers);
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
    let sortedUsersBydate : User [] = sortUsers(users);
    return [...sortedUsersBydate];
}
