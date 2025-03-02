const colorLib = require('color');

module.exports = (config, theme) => ({
  /**
   * Checkbox Animated Composition
   * Rework of this example: https://codepen.io/dylanraga/pen/Qwqbab
   */
  '.animated-check': {
    cursor: 'pointer',
    fontSize: '1.5em',
    height: '1em',
    position: 'relative',
    width: '1em',

    /**
     * This is the rounded box with the inward-growing borders on click
     */
    '&:after': {
      border: '3px solid transparent',
      borderLeft: 'none',
      borderTop: 'none',
      bottom: '0.45em',
      content: '""',
      left: '0.15em',
      overflow: 'hidden',
      position: 'absolute',
      transform: 'rotate(45deg)',
      transformOrigin: 'left bottom',
      width: '0.35em',
      willChange: 'height',
    },
    /**
     * This is the "checkmark", a rotated rectangle that grows in height
     */
    '&:before': {
      borderColor: theme('colors.secondary.DEFAULT'),
      borderRadius: theme('borderRadius.DEFAULT'),
      borderWidth: '1px',
      content: '""',
      display: 'block',
      height: '100%',
      outlineColor: colorLib(theme('ringColor.DEFAULT')).fade(0.7).toString(),
      outlineOffset: '0',
      outlineStyle: 'solid',
      outlineWidth: '0',
      position: 'absolute',
      transition:
        'border-color ease-in-out 0.15s, border-width 250ms cubic-bezier(.4,.0,.23,1), box-shadow ease-in-out 0.15s, outline-color ease-in-out 0.2s, outline-offset ease-in-out 0.1s',
      width: '100%',
    },
  },
  '.checkbox-input_animated': {
    /**
     * Below two target error messages
     */
    '& ~ div > p': {
      display: 'none',
    },
    '&[aria-invalid="true"] ~ div > p': {
      display: 'block',
    },
    /**
     * All of the below are targeting `.animated-check` from above:
     *
     * `.checkbox-input_animated + label > span` is equal to `.animated-check`
     *
     * We need these styles to be linked to the state of the input, hence the selectors
     */
    '&:checked + label > span:after': {
      /**
       * TODO: Adding the prefix feels a bit weird, but necessary atm
       *
       * TODO: Animation is a touch janky in certain situations, but I believe it's just
       * pixel-grid alignment. The check jumps from one pixel to another finding alignment
       */
      animation: `${config('prefix')}${theme('animation.check')}`,
      // Nested quotes is necessary
      content: '""',
    },
    '&:checked + label > span:before': {
      animation: `${config('prefix')}${theme('animation.squish')}`,
      borderColor: theme('colors.primary.dark'),
      borderWidth: '0.5em',
    },
    '&:focus + label > span:before': {
      outlineColor: colorLib(theme('ringColor.DEFAULT')).fade(0.1).toString(),
      outlineOffset: '1px',
      outlineWidth: '3px',
    },
  },
  '.checkbox-input_animated_dark': {
    '&:checked + label > span:before': {
      borderColor: theme('colors.primary.light'),
    },
  },
  /**
   * Dialog box theme settings
   */
  '.dialog-box': {
    backgroundColor: theme('colors.background.light'),
    border: `1px solid ${theme('colors.secondary.dark')}`,
    bottom: 0,
    borderRadius: theme('borderRadius.DEFAULT'),
    boxShadow: theme('boxShadow.lg'),
    height: '100%',
    margin: `${theme('spacing.2')} 0 0 0`,
    maxHeight: '100%',
    maxWidth: '100%',
    padding: theme('spacing.0'),
    top: 0,
    width: '100%',
    position: 'fixed',
  },
  '.dialog-box_animate': {
    opacity: 0,
    top: '75%',
    willChange: 'top, opacity',

    '&[open]': {
      animation: `${config('prefix')}${theme('animation.slideUp')}`,
    },
    '&::backdrop': {
      animation: `${config('prefix')}${theme('animation.fadeIn')}`,
      backgroundColor: colorLib(theme('colors.body.light')).fade(0.2).toString(),
    },
  },
  '.dialog-box_dark': {
    backgroundColor: theme('colors.background.dark'),
    borderColor: theme('colors.black'),

    '&::backdrop': {
      backgroundColor: colorLib(theme('colors.body.dark')).fade(0.2).toString(),
    },
  },
  '.dialog-body': {
    margin: `${theme('spacing.10')} ${theme('spacing.6')}`,
  },
  '.dialog-header': {
    alignItems: 'stretch',
    backgroundColor: theme('colors.tertiary.light'),
    borderBottom: `1px solid ${theme('colors.secondary.DEFAULT')}`,
    borderTopLeftRadius: theme('borderRadius.DEFAULT'),
    borderTopRightRadius: theme('borderRadius.DEFAULT'),
    display: 'flex',
    justifyContent: 'center',
    minHeight: theme('spacing.40'),
    padding: `${theme('spacing.8')} ${theme('spacing.24')}`,
    position: 'relative',
    marginBottom: theme('spacing.8'),

    '.dialog-logo': {
      display: 'inline-flex',
      height: 'inherit',
    },
  },
  '.dialog-header_dark': {
    backgroundColor: theme('colors.tertiary.dark'),
    borderBottomColor: theme('colors.secondary.dark'),
  },
  '.dialog-no-header': {
    padding: `${theme('spacing.6')} 0`,
  },
  '.dialog-logo': {
    backgroundImage: 'var(--logo-light)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    height: '100%',
    width: '100%',
  },
  '.dialog-logo_dark': {
    backgroundImage: 'var(--logo-dark)',
  },
  '.dialog-box_medium': {
    height: 'fit-content',
    margin: 'auto',
    maxWidth: theme('maxWidth.lg'),
    padding: theme('spacing.0'),
    width: theme('width["3/4"]'),

    '.dialog-body': {
      margin: `${theme('spacing.6')} ${theme('spacing.12')} ${theme('spacing.16')}`,
    },
    '.dialog-header': {
      // height: 'fit-content',
      // minHeight: theme('spacing.36'),
      padding: `${theme('spacing.8')} ${theme('spacing.28')}`,
      marginBottom: theme('spacing.16'),
    },
    '.dialog-no-header': {
      padding: `${theme('spacing.10')} 0`,
    },
  },
  '.dialog-closing': {
    '&[open]': {
      animation: `${config('prefix')}${theme('animation.slideDown')}`,
      display: 'block',
    },
    '&::backdrop': {
      animation: `${config('prefix')}${theme('animation.fadeOut')}`,
      backgroundColor: colorLib(theme('colors.body.light')).fade(0.2).toString(),
    },
  },
  '.dialog-x': {
    borderRadius: theme('borderRadius.DEFAULT'),
    marginRight: theme('spacing.2'),
    position: 'absolute',
    right: theme('spacing.4'),
    top: theme('spacing.7'),
  },
  '.dialog-x_medium': {},
  /**
   * Essentially the same technique as Twitter Bootstrap's v5 "floating label"
   * https://getbootstrap.com/docs/5.0/forms/floating-labels/
   *
   * TODO: See if the new CSS pseudo-selector `has()` can replace below technique
   * when it gets full browser support
   */
  '.input-floating': {
    '&:focus, &:not(:placeholder-shown)': {
      paddingBottom: theme('spacing.1'),
      paddingTop: theme('spacing.5'),
    },
    '&::-ms-reveal': {
      display: 'none',
    },
    '&::placeholder': {
      color: 'transparent',
    },
    '&:focus ~ label, &:not(:placeholder-shown) ~ label': {
      fontWeight: theme('fontWeight.medium'),
      transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
    },
  },
  '.input-floating_dark': {
    '&:autofill + label': {
      // Needed to ensure the label is readable with browser autofill's light background
      color: `${theme('colors.secondary.dark')} !important`,
    },
  },
  '.input-floating-label': {
    height: 'calc(3rem + 2px)',
    lineHeight: theme('spacing.6'),
    padding: theme('spacing.3'),
    pointerEvents: 'none',
    transformOrigin: '0 0',
    transition: 'opacity 0.1s ease-in-out, transform 0.1s ease-in-out',
    whiteSpace: 'nowrap',
  },
  '.input-stacked-label': {
    display: 'block',
    fontWeight: 'bold',
    lineHeight: theme('spacing.6'),
    marginBottom: theme('spacing.1'),
  },
  '.select-floating': {
    lineHeight: theme('spacing.4'),
    padding: `${theme('spacing.6')} ${theme('spacing.9')} ${theme('spacing.1')} ${theme(
      'spacing.3',
    )}`,
  },
  '.select-floating-label': {
    fontWeight: theme('fontWeight.medium'),
    left: theme('spacing.0'),
    top: theme('spacing.0'),
    transform: 'scale(0.85) translateY(-0.5rem) translateX(0.15rem)',
    transformOrigin: 'top left',
    whiteSpace: 'nowrap',
  },
  /**
   * Radio animated composition
   * Rework of this example: https://codepen.io/dylanraga/pen/Qwqbab
   */
  '.animated-radio': {
    position: 'relative',
    cursor: 'pointer',
    fontSize: '1.5em',
    height: '1em',
    width: '1em',

    /**
     * Larger circle that grows inward
     */
    '&:after': {
      backgroundColor: theme('colors.primary.dark'),
      borderRadius: theme('borderRadius.full'),
      height: '100%',
      left: '0',
      overflow: 'hidden',
      position: 'absolute',
      top: '0',
      transform: 'scale(0)',
      transformOrigin: 'center',
      width: '100%',
      willChange: 'transform',
    },
    /**
     * Smaller circle that grows outward
     */
    '&:before': {
      borderColor: theme('colors.white'),
      borderRadius: theme('borderRadius.full'),
      borderWidth: '2px',
      boxShadow: `0 0 0 1px ${theme('colors.secondary.DEFAULT')}`,
      content: '""',
      cursor: 'pointer',
      display: 'block',
      height: '100%',
      position: 'absolute',
      transition: 'border-width 250ms cubic-bezier(.4,.0,.23,1), box-shadow ease-in-out 0.15s',
      width: '100%',
    },
  },
  '.animated-radio_dark': {
    '&:before': {
      borderColor: theme('colors.secondary.light'),
      boxShadow: `none`,
    },
    '&:after': {
      backgroundColor: theme('colors.primary.light'),
    },
  },
  '.radio-input_animated': {
    /**
     * All of the below are targeting `.animated-radio` from above:
     *
     * `.radio-input_animated + label > span` is equal to `.animated-radio`
     *
     * We need these styles to be linked to the state of the input, hence the selectors
     */
    '&:focus + label > span:before': {
      boxShadow: `0 0 0 4px ${colorLib(theme('ringColor.DEFAULT'))
        .fade(0.1)
        .toString()} !important`,
    },
    '&:checked + label > span:after': {
      // TODO: Adding the prefix feels a bit weird, but necessary atm
      animation: `${config('prefix')}${theme('animation.radio')}`,
      content: '""',
    },
    '&:checked + label > span:before': {
      animation: `${config('prefix')}${theme('animation.squish')}`,
      // borderColor: theme('colors.primary.dark'),
      borderWidth: '0.5em',
    },
  },
  '.radio-input_animated_dark': {
    '&:checked + label > span:before': {
      borderColor: theme('colors.secondary.light'),
    },
  },
});
