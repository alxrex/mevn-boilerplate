<template>
  <div class="posts">
    <h1>Edit Cliente</h1>
      <div class="form">
        <div class="">
          <a href="#" @click.prevent="deleteCliente()">Delete</a>
        </div>
        <div>
          <input class="wide-input" type="text" name="nombre" placeholder="NOMBRE" v-model="nombre">
        </div>
        <div>
          <input class="wide-input" type="text" name="telefono" placeholder="TELEFONO" v-model="telefono">
        </div>
        <div>
          <textarea name="direccion" rows="8" cols="80" v-model="direccion" placeholder="direccion"></textarea>
        </div>
        <div>
          <button v-if="!updating" class="btn" @click="updateCliente">
            <span >Update Cliente</span>
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
  name: 'EditCliente',
  components: {
    PulseLoader
  },
  data () {
    return {
      nombre: '',
      direccion: '',
      telefono: '',
      updating: false
    }
  },
  mounted () {
    this.getCliente()
  },
  methods: {
    getCliente () {
      return ClienteService.getCliente(this.$route.params.clienteId).then(response => {
        this.nombre = response.data.nombre
        this.telefono = response.data.telefono
        this.direccion = response.data.direccion
      })
    },
    deleteCliente () {
      if (confirm('Delete Cliente?')) {
        ClienteService.deleteCliente({
          id: this.$route.params.clienteId
        }).then(() => {
          this.$emit('deleted', 'post')
          this.$router.push({
            name: 'Cliente'
          })
        })
      }
    },
    updateCliente () {
      this.updating = true
      return ClienteService.updateCliente({
        id: this.$route.params.clienteId,
        nombre: this.nombre,
        telefono: this.telefono,
        direccion: this.direccion
        /*  title: this.title,
        title: this.title,
        body: this.body */
      }).then(response => {
        this.updating = false
        this.$emit('updated', 'post')
      })
    }
  },
  watch: {
    '$route.params.clienteId': function (clienteId) {
      this.getCliente()
    }
  }
}
</script>
<style type="text/css">
</style>
