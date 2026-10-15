import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  where,
} from 'firebase/firestore';
import { getFirebaseDb } from '@/integrations/firebase/client';

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  read_time: string;
  published: boolean;
  created_at: string;
  image_url?: string;
  author_id?: string;
}

export type BlogPostInput = Omit<BlogPost, 'id' | 'created_at' | 'author_id'>;

const postsCollection = () => collection(getFirebaseDb(), 'blog_posts');

const toBlogPost = (id: string, data: Record<string, unknown>): BlogPost => {
  const createdAt = data.created_at;
  const createdAtDate = createdAt instanceof Timestamp
    ? createdAt.toDate()
    : typeof createdAt === 'string' || typeof createdAt === 'number'
      ? new Date(createdAt)
      : new Date();

  return {
    id,
    title: typeof data.title === 'string' ? data.title : '',
    content: typeof data.content === 'string' ? data.content : '',
    excerpt: typeof data.excerpt === 'string' ? data.excerpt : '',
    category: typeof data.category === 'string' ? data.category : 'General',
    read_time: typeof data.read_time === 'string' ? data.read_time : '5 min read',
    published: data.published === true,
    created_at: Number.isNaN(createdAtDate.getTime()) ? new Date().toISOString() : createdAtDate.toISOString(),
    image_url: typeof data.image_url === 'string' ? data.image_url : '',
    author_id: typeof data.author_id === 'string' ? data.author_id : undefined,
  };
};

export const listPublishedBlogPosts = async (): Promise<BlogPost[]> => {
  const publishedPostsQuery = query(postsCollection(), where('published', '==', true));
  const snapshot = await getDocs(publishedPostsQuery);

  return snapshot.docs
    .map((post) => toBlogPost(post.id, post.data()))
    .sort((left, right) => Date.parse(right.created_at) - Date.parse(left.created_at));
};

export const listAllBlogPosts = async (): Promise<BlogPost[]> => {
  const snapshot = await getDocs(postsCollection());

  return snapshot.docs
    .map((post) => toBlogPost(post.id, post.data()))
    .sort((left, right) => Date.parse(right.created_at) - Date.parse(left.created_at));
};

export const createBlogPost = async (input: BlogPostInput, authorId: string) => {
  await addDoc(postsCollection(), {
    ...input,
    author_id: authorId,
    created_at: serverTimestamp(),
  });
};

export const updateBlogPost = async (id: string, input: BlogPostInput) => {
  await updateDoc(doc(getFirebaseDb(), 'blog_posts', id), input);
};

export const deleteBlogPost = async (id: string) => {
  await deleteDoc(doc(getFirebaseDb(), 'blog_posts', id));
};