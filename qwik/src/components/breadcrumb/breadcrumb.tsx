import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import Loader from "../loader/loader"
import breadcrumbstyles from "./breadcrumb.module.css"
 
export default component$(() => {
  const loc = useLocation();
 
  return (
    <>
      <div class={breadcrumbstyles.wrapper}>
        {loc.isNavigating && <Loader />}
        <p class={breadcrumbstyles.pathname}>{loc.url.pathname}</p>
      </div>
    </>
  );
});