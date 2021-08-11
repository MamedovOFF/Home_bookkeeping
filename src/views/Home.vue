<template>
<div>
  <div class="page-title">
    <h3>{{'Bill' | localize}}</h3>

    <button class="btn waves-effect waves-light btn-small" @click="refresh">
      <i class="material-icons">refresh</i>
    </button>
  </div>
  <loader v-if="loading" />
  <div v-else class="row">
     <Homebill 
      :rates="currency.rates"
     />

        <HomeCurrency 
         :rates="currency.rates"
         :date="currency.date"
        />

  </div>
</div>
</template>

<script>
import Homebill from '@/components/Homebill'
import HomeCurrency from '@/components/HomeCurrency'
import Loader from '../components/app/Loader.vue'

export default {
  name: 'Home',
  metaInfo() {
    return {
      title: this.$title('Menu_Bill')
    }
  },
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted() {
     this.currency = await this.$store.dispatch('featchCurrency') 
     this.loading = false
  },
  methods: {
    async refresh() {
      this.loading = true
      this.currency = await this.$store.dispatch('featchCurrency') 
      this.loading = false
    }
  },
  components: {
    Homebill, HomeCurrency, Loader
  }
}
</script>
