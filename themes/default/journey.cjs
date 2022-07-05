const colorLib = require('color');

module.exports = function (theme) {
  return {
    '.kba-fieldset': {
      position: 'relative',
      borderColor: theme('colors.secondary.DEFAULT'),
      borderBottomWidth: '1px',
      borderTopWidth: '1px',
      marginTop: theme('spacing.8'),
      paddingBottom: theme('spacing.4'),
      paddingTop: theme('spacing.4'),
    },
    '.kba-fieldset_dark': {
      borderColor: colorLib(theme('colors.secondary.DEFAULT')).darken(0.25).toString(),
    },
    '.kba-header': {
      fontWeight: theme('fontWeight.medium'),
      marginBottom: theme('spacing.4'),
    },
    '.kba-header_dark': {
      color: theme('colors.secondary.light'),
    },
    '.kba-lock-icon': {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      top: `-${theme('spacing.3')}`,
      width: '100%',
      '& > svg': {
        backgroundColor: theme('colors.background.light'),
        color: theme('colors.secondary.DEFAULT'),
        fill: 'currentcolor',
        top: `-${theme('spacing.3')}`,
        width: '3em',
      },
    },
    '.kba-lock-icon_dark': {
      '& > svg': {
        backgroundColor: theme('colors.background.dark'),
        color: theme('colors.secondary.light'),
        fill: 'currentcolor',
      },
    },
    '.password-button': {
      alignItems: 'center',
      backgroundColor: colorLib(theme('colors.background.light')).darken(0.02).toString(),
      borderLeft: '0 !important',
      borderTopLeftRadius: '0px !important',
      borderBottomLeftRadius: '0px !important',
      display: 'flex',
      lineHeight: theme('spacing.6'),
      padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    '.password-button_dark': {
      backgroundColor: colorLib(theme('colors.black')).fade(0.95).toString(),
    },
    '.password-icon': {
      color: theme('colors.primary.dark'),
      fill: 'currentcolor',
    },
    '.password-icon_dark': {
      color: theme('colors.secondary.light'),
    },
  };
};
