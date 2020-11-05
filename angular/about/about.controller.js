import moment from 'moment';

'use strict';
  
  function AboutCtrl() {
    const vm = this;
    
    vm.$onInit = () => {
      vm.today = moment().format('MMM, DD YYYY');
      console.log('Today', vm.today);
    };
  }
  

  export default AboutCtrl;
