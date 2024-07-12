import { component$, useStore, $ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

interface UserProfile {
  firstName: string;
  lastName: string;
  pterodactylPassword: string;
  email: string;
}

export default component$(() => {
  const userProfile = useStore<UserProfile>({
    firstName: '',
    lastName: '',
    pterodactylPassword: '',
    email: '',
  });

  const handleSubmit = $(async (event: Event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://pmdapi.upayan.space/user/updateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userProfile),
      });

      if (response.ok) {
        console.log('User data updated successfully');
      } else {
        console.error('Error updating user data');
      }
    } catch (error) {
      console.error('Error updating user data: ', error);
    }
  });

  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div class="container container-center container-spacing-xl">
        <h3>
          <span class="highlight">Update</span> your profile
        </h3>
        <Form onSubmit$={handleSubmit}>
          <div>
            <label>
              First Name:
              <input type="text" value={userProfile.firstName} onInput$={(e) => userProfile.firstName = (e.target as HTMLInputElement).value} />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input type="text" value={userProfile.lastName} onInput$={(e) => userProfile.lastName = (e.target as HTMLInputElement).value} />
            </label>
          </div>
          <div>
            <label>
              Pterodactyl Password:
              <input type="password" value={userProfile.pterodactylPassword} onInput$={(e) => userProfile.pterodactylPassword = (e.target as HTMLInputElement).value} />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input type="email" value={userProfile.email} onInput$={(e) => userProfile.email = (e.target as HTMLInputElement).value} />
            </label>
          </div>
          <button type="submit">Update Profile</button>
        </Form>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Update Profile",
  meta: [
    {
      name: "description",
      content: "Manage your profile",
    },
  ],
};
