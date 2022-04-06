import React from "react"
import { Button, Card, Nav } from 'react-bootstrap';

export default ({ hash }) => {
    if (hash === '#voterInfo' || hash === '') {
        return (
            <Card.Body>
                <Card.Title>Voting process explained</Card.Title>
                <Card.Text>
                To access the <strong>Voter Dashboard</strong> you need an approved account
                for more information refer to the <strong>Guests</strong> tab. <br /> <br />
                The voting process consists of <strong>three stages</strong>:
                <ul>
                    <li>Proposal - put forward candidacies (Stage access configured by Admin)</li>
                    <li>Commitment - commit your vote and use a passoword to keep it a secret!</li>
                    <li>Reveal - all voting is frozen and final results are revealed</li>
                </ul> 
                Each stage limits the voters' actions to relevant actions, different contract calls 
                will be reverted! 
                <br />
                <br />
                The <strong>Voter Dashboard</strong> provides users with a few key pieces of information.
                This include the list of current approved candidates, the maximum number of votes each voter
                has at their disposal, how many winners will be elected by the ballot and finally a 
                <strong> required stake amount</strong>. The stake represents the amount of ETH that the voter
                has to lend to secure his vote and it will be automatically returned by the contract on
                <strong> Reveal</strong>. This reduces the chances for vote manipulation by ensuring all 
                votes are revealed!
                </Card.Text>
                <Button href="/voterView" variant="primary">Go to Voter Dashboard!</Button>
            </Card.Body> 
        )
    } else if (hash === '#guestInfo') {
        return (
            <Card.Body>
                <Card.Title>How to participate in this ballot?</Card.Title>
                <Card.Text>
                Participating in any vote requires an approved ethereum account, 
                any interaction with the contract by accounts that have ot been granted access
                will be reverted and result in a gas fee for the sender!
                <br />
                <br />
                If you dont already own a whitelisted account you can apply by going to the
                <a href="/guestView"> Apply for voting access</a> page.
                </Card.Text>
                <Button href="/guestView" variant="primary">Apply for rights!</Button>
            </Card.Body> 
        ) 
    }

}
  