/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  const imageUrl = session.value?.user?.image ?? '';

  return (
    <>
      <p>{session.value?.user?.email}</p>
      <p>{session.value?.user?.name}</p>
      <img src={imageUrl} alt={session.value?.user?.name ?? 'User Image'} />
    </>
  );
});
