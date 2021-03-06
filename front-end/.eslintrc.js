module.exports = {
    extends: "airbnb",
    rules: {
        camelcase: [0],
        "consistent-return": [0],
        indent: [2, 4],
        quotes: [2, "double"],
        "linebreak-style": [2, "unix"],
        "no-unused-vars": 2,
        "no-console": [0],
        "no-return-assign": [0],
        "quote-props": ["error", "consistent"],
        "no-mixed-operators": [0],
        "no-multi-assign": [0],
        "no-underscore-dangle": [0],
        "import/no-extraneous-dependencies": [
            "error",
            { devDependencies: true },
        ],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [2, 4],
        "react/jsx-one-expression-per-line": [0],
        "react/no-find-dom-node": [0],
        "react/prefer-stateless-function": [0],
        "react/prop-types": [0],
    },
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaFeatures: {
            arrowFunctions: true,
            binaryLiterals: true,
            blockBindings: true,
            classes: true,
            defaultParams: true,
            destructuring: true,
            forOf: true,
            generators: true,
            modules: true,
            objectLiteralComputedProperties: true,
            objectLiteralDuplicateProperties: true,
            objectLiteralShorthandMethods: true,
            objectLiteralShorthandProperties: true,
            octalLiterals: true,
            regexUFlag: true,
            regexYFlag: true,
            spread: true,
            superInFunctions: true,
            templateStrings: true,
            unicodeCodePointEscapes: true,
            globalReturn: true,
            jsx: true,
        },
    },
    parser: "babel-eslint",
    plugins: ["react"],
};
