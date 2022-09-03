// @ts-check

/**
 * @type {import('@nrwl/react/module-federation').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'main-app-host',
  remotes: ['shop', 'cart', 'about'],
};

module.exports = moduleFederationConfig;
