<template>
  <div class="cliente">
    <h1>Nuevo Cliente</h1>
      <div class="form">
        <div>
          <input class="wide-input" type="text" name="title" placeholder="NOMBRE" v-model="nombre">
        </div>

        <div>
          <input class="wide-input" type="text" name="title" placeholder="TELEFONO" v-model="telefono">
        </div>

        <div>
          <textarea name="direccion" rows="8" cols="80" v-model="direccion" placeholder="Direccion"></textarea>
        </div>
        <div>
          <button v-if="!updating" class="btn" @click="createCliente">
            <span >Create Cliente</span>
          </button>
          <pulse-loader v-else />
        </div>
      </div>
  </div>
</template>

<script>
import ClienteService from '@/services/ClienteService'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  name: 'NewCliente',
  components: {
    PulseLoader
  },
  data () {
    return {
      nombre: '',
      telefono: '',
      direccion: '',
      updating: false
    }
  },
  mounted () {
  },
  methods: {
    createCliente () {
      this.updating = true
      return ClienteService.createCliente({
        nombre: this.nombre,
        telefono: this.telefono,
        direccion: this.direccion
      }).then(response => {
        this.updating = false
        this.$emit('created', 'cliente')
        this.$router.push({
          name: 'EditCliente',
          params: {
            clienteId: response.data._id
          }
        })
      })
    }
  }
}
</script>
<style type="text/css">
</style>
