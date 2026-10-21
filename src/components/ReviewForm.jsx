import React from 'react'
import { BsEmojiNeutralFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { BsFillEmojiFrownFill } from 'react-icons/bs'

import "./ReviewForm.css"

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
        <div className="form-control score-container">
          <label className="radio-container">
              <input type="radio" name="review" value="unsatisfied" checked={data.review === "unsatisfied"} required onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <BsFillEmojiFrownFill/>
              <p>Insatisfeito</p>
          </label>
          <label className="radio-container">
              <input type="radio" name="review" value="neutral" checked={data.review === "neutral"} required onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <BsEmojiNeutralFill/>
              <p>Poderia ser melhor</p>
          </label> 
          <label className="radio-container">
              <input type="radio" name="review" value="satisfied" checked={data.review === "satisfied"} required onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <BsFillEmojiSmileFill/>
              <p>Satisfeito</p>
          </label> 
          <label className="radio-container">
              <input type="radio" name="review" value="very_satisfied" checked={data.review === "very_satisfied"} required onChange={(e) => updateFieldHandler("review", e.target.value)}/>
              <BsFillEmojiHeartEyesFill/>
              <p>Muito satisfeito</p>
          </label>                   
        </div>
        <div className="form-control">
          <label htmlFor="comment">Comentário</label>
          <textarea name="comment" id="comment" placeholder='Conte como foi a sua experiência com o produto...' value={data.comment || ""} required onChange={(e) => updateFieldHandler("comment", e.target.value)}></textarea>
        </div>
    </div>
  )
}

export default ReviewForm