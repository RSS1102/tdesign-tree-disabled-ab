export default {
  test: {
    include: ['tests/*.test.js'],
    environment: 'jsdom',
    // Browser fixture packages use extensionless subpath imports; let Vite resolve them.
    server: { deps: { inline: [/react-tree-(before|after)/, /vue-next-tree-(before|after)/] } },
  },
};
