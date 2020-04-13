
    handleSubmit2(event) {
      Toa.insert({
        name: this.newName,
        id: this.newIdentifier,
        avtar: this.newAvtar,
        dob: this.newDob,
        datet: this.newDatet,
        mrp: this.newMrp,
        nurse: this.newNurse,
        story: this.newStory,
        assessment: this.newAssessment,
        followup: this.newFollowup,
        evaluation: this.newEvaluation,
        createdAt: new Date() // current time
      });
 
      // Clear form
      this.newName = "";
      this.newIdentifier = "";
      this.newAvtar = "";
      this.newDob = "";
      this.newDatet = "";
      this.newMrp = "";
      this.newNurse = "";
      this.newStory = "";
      this.newAssessment = "";
      this.newFollowup = "";
      this.newEvaluation = "";
    },