/* eslint-disable qwik/loader-location */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { getApiBaseUrl, getDefaultHeaders } from '../../shared/api/api';
import styles from './api.module.css';

interface ApiResponse {
  uptime?: string;
}

export default component$(() => {
  const apiStatus = useSignal('Checking');
  const uptime = useSignal('');

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const timeout = 5000; // 5 seconds
    const apiUrl = getApiBaseUrl();
    const headers = getDefaultHeaders();

    // Log the API request details
    console.log('Fetching API at:', apiUrl);
    console.log('Request headers:', headers);

    const fetchPromise = fetch(`${apiUrl}/`, {
      method: 'GET',
      headers: headers,
    });

    const timerPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeout)
    );

    try {
      const response = await Promise.race([fetchPromise, timerPromise]) as Response;
      console.log('API response status:', response.status);
      
      const data: ApiResponse = await response.json();
      console.log('API response data:', data);

      if (data.uptime) {
        apiStatus.value = 'Online';
        uptime.value = data.uptime;
      } else {
        apiStatus.value = 'Offline';
        uptime.value = '';
      }
    } catch (error) {
      console.error('API request failed:', error);
      apiStatus.value = 'Offline';
      uptime.value = '';
    }
  });

  return (
    <div>
      <div
        class={`${styles.statusIndicator} ${
          apiStatus.value === 'Online'
            ? styles.online
            : apiStatus.value === 'Offline'
            ? styles.offline
            : styles.checking
        }`}
      >
        {apiStatus.value === 'Online' && (
          <div class={styles.info}>
            <p>Uptime: {uptime.value}</p>
          </div>
        )}
      </div>
    </div>
  );
});
