<script lang="ts">
  /* eslint @typescript-eslint/no-empty-function: "off" */
  import Button from '$components/primitives/button/button.svelte';
  import Dialog from './dialog.svelte';
  import Form from '$components/primitives/form/form.svelte';
  import Input from '$components/compositions/input-floating/floating-label.svelte';
  import { initialize } from '$lib/style.store';

  import type { Logo } from '$lib/style.store';

  // TODO: Export controls for changing dialog context
  export let forceOpen: boolean;
  export let logo: Logo;
  export let withHeader: boolean;

  let dialogEl: HTMLDialogElement;

  function openDialog() {
    dialogEl.showModal();
  }

  function submitForm(event: SubmitEvent, isFormValid: boolean) {
    console.log(`Is form valid: ${isFormValid}`);

    if (isFormValid) {
      dialogEl.close();
    }
  }

  initialize({ logo });
</script>

{#if !forceOpen}
  <Button style="primary" width="auto" onClick={openDialog}>Open Dialog</Button>
{:else}
  <div
    class="tw_h-full tw_w-full tw_top-0 tw_left-0 tw_fixed tw_bg-body-light dark:tw_bg-body-dark"
  />
{/if}

<Dialog bind:dialogEl closeCallback={(args) => {}} dialogId="myDialog" {forceOpen} {withHeader}>
  <h2
    class="tw_flex tw_font-light tw_justify-center tw_mb-4 tw_text-4xl tw_text-gray dark:tw_text-white"
  >
    Sign In
  </h2>
  <Form onSubmitWhenValid={submitForm}>
    <Input
      message="Please provide a value"
      isRequired={true}
      firstInvalidInput={false}
      key="username"
      label="Username"
      onChange={() => {}}
      type="text"
    />
    <Button onClick={() => {}} width="full" style="primary" type="submit">Submit</Button>
  </Form>
</Dialog>
