function checkVotingEligibility(age) {
    const result = age < 18 ? "You cannot vote" : "You can vote";
  
    console.log(result);
  }

  checkVotingEligibility(19)