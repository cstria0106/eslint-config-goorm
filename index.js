module.exports =  {
    "extends": "airbnb-typescript",
    "plugins": [
        "unused-imports"
    ],
    "rules": {
        "@typescript-eslint/indent": [
            "error",
            4
        ],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "import/no-unresolved": [
            "off"
        ],
        "import/no-extraneous-dependencies": [
            "off"
        ],
        "linebreak-style": [
            "off"
        ],
        "no-tabs": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "import/no-cycle": "off"
    },
    "env": {
        "browser": true
    },
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
