<script lang="ts">
  import { afterUpdate } from 'svelte';

  import Label from '../label/label.svelte';

  export let checked = false;
  export let firstInvalidInput: boolean;
  export let isRequired = false;
  export let isInvalid = false;
  export let key: string;
  export let name: string;
  export let onChange: (event: Event) => void;
  export let value: number | null;

  let inputEl: HTMLInputElement;

  afterUpdate(() => {
    if (firstInvalidInput) {
      inputEl.focus();
    }
  });
</script>

<input
  aria-describedby={`${key}-message`}
  aria-invalid={isInvalid}
  bind:this={inputEl}
  class="tw_checkbox-input dark:tw_checkbox-input_dark tw_focusable-element dark:tw_focusable-element_dark"
  {checked}
  id={key}
  {name}
  on:change={onChange}
  required={isRequired}
  type="radio"
  {value}
/>
<Label {key}>
  <slot />
</Label>
