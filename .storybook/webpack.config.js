module.exports = (baseConfig, env, config) => {
  config.module.rules.push(
    {
      test: /\.(woff|woff2|eot|ttf|svg|gif|png)$/,
      use: 'url-loader'
    },{
      test: /\.(ts|tsx)$/,
      loader: require.resolve('awesome-typescript-loader'),
    }
  );

  config.resolve.extensions.push('.ts', '.tsx', '.woff2', '.woff', '.ttf', '.svg', '.ttf', '.png', '.gif');
  return config;
};