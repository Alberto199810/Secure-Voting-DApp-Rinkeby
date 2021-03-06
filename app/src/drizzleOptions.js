import Web3 from "web3";
import CommitRevealElections from "./contracts/CommitRevealElections.json";


const options = {
  // web3: {
  //   block: false,
  //   customProvider: new Web3("ws://localhost:7545"),
  // },
  contracts: [CommitRevealElections],
  events: {
    CommitRevealElections: ["newVoteCommit", "missingTime", "candidateSet", "newVoteRevealed", "winnersResults"],
  },
};

export default options;
