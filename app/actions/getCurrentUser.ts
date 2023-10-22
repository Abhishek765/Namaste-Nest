import { getServerSession } from 'next-auth';

import { authOptions } from '@/pages/api/auth/[...nextauth]';

import prisma from '../libs/prismadb';

export function getSession() {
  return getServerSession(authOptions);
}

/**
 * @description Function to retrieve current session user information
 */
export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email
      }
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
}
