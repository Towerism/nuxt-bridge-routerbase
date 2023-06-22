import { defineNuxtPlugin, addRouteMiddleware } from '#imports'

const authMiddleware = defineNuxtRouteMiddleware((to, from) => {
  console.log("we're doing some authy things")
});

export default defineNuxtPlugin((_nuxt) => {
  addRouteMiddleware('auth', authMiddleware, { global: true })
})
