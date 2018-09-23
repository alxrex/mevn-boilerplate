import Api from '@/services/Api'
import Vue from 'vue'

const TAG = 'Cliente'

export default {
  fetchClientes () {
    return Api().get('/cliente')
      .catch((err) => {
        Vue.toasted.error(TAG + ' fetch failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  createCliente (params) {
    return Api().post('/cliente', params)
      .then((res) => {
        Vue.toasted.success(TAG + ' created')
        return res
      })
      .catch((err) => {
        Vue.toasted.error(TAG + ' creation failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  updateCliente (params) {
    return Api().put('/cliente/' + params.id, params)
      .then(() => {
        Vue.toasted.success(TAG + ' updated')
      })
      .catch((err) => {
        Vue.toasted.error(TAG + ' update failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  getCliente (id) {
    return Api().get('/cliente/' + id)
      .catch((err) => {
        Vue.toasted.error(TAG + ' fetch failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  },

  deleteCliente (params) {
    return Api().delete('/cliente/' + params.id)
      .then(() => {
        Vue.toasted.success(TAG + ' deleted')
      })
      .catch((err) => {
        Vue.toasted.error(TAG + ' deletion failed: ' + err.response.data.message, {
          duration: 5000
        })
      })
  }
}
