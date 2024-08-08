/* eslint-disable qwik/loader-location */
import { component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import { useAuthSession } from "../../../routes/plugin@auth";
import sessionstyles from "../../auth/session/session.module.css";
import { getApiBaseUrl, getDefaultHeaders } from '../../../shared/api/api';

interface UserUpdateResponse {
  error?: string;
  success?: string;
}

export const usePostUpdateUserAction = routeAction$(async (props): Promise<UserUpdateResponse> => {
  const { email, firstName, lastName } = props;

  const apiUrl = `${getApiBaseUrl()}/user/updateUserFullName`;
  const headers = getDefaultHeaders();

  console.log('Updating user with details:');
  console.log('API URL:', apiUrl);
  console.log('Request headers:', headers);
  console.log('Request body:', { email, firstName, lastName });

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ email, firstName, lastName }),
    });

    console.log('API response status:', response.status);

    const data = await response.json();
    if (!data.error) {
      console.log('User update response:', data);
      return { success: 'User data updated successfully!' };
    } else {
      console.error('User update error response:', data.error);
      return { error: data.error };
    }
  } catch (error) {
    console.error('Error updating user data:', error);
    return { error: 'Error updating user data' };
  }
});

export default component$(() => {
  const session = useAuthSession();
  const firstNameSignal = useSignal('');
  const lastNameSignal = useSignal('');

  // Extract email from session value
  const userEmail = session.value?.user?.email || '';
  console.log('User email:', userEmail);

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
            onChange$={(e) => {
              const value = (e.target as HTMLInputElement).value;
              console.log('First name changed:', value);
              firstNameSignal.value = value;
            }}
            value={firstNameSignal.value}
          />
          <br />
          <input
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            required
            class={sessionstyles.input}
            onChange$={(e) => {
              const value = (e.target as HTMLInputElement).value;
              console.log('Last name changed:', value);
              lastNameSignal.value = value;
            }}
            value={lastNameSignal.value}
          />
          <br />
          <input
            type='hidden'
            name='email'
            value={userEmail}
          />
          <button
            type='submit'
            class={sessionstyles.submit}
            onClick$={() => console.log('Profile update form submitted')}>
            Update Profile
          </button>
        </Form>
        {postUpdateUserAction.value?.error && <p class="error">{postUpdateUserAction.value.error}</p>}
        {postUpdateUserAction.value?.success && <p class="success">{postUpdateUserAction.value.success}</p>}
      </div>
    </>
  );
});
