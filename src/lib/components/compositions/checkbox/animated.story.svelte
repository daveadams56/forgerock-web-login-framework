<script lang="ts">
  import { onMount, SvelteComponent } from 'svelte';

  import Button from '$components/primitives/button/button.svelte';
  import Checkbox from './animated.svelte';
  import Form from '$components/primitives/form/form.svelte';

  export let checkValidity: ((event: Event) => boolean) | null = null;
  export let message = '';
  export let key: string;
  export let label: string;
  export let onChange: (event: Event) => void;
  export let value: boolean;
  export let withForm = false;

  let el: SvelteComponent;
  let isInvalid: boolean;

  function submitForm(event: SubmitEvent, isFormValid: boolean) {
    console.log('Form submitted');
    message = 'Please accept this';
  }

  onMount(() => {
    if (!withForm && message) {
      // Only done to force an error without any user interaction
      let root = el.$$.root;
      console.log(root);
      let errorEl = root.querySelector('input');
      errorEl?.setAttribute('aria-invalid', 'true');
      isInvalid = true;
    }
  });

  $: {
    console.log(message);
  }
</script>

{#if withForm}
  <Form onSubmitWhenValid={submitForm}>
    <Checkbox
      bind:this={el}
      {checkValidity}
      firstInvalidInput={false}
      {isInvalid}
      isRequired={true}
      {key}
      {message}
      {onChange}
      {value}
    >
      {label}
    </Checkbox>
    <Button style="primary">Trigger Error</Button>
  </Form>
{:else}
  <Checkbox
    bind:this={el}
    {checkValidity}
    firstInvalidInput={false}
    {isInvalid}
    {key}
    {message}
    {onChange}
    {value}
  >
    {label}
  </Checkbox>
{/if}
