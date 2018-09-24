<template>
  <div class="clientes">
    <div class="col-50">
      <h1>Cliente</h1>
      <div class="">
        <router-link :to="{ name: 'CreateCliente'}" v-b-modal.modal1>Create cliente</router-link>
      </div>
      <div class="table-wrap">
        <table>
          <tr>
            <td width="100">Nombre</td>
            <td width="100">Telefono</td>
            <td width="100">Direccion</td>
            <td width="100" align="center">Action</td>
          </tr>
          <tr v-for="cliente in clientes" :class="trClass(cliente._id)" v-bind:key="'cliente-' + cliente._id">
            <td>{{ cliente.nombre }}</td>
            <td>{{ cliente.telefono }}</td>
            <td>{{ cliente.direccion }}</td>
            <td align="center">
              <router-link v-bind:to="{ name: 'EditCliente', params: { clienteId: cliente._id } }" v-b-modal.modal1>Edit</router-link> |
              <a href="#" @click="deleteCliente(cliente._id)">Delete</a>
            </td>

          </tr>
        </table>
      </div>
    </div>
    <div class="col-50">
      <div>
  <!--<b-btn v-b-modal.modal1>Launch demo modal</b-btn>-->
  <!-- Modal Component -->
  <b-modal id="modal1" title="Bootstrap-Vue" size="lg" hide-footer>
    <p class="my-4">Cliente</p>
    <router-view v-on:created="onCreated"></router-view>
  </b-modal>
</div>
    </div>
  </div>
</template>

<script>
import ClienteService from '@/services/ClienteService'

export default {
  name: 'clientes',
  data () {
    return {
      clientes: []
    }
  },
  mounted () {
    this.getCliente()
  },
  methods: {
    getCliente () {
      return ClienteService.fetchClientes(this.$route.params.mapId).then(response => {
        this.clientes = response.data
      })
    },
    deleteCliente (id) {
      return ClienteService.deleteCliente({ mapId: this.$route.params.mapId, id }).then(response => {
        return this.getCliente()
      })
    },
    onCreated () {
      this.getCliente()
      this.hideModal()
    },
    trClass (id) {
      return {
        selected: this.$route.params.clienteId === id
      }
    },
    hideModal () {
      this.$refs.modal1.hide()
    }
  }
}
</script>
<style type="text/css">
  tr.selected {
    background: #2d51ab !important;
    color: white !important;
  }
  tr.selected * {
    color: white !important;
  }
</style>
