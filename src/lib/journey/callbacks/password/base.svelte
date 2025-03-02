<script lang="ts">
  import type {
    PasswordCallback,
    ValidatedCreatePasswordCallback,
  } from '@forgerock/javascript-sdk';

  import EyeIcon from '$components/icons/eye-icon.svelte';
  import Floating from '$components/compositions/input-floating/floating-label.svelte';
  import { interpolate, textToKey } from '$lib/_utilities/i18n.utilities';
  import Stacked from '$components/compositions/input-stacked/stacked-label.svelte';
  import T from '$components/_utilities/locale-strings.svelte';

  import type { Maybe } from '$lib/interfaces';

  export let callback: PasswordCallback | ValidatedCreatePasswordCallback;
  export let firstInvalidInput: boolean;
  export let idx: number;
  export let key: string;
  export let isInvalid = false;
  export let isRequired = false;
  export let labelType: Maybe<'floating' | 'stacked'>;

  const Input = labelType === 'floating' ? Floating : Stacked;

  // Below needs to be `undefined` to be optional and allow default value in Message component
  export let showMessage: Maybe<boolean> = undefined;
  export let validationFailure = '';

  let callbackType = callback.getType();
  let textInputLabel = callback.getPrompt();

  let isVisible = false;
  let type: 'password' | 'text' = 'password';
  let value = callback?.getInputValue();

  /**
   * @function setValue - Sets the value on the callback on element blur (lose focus)
   * @param {Object} event
   */
  function setValue(event: Event) {
    /** ***********************************************************************
     * SDK INTEGRATION POINT
     * Summary: SDK callback methods for setting values
     * ------------------------------------------------------------------------
     * Details: Each callback is wrapped by the SDK to provide helper methods
     * for writing values to the callbacks received from AM
     *********************************************************************** */
    callback.setInputValue((event.target as HTMLInputElement).value);
  }
  /**
   * @function toggleVisibility - toggles the password from masked to plaintext
   */
  function toggleVisibility() {
    isVisible = !isVisible;
    type = isVisible ? 'text' : 'password';
  }

  $: {
    callbackType = callback.getType();
    key = callback?.payload?.input?.[0].name || `password-${idx}`;
    textInputLabel = callback.getPrompt();
    value = callback?.getInputValue();
  }
</script>

<Input
  {firstInvalidInput}
  hasRightIcon={true}
  {key}
  label={interpolate(textToKey(callbackType), null, textInputLabel)}
  message={validationFailure || (isRequired ? interpolate('inputRequiredError') : undefined)}
  onChange={setValue}
  {isInvalid}
  {isRequired}
  {showMessage}
  {type}
  value={typeof value === 'string' ? value : ''}
>
  <button
    class={`tw_password-button dark:tw_password-button_dark tw_focusable-element tw_input-base dark:tw_input-base_dark`}
    on:click={toggleVisibility}
    slot="input-button"
    type="button"
  >
    <EyeIcon classes="tw_password-icon dark:tw_password-icon_dark" visible={isVisible}
      ><T key="showPassword" /></EyeIcon
    >
  </button>
  <slot />
</Input>
