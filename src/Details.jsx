import { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'
import ErrorBoundary from './ErrorBoundary'
import Carousel from './Carousel'
import fetchPet from './fetchPet'
import Modal from './Modal'

const Details = () => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const [_, setAdoptedPet] = useContext(AdoptedPetContext)
  const { id } = useParams()
  const results = useQuery(['details', id], fetchPet)

  if (results.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🐾</h2>
      </div>
    )
  }

  const pet = results.data.pets[0]

  return (
    <div className='details'>
      <Carousel images={pet.images} />
      <div>
        <h2>{pet.name}</h2>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {pet.name}</h1>
                <div className="buttons">
                  <button onClick={() => {
                    setAdoptedPet(pet)
                    navigate("/")
                  }}>Yes</button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null
          }
        </h2>
      </div>
    </div>
  )
}

// ErrorBoundary needs to have a component that wraps it (DetailsErrorBoundary) 
// so it wraps the component that it catches errors from (Details)
function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
  // props spread operator is fine as it is just a pass-through. otherwise, need to be explicit with props
}

export default DetailsErrorBoundary
