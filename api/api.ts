export const fetchPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};

export const fetchPostById = async (postId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};

export const fetchUserById = async (userId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) {
    throw new Error("Veri çekme hatası");
  }

  return res.json();
};
