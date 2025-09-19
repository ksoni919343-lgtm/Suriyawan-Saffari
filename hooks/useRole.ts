import { useUser } from './useUser';
  const { user } = useUser();
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (user) {
      supabase.from('roles').select('role').eq('user_id', user.id).single().then(({ data } ) => setRole(data.role));
    }
  }, [user]);

  return role;
};
