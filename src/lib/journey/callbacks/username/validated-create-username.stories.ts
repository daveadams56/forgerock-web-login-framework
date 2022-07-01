import { FRStep, CallbackType } from '@forgerock/javascript-sdk';

import Input from './validated-create-username.story.svelte';

const step = new FRStep({
  authId: 'eyJ0eXAiOiJKV1QiLCJhbGc',
  callbacks: [
    {
      type: CallbackType.ValidatedCreateUsernameCallback,
      output: [
        {
          name: 'policies',
          value: {
            policyRequirements: [
              'REQUIRED',
              'MIN_LENGTH',
              'VALID_TYPE',
              'VALID_USERNAME',
              'CANNOT_CONTAIN_CHARACTERS',
              'MAX_LENGTH',
            ],
            fallbackPolicies: null,
            name: 'userName',
            policies: [
              { policyRequirements: ['REQUIRED'], policyId: 'required' },
              { policyRequirements: ['REQUIRED'], policyId: 'not-empty' },
              {
                policyRequirements: ['MIN_LENGTH'],
                policyId: 'minimum-length',
                params: { minLength: 1 },
              },
              {
                policyRequirements: ['VALID_TYPE'],
                policyId: 'valid-type',
                params: { types: ['string'] },
              },
              { policyId: 'valid-username', policyRequirements: ['VALID_USERNAME'] },
              {
                policyId: 'cannot-contain-characters',
                params: { forbiddenChars: ['/'] },
                policyRequirements: ['CANNOT_CONTAIN_CHARACTERS'],
              },
              {
                policyId: 'minimum-length',
                params: { minLength: 1 },
                policyRequirements: ['MIN_LENGTH'],
              },
              {
                policyId: 'maximum-length',
                params: { maxLength: 255 },
                policyRequirements: ['MAX_LENGTH'],
              },
            ],
            conditionalPolicies: null,
          },
        },
        { name: 'failedPolicies', value: [] },
        { name: 'validateOnly', value: false },
        { name: 'prompt', value: 'Username' },
      ],
      input: [
        { name: 'IDToken1', value: '' },
        { name: 'IDToken1validateOnly', value: false },
      ],
      _id: 0,
    },
    {
      type: CallbackType.ValidatedCreateUsernameCallback,
      output: [
        {
          name: 'policies',
          value: {
            policyRequirements: [
              'REQUIRED',
              'MIN_LENGTH',
              'VALID_TYPE',
              'VALID_USERNAME',
              'CANNOT_CONTAIN_CHARACTERS',
              'MAX_LENGTH',
            ],
            fallbackPolicies: null,
            name: 'userName',
            policies: [
              {
                policyRequirements: ['REQUIRED'],
                policyId: 'required',
              },
              {
                policyRequirements: ['REQUIRED'],
                policyId: 'not-empty',
              },
              {
                policyRequirements: ['MIN_LENGTH'],
                policyId: 'minimum-length',
                params: {
                  minLength: 1,
                },
              },
              {
                policyRequirements: ['VALID_TYPE'],
                policyId: 'valid-type',
                params: {
                  types: ['string'],
                },
              },
              {
                policyId: 'valid-username',
                policyRequirements: ['VALID_USERNAME'],
              },
              {
                policyId: 'cannot-contain-characters',
                params: {
                  forbiddenChars: ['/'],
                },
                policyRequirements: ['CANNOT_CONTAIN_CHARACTERS'],
              },
              {
                policyId: 'minimum-length',
                params: {
                  minLength: 1,
                },
                policyRequirements: ['MIN_LENGTH'],
              },
              {
                policyId: 'maximum-length',
                params: {
                  maxLength: 255,
                },
                policyRequirements: ['MAX_LENGTH'],
              },
            ],
            conditionalPolicies: null,
          },
        },
        {
          name: 'failedPolicies',
          value: ['{ "policyRequirement": "VALID_USERNAME" }'],
        },
        {
          name: 'validateOnly',
          value: false,
        },
        {
          name: 'prompt',
          value: 'Username',
        },
      ],
      input: [
        {
          name: 'IDToken1',
          value: 'existing-username',
        },
        {
          name: 'IDToken1validateOnly',
          value: false,
        },
      ],
      _id: 9,
    },
  ],
});

export default {
  component: Input,
  title: 'Callbacks/ValidatedCreateUsername',
  argTypes: {
    callback: { control: 'text' },
    inputName: { control: 'text' },
  },
};

export const Base = {
  args: {
    callback: step.getCallbacksOfType(CallbackType.ValidatedCreateUsernameCallback)[0],
    inputName: 'usernameCallback',
  },
};

export const Error = {
  args: {
    callback: step.getCallbacksOfType(CallbackType.ValidatedCreateUsernameCallback)[1],
    inputName: 'usernameCallback',
    showError: true,
  },
};
