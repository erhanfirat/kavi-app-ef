/**
 * Fetchs Posts
 * @returns {Post[]}
 */
export const fetchPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};

/**
 * Fetchs Post details by post id
 * @param postId 
 * @returns {Post}
 */
export const fetchPostById = async (postId: number) => {
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
 * @returns user
 */
export const fetchUserById = async (userId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};
