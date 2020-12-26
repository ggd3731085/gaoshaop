export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'employee_id',
        align: 'start',
        sortable: false,
        value: 'employee_id'
      },
      { text: 'certification_name', value: 'certification_name' },
      { text: 'get_date', value: 'get_date' },
      { text: 'encourage_date', value: 'encourage_date' },
      { text: 'Actions', value: 'actions', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      employee_id: '',
      certification_name: '',
      get_date: '',
      encourage_date: ''
    },
    defaultItem: {
      employee_id: '',
      certification_name: '',
      get_date: '',
      encourage_date: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? '新規' : '編集'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      let _this = this
      _this.$http.get('/searchEmployeeCertification', {
      }).then((res) => {
        if (res.status === 200) {
          _this.desserts = res.data
        } else {
          alert('エラーが発生しました')
        }
        console.log(res)
      }, (err) => {
        console.log(err)
      })
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      let _this = this
      if (_this.editedItem == null) {
        alert('データを入力してください')
      } else {
        _this.$http.post('/saveEmployeeCertification', {
          editedItem: _this.editedItem
        }).then((res) => {
          if (res.status === 200) {
            _this.regInfo = res.data
            if (_this.regInfo.status === 1) {
              alert('保存が成功しました')
            } else {
              alert('保存が失敗しました')
            }
          } else {
            alert('エラーが発生しました')
          }
          console.log(res)
        }, (err) => {
          console.log(err)
        })
      }
      console.log('save_end')
      this.dialog = false
      // this.close()
    }
  }
}
