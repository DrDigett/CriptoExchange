<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="100" />
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from '@/api'
import PxAssetsTable from '@/components/PxAssetsTable'

export default {
  name: 'Home',
  components: { PxAssetsTable },

  data() {
    return {
      isLoading: false,
      assets: [],
      pollInterval: null,
      initialLoaded: false,
    }
  },

  created() {
    // carga inicial con loader
    this.fetchAssets(true)

    // actualizar cada 15 segundos
    this.pollInterval = setInterval(() => this.fetchAssets(false), 15000)
  },

  beforeDestroy() {
    if (this.pollInterval) clearInterval(this.pollInterval)
  },

  methods: {
    async fetchAssets(initial = false) {
      if (initial) this.isLoading = true
      try {
        const assets = await api.getAssets()
        this.assets = assets
        this.initialLoaded = true
      } catch (err) {
        console.error('Error al obtener assets:', err)
      } finally {
        if (initial) this.isLoading = false
      }
    },
  },
}
</script>