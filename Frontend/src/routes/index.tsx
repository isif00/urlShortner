import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import "../global.css";
import Container from "~/components/container/container";
import type { InitialValues } from "@modular-forms/qwik";
import type { UrlForm } from "~/components/urlInput/urlInput";
import UrlInput from "~/components/urlInput/urlInput";

export const useFormLoader = routeLoader$<InitialValues<UrlForm>>(
    () => ({
        url: '',
    })
);


export default component$(() => {
  return (
    <div class="main-container">
      <Container />
      <UrlInput></UrlInput>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Url Shortener",
  meta: [
    {
      name: "shorten your urls for free",
      content: "Qwik site description",
    },
  ],
};
