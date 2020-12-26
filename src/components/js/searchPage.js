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
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
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
      this.desserts = [
        {
          employee_id: 'tenji001',
          certification_name: 'SFDC',
          get_date: '2019-12-01',
          encourage_date: '2020-01-01'
        },
        {
          employee_id: 'tenji002',
          certification_name: '日本語',
          get_date: '2019-12-01',
          encourage_date: '2020-01-01'
        }
      ]
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
