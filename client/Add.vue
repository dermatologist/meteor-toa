<template>
  <div className="container">
    <div class="col-lg-12">
    <h2>Add Observation</h2>
    <form className="new-task" @submit.prevent="handleSubmit">
      <div class="content">
      <div id="section0" >
      </div><hr>
      <h2 class="section">Patient: {{ newIdentifier }}</h2>
      <div id="section1" >
      <div class="field"><label for="name">Name: </label><input v-model='newName' type="text" id="name" name="name" size="20" placeholder="Name"></div>
      <div class="field"><label for="identifier">Identifier*: </label><input v-model='newIdentifier' type="text" id="identifier" name="identifier" size="20" placeholder="Identifier" required></div>
      <div class="field"><label for="avtar">Avatar: </label><select v-model='newAvtar' id="avtar" name="avtar">
      <option value="red">Emergency</option>
      <option value="green">Routine</option>
      <option value="blue">Blue</option>
      <option value="yellow">COVID-19</option>
      </select></div>
      <div class="field"><label for="dob">Date of Birth: </label><input v-model='newDob' type="date" id="dob" name="dob" placeholder="yyyy-mm-dd"></div>
      <div class="field"><label for="datet">Date of TOA: </label><input v-model='newDatet' type="date" id="datet" name="datet" value="yyyy-mm-dd"></div>
      <div class="field"><label for="mrp">MRP: </label><input v-model='newMrp' type="text" id="mrp" name="mrp" size="20" placeholder="MRP"></div>
      <div class="field"><label for="nurse">Nurse: </label><input v-model='newNurse' type="text" id="nurse" name="nurse" size="20" placeholder="Nurse"></div>
      </div><hr>
      <h2 class="section">TOA</h2>
      <div id="section2" >
      <div class="field"><label for="story">Story:</label><br><textarea v-model='newStory' id="story" name="story" placeholder="Story..." wrap="hard"></textarea></div>
      <div class="field"><label for="assessment">Assessment:</label><br><textarea v-model='newAssessment' id="assessment" name="assessment" placeholder="Assessment..." wrap="hard"></textarea></div>
      <div class="field"><label for="followup">Follow Up:</label><br><textarea v-model='newFollowup' id="followup" name="followup" placeholder="Follow Up..." wrap="hard"></textarea></div>
      <div class="field"><label for="evaluation">Evaluation:</label><br><textarea v-model='newEvaluation' id="evaluation" name="evaluation" placeholder="Evaluation..." wrap="hard"></textarea></div>
      <div class="field"><input class="btn-primary" type="submit" id="buttonsubmit" name="submit"></div>
      </div>
      </div>
      </form>
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
      newIdentifier: this.$route.params.id
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
            // 'result' is the method return value
            //console.log(error,result)
          }
      );
      this.$router.push({name: "dashboard"});
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