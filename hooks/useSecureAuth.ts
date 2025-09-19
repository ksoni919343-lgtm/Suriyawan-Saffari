import { useSession } from 'next-auth/react';
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session || session.user.role !== role) {
      router.push('/auth/login');
    }
  }, [session, role, router]);
};
