/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react'
import * as C from './styles'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from './components/Loading';

function App() {

  const [photo, setPhoto] = useState([])
  const [numberPage, setNumberPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)


  const nextPage = () => {
    setNumberPage(numberPage + 1)
    setIsLoading(true)
  }

  const previousPage = () => {
    if (numberPage !== 1) {
      setNumberPage(numberPage - 1)
      setIsLoading(true)
    }
    if (numberPage === 1) {
      toast.error('Ação bloqueada !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  }

  useEffect(() => {

    async function fetchPhotos() {
      await axios.get(`https://api.pexels.com/v1/curated?page=${numberPage}&per_page=10`)
        .then((response) => {

          setPhoto(response.data.photos)
          setIsLoading(false)
        })
    }
    fetchPhotos()
  }, [numberPage])



  return (
    <>
      <C.Header>
        <p>&lt;Pedro Henrique /&gt;</p>

        <div>
          <a target='_blank' href="https://www.linkedin.com/in/pedroh-dev/"><i class='bx bxl-linkedin'></i></a>
          <a target='_blank' href="https://github.com/Dev-Pedrosv"><i class='bx bxl-github git'></i></a>
        </div>
      </C.Header>
      <C.Container>

        <C.H1>Album of photography</C.H1>


        <C.ContainerImage>

          {isLoading ? (
            <>
              <Loading />
            </>
          ) : (
            <>
              {photo.map((image) => (
                <C.List key={image.id}>
                  <C.Image src={image.src.medium} />
                  <C.Info target="_blank" href={image.photographer_url}>{image.photographer}</C.Info>

                </C.List>

              ))}
            </>

          )}
        </C.ContainerImage>
        <C.ContainerButton>
          <C.Button onClick={previousPage}>
            <i class='bx bx-chevron-left'></i>
          </C.Button>
          <div>
            <p class="number">{numberPage !== 1 ? numberPage - 1 : '0'}</p>
            <p>{numberPage}</p>
            <p class="number">{numberPage + 1}</p>
          </div>
          <C.Button onClick={nextPage}>
            <i class='bx bx-chevron-right'></i>
          </C.Button>
        </C.ContainerButton>
      </C.Container >
      <ToastContainer />
      <C.Footer>

        <a target="_blank" href="https://www.pexels.com">
          <img src="https://images.pexels.com/lib/api/pexels-white.png" />

        </a>

        <p>Photos provided by Pexels</p>
      </C.Footer>
    </>
  );
}

export default App;
