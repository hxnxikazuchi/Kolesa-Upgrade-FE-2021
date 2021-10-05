module.exports = {
    extends: ['stylelint-config-standard'],
    // add your custom config here
    // https://stylelint.io/user-guide/configuration
    rules:   {
        indentation:                                      4,
        'string-quotes':                                  'single',
        'declaration-block-single-line-max-declarations': 15,
        'at-rule-no-unknown':                             [
            true,
            {
                ignoreAtRules: [
                    'tailwind',
                    'apply',
                    'variants',
                    'responsive',
                    'screen',
                    'mixin',
                    'include',
                    'if',
                    'else',
                    'extend',
                ],
            },
        ],
        'declaration-block-trailing-semicolon': null,
        'no-descending-specificity':            null,
        'no-extra-semicolons':                  true,
        'selector-pseudo-element-no-unknown':   [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
    },
};
