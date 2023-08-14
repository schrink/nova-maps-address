Nova.booting((Vue, router, store) => {
  Vue.component('index-nova-maps-address', require('./components/IndexField.vue'))
  Vue.component('detail-nova-maps-address', require('./components/DetailField.vue'))
  Vue.component('form-nova-maps-address', require('./components/FormField.vue'))
})
