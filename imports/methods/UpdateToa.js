Meteor.methods({
    UpdateToa(newName, newIdentifier, newAvtar, newDob, newDatet, newMrp, newNurse, newStory, newAssessment, newFollowup, newEvaluation) {
      existingPatient = Toa.findOne({id: newIdentifier});
      if(existingPatient){
        if(newName === null)
          newName = existingPatient.name;
        if(newAvtar === null)
          newAvtar = existingPatient.avtar;
        if(newDob === null)
          newDob = existingPatient.dob;
        if(newDatet === null)
          newDatet = existingPatient.datet;
        if(newMrp === null)
          newMrp = existingPatient.mrp;
        if(newNurse === null)
          newNurse = existingPatient.nurse;
        if(existingPatient.story & newStory != null)
          newStory = existingPatient.story + newStory;
        if(existingPatient.assessment & newAssessment != null)
          newAssessment = existingPatient.assessment + newAssessment;
        if(existingPatient.followup & newFollowup != null)
          newFollowup = existingPatient.followup + newFollowup;
        if(existingPatient.evaluation & newEvaluation != null)
          newEvaluation = existingPatient.evaluation + newEvaluation;
      }
      // else
      //   console.log("new patient");
      Toa.upsert({
        // Selector
          id: newIdentifier

        },{
        
        $set: {
          // Modifier
            name: newName,
            id: newIdentifier,
            avtar: newAvtar,
            dob: newDob,
            datet: newDatet,
            mrp: newMrp,
            nurse: newNurse,
            story: newStory,
            assessment: newAssessment,
            followup: newFollowup,
            evaluation: newEvaluation,
            createdAt: new Date()
          } 
      });
    },
  });