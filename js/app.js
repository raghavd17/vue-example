  var app = new Vue({
      el: '#app',
      data: {
          message: 'Hello welcome to the VUE JS!',
          message1: ''
      }
  });

  var app1 = new Vue({
      el: '#new',
      data: {
          welcome: ''
      }
  });

  var list = new Vue({
      el: '#list_company',
      data: {
          newName: '',
          names: ['v7 Technologies', 'Samcomm Technologies ', '2adpro Media Solutions', 'Ninestars', 'Tek Systems', 'Razorfish Neev', 'Ushamartin Technologies']
      },
      methods: {
          addName() {
              if (!this.newName == '' || !this.newName == null) {
                  this.names.push(this.newName);
                  this.newName = " "
              } else {
                  alert('enter the name ');
              }

          }
      }
  })
