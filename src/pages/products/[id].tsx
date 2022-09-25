import { useRouter } from 'next/router';

export default function Products() {
  const { query } = useRouter();

  return <div>Products: {JSON.stringify(query)}</div>;
}
