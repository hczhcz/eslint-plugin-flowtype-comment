'use strict';

module.exports = {
    processors: {
        '.js': {
            preprocess: (text, filename) => {
                const sections = text.split(/(?=\/\*|\*\/)/);

                let open = false;
                let removing = false;

                for (let i = 0; i < sections.length; i += 1) {
                    if (!open && sections[i].startsWith('/*')) {
                        const match = sections[i].match(
                            /^\/\*(\s*)(::|flow-include|:(?!:))/
                        );

                        if (match) {
                            sections[i] = '/* */' + match[1] + (
                                match[2] === ':' ? ':' : ''
                            ) + sections[i].slice(
                                2 + match[1].length + match[2].length
                            );

                            removing = true;
                        }

                        open = true;
                    } else if (open && sections[i].startsWith('*/')) {
                        if (removing) {
                            sections[i] = '/* ' + sections[i];

                            removing = false;
                        }

                        open = false;
                    }
                }

                return [sections.join('')];
            },

            postprocess: (messages, filename) => {
                return messages[0];
            },
        },
    },
};
