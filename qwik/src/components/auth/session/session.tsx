/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';
 
export default component$(() => {
  const session = useAuthSession();
  return(
    <>
    <p>{session.value?.user?.email}</p>
    <p>{session.value?.user?.id}</p>
    <p>{session.value?.user?.name}</p>
    <p>{session.value?.user?.image}</p>
    </>
  );
});