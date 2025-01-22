import { Post, User } from "./types";

/**
 * Fetchs Posts
 * @returns {Post[]} Post list
 */
export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};

/**
 * Fetchs Post details by post id
 * @param postId
 * @returns {Post} Post information
 */
export const fetchPostById = async (postId: string): Promise<Post> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};

/**
 * Fetchs User info by userId
 * @param userId
 * @returns {User} User information
 */
export const fetchUserById = async (
  userId: number | undefined
): Promise<User> => {
  if (!userId) {
    throw new Error("User Id bilgisi eksik.");
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Veri çekme hatası.");
  }

  return res.json();
};
