<template>
<tr>
   <td> <img class="img-responsive" :src="avatar" alt="Avtar" height="23" width="25"/>{{this.toa.name}}</td>
          <td>{{this.toa.id}}</td>
          <td>{{this.toa.dob }} </td>
          <td>{{this.toa.datet }}</td>
          <td>{{this.toa.mrp}}</td>
          <td>{{this.toa.nurse}}</td>
          <td>{{this.toa.story}}</td>
          <td>{{this.toa.assessment}}</td>
          <td>{{this.toa.followup}} </td>
          <td>{{this.toa.evaluation}}</td>
          <td><button @click="handleClick()">Delete</button><button @click="handleEdit()">Edit</button></td>
</tr>
</template>
 
<script>
import cardioImage from '/imports/images/blue.png';
import coronaImage from '/imports/images/yellow.png';
import emergImage from '/imports/images/red.png';
import nurseImage from '/imports/images/green.png';

export default {
  name: "Display",
  props: ["toa"],
  data() {
    return {
      avatar: nurseImage,
    };
  },
  // Vue Methods
  methods: {  
    handleClick() {
      Toa.remove(this.toa._id);
    },
    handleEdit() {
      this.$router.push({ name: 'patient', params: {id: this.toa.id}});
    },
  },
  beforeMount(){
      if(this.toa.avtar == 'red')
        this.avatar = emergImage
      if(this.toa.avtar == 'blue')
        this.avatar = cardioImage
      if(this.toa.avtar == 'green')
        this.avatar = nurseImage
      if(this.toa.avtar == 'yellow')
        this.avatar = coronaImage  
  },
  // Meteor reactivity
  meteor: {
    // Subscriptions - Errors not reported spelling and capitalization.
    $subscribe: {
      'Toa': []
    },
    // toa() {
    //   return Toa.find({}).fetch();
    // },
    // // A Minimongo cursor on the Time collection is added to the Vue instance
    // ToaCursor () {
    //   // Here you can use Meteor reactive sources like cursors or reactive vars
    //   // as you would in a Blaze template helper
    //   return Toa.find({}, {
    //     sort: {createdAt: -1}
    //   })
    // },
  }
};
</script>