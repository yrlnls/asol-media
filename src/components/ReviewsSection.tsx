import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../lib/firebase'

type Review = {
  id: string
  name: string
  project: string
  message: string
  rating: number
}

type ReviewForm = {
  name: string
  project: string
  message: string
  rating: string
}

type FirestoreReview = {
  name?: string
  project?: string
  message?: string
  rating?: number
}

const emptyForm: ReviewForm = {
  name: '',
  project: '',
  message: '',
  rating: '5',
}

type ReviewsSectionProps = {
  embedded?: boolean
  showIntro?: boolean
}

export default function ReviewsSection({
  embedded = false,
  showIntro = true,
}: ReviewsSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [form, setForm] = useState<ReviewForm>(emptyForm)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    const reviewsQuery = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'))

    const unsubscribe = onSnapshot(
      reviewsQuery,
      (snapshot) => {
        const fetchedReviews = snapshot.docs
          .map((doc) => {
            const data = doc.data() as FirestoreReview

            if (!data.name || !data.project || !data.message || typeof data.rating !== 'number') {
              return null
            }

            return {
              id: doc.id,
              name: data.name,
              project: data.project,
              message: data.message,
              rating: data.rating,
            }
          })
          .filter((review): review is Review => review !== null)

        setReviews(fetchedReviews)
        setLoadError('')
      },
      () => {
        setLoadError('Reviews could not be loaded right now.')
      },
    )

    return unsubscribe
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      await addDoc(collection(db, 'reviews'), {
        name: form.name.trim(),
        project: form.project.trim(),
        message: form.message.trim(),
        rating: Number(form.rating),
        createdAt: serverTimestamp(),
      })

      setForm(emptyForm)
      setSubmitMessage('Thank you. Your review has been added.')
    } catch {
      setSubmitMessage('Something went wrong while saving your review. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const activeRating = Number(form.rating)

  return (
    <section
      id="reviews"
      className={`section reviews-section${embedded ? ' embedded' : ''}`}
    >
      <div className="container">
        <div className="reviews-shell">
          {showIntro ? (
            <div className="reviews-intro">
              <span className="eyebrow">Client Reviews</span>
              <h2>What clients are saying about working with Asol Media.</h2>
            </div>
          ) : null}

          <div className="reviews-grid">
            <div className="reviews-panel reviews-form-panel">
              <div className="reviews-panel-head">
                <h3>Leave a review</h3>
                <p>Share the project we worked on and how the experience felt.</p>
              </div>

              <form className="reviews-form" onSubmit={handleSubmit}>
                <label className="reviews-field">
                  <span>Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder="Your name"
                    required
                  />
                </label>

                <label className="reviews-field">
                  <span>Project</span>
                  <input
                    type="text"
                    value={form.project}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, project: event.target.value }))
                    }
                    placeholder="Wedding, corporate event, documentary..."
                    required
                  />
                </label>

                <div className="reviews-field">
                  <span>Rating</span>
                  <div
                    className="reviews-stars"
                    role="radiogroup"
                    aria-label="Choose a rating from 1 to 5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((star) => {
                      const filled = star <= activeRating

                      return (
                        <button
                          key={star}
                          type="button"
                          className={`reviews-star${filled ? ' is-active' : ''}`}
                          aria-label={`${star} star${star === 1 ? '' : 's'}`}
                          aria-checked={Number(form.rating) === star}
                          role="radio"
                          onClick={() =>
                            setForm((current) => ({ ...current, rating: String(star) }))
                          }
                        >
                          {filled ? '★' : '☆'}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <label className="reviews-field">
                  <span>Review</span>
                  <textarea
                    value={form.message}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, message: event.target.value }))
                    }
                    placeholder="Tell future clients what stood out."
                    rows={5}
                    maxLength={400}
                    required
                  />
                </label>

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Saving review...' : 'Submit review'}
                </button>

                {submitMessage ? <p className="reviews-success">{submitMessage}</p> : null}
              </form>
            </div>

            <div className="reviews-panel reviews-list-panel">
              <div className="reviews-panel-head">
                <h3>Latest reviews</h3>
                <p>{reviews.length} review{reviews.length === 1 ? '' : 's'} currently showing.</p>
              </div>

              {loadError ? <p className="reviews-success">{loadError}</p> : null}

              {!loadError && reviews.length === 0 ? (
                <p className="reviews-empty">
                  Reviews will appear here once clients start sharing them.
                </p>
              ) : null}

              <div className="reviews-list">
                {reviews.map((review) => (
                  <article className="review-card" key={review.id}>
                    <div className="review-rating" aria-label={`${review.rating} out of 5 stars`}>
                      {'★'.repeat(review.rating)}
                      <span>{'☆'.repeat(5 - review.rating)}</span>
                    </div>
                    <p className="review-message">“{review.message}”</p>
                    <div className="review-meta">
                      <strong>{review.name}</strong>
                      <span>{review.project}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
