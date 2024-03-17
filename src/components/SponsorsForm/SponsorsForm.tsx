import React, { useState } from "react"
import "./sponsorsform.css"

interface CampaignFormProps {
  onSubmit: (name: string, description: string, reward: string) => void
  onWithdrawFunds: () => void
}

const CampaignForm: React.FC<CampaignFormProps> = ({
  onSubmit,
  onWithdrawFunds,
}) => {
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [reward, setReward] = useState<string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, description, reward)
    setName("")
    setDescription("")
    setReward("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Reward (VET)</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={reward}
              onChange={(e) => setReward(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="field">
        <div className="control">
          <button onClick={onWithdrawFunds} className="button is-primary">
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  )
}

export default CampaignForm
