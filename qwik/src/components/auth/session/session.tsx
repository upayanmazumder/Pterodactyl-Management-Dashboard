import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
 
export default component$(() => {
  const session = useAuthSession();
  return <p>Logged in with email {session.value?.user?.email}</p>;
});