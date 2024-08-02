/* eslint-disable qwik/loader-location */
import { component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import { useAuthSession } from "../../../routes/plugin@auth";
import sessionstyles from "../../auth/session/session.module.css";
import { API_BASE_URL, DEFAULT_HEADERS } from '../../../shared/api/api';

interface UserUpdateResponse {
  error?: string;
  success?: string;
}

export const usePostUpdateUserAction = routeAction$(async (props): Promise<UserUpdateResponse> => {
  const { email, firstName, lastName, pterodactylPassword } = props;

  try {
    const response = await fetch(`${API_BASE_URL}/user/updateUser`, {
      method: 'POST',
      headers: DEFAULT_HEADERS,
      body: JSON.stringify({
        email,
        firstName,
        lastName,
        pterodactylPassword,
      }),
    });

    const data = await response.json();
    if (!data.error) {
      return { success: 'User data updated successfully!' };
    } else {
      return { error: data.error };
    }
  } catch (error) {
    return { error: 'Error updating user data' };
  }
});

export default component$(() => {
  const session = useAuthSession();
  const firstNameSignal = useSignal('');
  const lastNameSignal = useSignal('');
  const pterodactylPasswordSignal = useSignal('');

  // Extract email from session value
  const userEmail = session.value?.user?.email || '';

  const postUpdateUserAction = usePostUpdateUserAction();
  
  return (
    <>
      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        <h3>
          <span class="highlight">Manage</span> your profile
        </h3>
        <h4>{session.value?.user?.name}</h4>
        <p class={sessionstyles.email}>{userEmail}</p>

        <Form action={postUpdateUserAction} class={sessionstyles.form}>
          <input
            type='text'
            name='firstName'
            placeholder='Enter your first name'
            required
            class={sessionstyles.input}
            onChange$={(e) => (firstNameSignal.value = (e.target as HTMLInputElement).value)}
            value={firstNameSignal.value}
          />
          <br />
          <input
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            required
            class={sessionstyles.input}
            onChange$={(e) => (lastNameSignal.value = (e.target as HTMLInputElement).value)}
            value={lastNameSignal.value}
          />
          <br />
          <input
            type='password'
            name='pterodactylPassword'
            placeholder='Enter your Pterodactyl password'
            class={sessionstyles.input}
            onChange$={(e) => (pterodactylPasswordSignal.value = (e.target as HTMLInputElement).value)}
            value={pterodactylPasswordSignal.value}
          />
          <br />
          <input
            type='hidden'
            name='email'
            value={userEmail}
          />
          <button
            type='submit'
            class={sessionstyles.submit}>
            Update Profile
          </button>
        </Form>
        {postUpdateUserAction.value?.error && <p class="error">{postUpdateUserAction.value.error}</p>}
        {postUpdateUserAction.value?.success && <p class="success">{postUpdateUserAction.value.success}</p>}
      </div>
    </>
  );
});
