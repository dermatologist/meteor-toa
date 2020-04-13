<template>
  <div class="container">
    <div class="col-lg-12">
      <div class="search-wrapper">
          <input type="text" v-model="search" placeholder="Search Id.."/>
      </div>
      <h1 class="page-header">Patients:</h1>
      <table class="table table-striped table-bordered table-dark">
        <tr>
          <th scope="col" width="10%">Name</th>
          <th scope="col" width="3%">Id</th>
          <th scope="col" width="5%">DOB</th>
          <th scope="col" width="5%">TOA</th>
          <th scope="col" width="5%">MRP</th>
          <th scope="col" width="10%">NURSE</th>
          <th scope="col" width="15%">STORY</th>
          <th scope="col" width="15%">ASSESSMENT</th>
          <th scope="col" width="15%">FOLLOW UP</th>
          <th scope="col" width="15%">EVALUATION </th>
          <th scope="col" width="2%">EDIT/DELETE</th>
        </tr>
          <Display v-for="toa in filteredToa" v-bind:key="toa.id" v-bind:toa="toa" />
      </table>
  </div>
</div>
</template>

<script>

import '/imports/collections/Toa';
import Display from "./Display.vue";


export default {
  data() {
    return {
      settings: Meteor.settings.public,   // not Meteor reactive
      search: '',
    }
  },
  // Vue Methods
  methods: {  
    handleSubmit() {
      Meteor.call('UpdateToa', this.newName, this.newIdentifier, 
          this.newAvtar, this.newDob, this.newDatet, 
          this.newMrp, this.newNurse, this.newStory, 
          this.newAssessment, this.newFollowup, this.newEvaluation, 
          function(error, result) {
            // 'result' is the method return value if any
            // console.log(error,result)
          }
      );
    }
  },
  // Meteor reactivity
  meteor: {
    // Subscriptions - Errors not reported spelling and capitalization.
    $subscribe: {
      'Toa': []
    },
    toa() {
      return Toa.find({}).fetch();
    },
    filteredToa(){
      if(this.ToaCursor){
        return this.ToaCursor.filter(toa => {
          return toa.id.toLowerCase().includes(this.search.toLowerCase())
        });
      }
    },
    // A Minimongo cursor on the Time collection is added to the Vue instance
    ToaCursor () {
      // Here you can use Meteor reactive sources like cursors or reactive vars
      // as you would in a Blaze template helper
      return Toa.find({}, {
        sort: {createdAt: -1}
      })
    },
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
  }
</style>