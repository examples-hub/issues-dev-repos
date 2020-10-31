module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    "@babel/preset-react",
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        "displayName": true,
        "fileName": true,
      }
    ],
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-proposal-numeric-separator",
  ]
};