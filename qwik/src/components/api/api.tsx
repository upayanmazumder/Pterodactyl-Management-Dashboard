/* eslint-disable qwik/loader-location */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { API_BASE_URL, DEFAULT_HEADERS } from '../../shared/api/api';
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
    const fetchPromise = fetch(`${API_BASE_URL}/`, {
      method: 'GET',
      headers: DEFAULT_HEADERS,
    });

    const timerPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), timeout)
    );

    try {
      const response = await Promise.race([fetchPromise, timerPromise]) as Response;
      const data: ApiResponse = await response.json();
      if (data.uptime) {
        apiStatus.value = 'Online';
        uptime.value = data.uptime;
      } else {
        apiStatus.value = 'Offline';
        uptime.value = '';
      }
    } catch (error) {
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
