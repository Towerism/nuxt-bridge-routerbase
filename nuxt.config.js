import fs from 'node:fs'
import path from 'node:path'
import { defineNuxtConfig } from '@nuxt/bridge'
import { fromNodeMiddleware } from 'h3';

export default defineNuxtConfig({
  app: {
    baseURL: '/app/',
    assetsPath: '/_nuxt/',
    buildAssetsDir: '/_nuxt/',
    cdnUrl: '/app/'
  },
  basePath: '/app',
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // router: {
  //   base: "/ui_template_sub/"
  // }
  hooks: {
    ready(nuxt) {
      // https://github.com/nuxt/bridge/issues/607
      // translate nuxt 2 hook from @nuxt/webpack-edge to nuxt bridge hook
      // when https://github.com/nuxt/bridge/pull/772 is merged, we can upgrade
      // and remove this
      nuxt.hook('server:devMiddleware', async (devMiddleware) => {
        await nuxt.callHook('server:devHandler', fromNodeMiddleware(devMiddleware));
      });
    },
    "build:templates": ({ templateVars }) => {
      templateVars.router = { ...templateVars.router, base: '/app/' }
    },
    "webpack:config": (configs) => {
      const clientConfig = configs.find((c) => c.name === 'client')
      clientConfig.output.publicPath = '/app/_nuxt/'
    }
  }
})
