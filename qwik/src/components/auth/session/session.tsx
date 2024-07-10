import { component$ } from '@builder.io/qwik';
import { useAuthSession } from '~/routes/plugin@auth';

export default component$(() => {
  const session = useAuthSession();
  const loggedInVia = session.value ? `Logged in via ${session.value}` : null;

  return loggedInVia && <p>{loggedInVia}</p>;
});