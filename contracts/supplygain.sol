// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Supplygain {
    // Owner is the NGO who is the proposer
    address public owner;

    struct Campaign {
        address sponsor;
        string name;
        string description;
        uint256 budget;
    }

    Campaign[] public campaigns;

    event SponsorshipCreated(uint256 sponsorshipId, address sponsor, uint256 budget);
    event Payout(address user, uint256 amount, uint256 sponsorshipId);

    function createSponsorship( 
        string memory name,
        string memory description
        ) external payable {
        Campaign memory newCampaign = Campaign({
            sponsor: msg.sender,
            budget: msg.value,
            name: name,
            description: description
        });

        campaigns.push(newCampaign);
        emit SponsorshipCreated(campaigns.length - 1, msg.sender, msg.value);
    }

    function payout(uint256 sponsorshipId, bool carBought, uint256 amount) external {
        require(sponsorshipId < campaigns.length, "Invalid sponsorshipId");

        // JUST IN CASE VALIDATE == TRUE
        require(carBought, "You did not buy a car!");
        Campaign storage campaign = campaigns[sponsorshipId];
        require (campaign.budget > 0, "No funds left in this sponsorship");
        require(amount <= campaign.budget, "Not enough funds left in the sponsorship");

        campaign.budget -= amount;  // Deduct from sponsorship
        payable(msg.sender).transfer(amount);  // Pay the user

        emit Payout(msg.sender, amount, sponsorshipId);
    }

    function withdrawUnspentFunds() external {
        uint256 campaignId;
        campaignId = 0;
        require(campaignId < campaigns.length, "Invalid sponsorshipId");
        Campaign storage campaign = campaigns[campaignId];

        require(msg.sender == campaign.sponsor, "Only the sponsor can withdraw");
        require(campaign.budget > 0, "No funds left to withdraw");

        uint256 amount = campaign.budget;
        campaign.budget = 0;  // Set the budget to zero to prevent double withdrawals

        payable(msg.sender).transfer(amount);
    }

    function getCampaigns(address sponsorshipAddress) external view returns (Campaign[] memory) {
        Campaign[] memory campaignArray = new Campaign[](campaigns.length);
        for (uint i = 0; i < campaigns.length - 1; i++) {
            if (campaigns[i].sponsor == sponsorshipAddress) {
                campaignArray[i] = campaigns[i];
            }
        }
        return campaignArray;
    }
}