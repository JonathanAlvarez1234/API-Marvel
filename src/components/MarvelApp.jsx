import { useCharacters } from "../hooks/useCharacters"
import { GridCharacters } from "./GridCharacters"
import Pagination from '@mui/material/Pagination'
import { useState } from "react"

export const MarvelApp = () => {
  const [page, setPage] = useState(1)
  const { characters, pag } = useCharacters(page)

  const handlePageChange = (event, value) => {
    setPage(value)
  }
  return (
    <>
      <nav class="navbar bg-body-tertiary" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s" alt="Logo" width="150" height="70" class="d-inline-block align-text-top alig-items-left mt-10 w-10" />
          <div className='container d-flex flex-row justify-content-center alig-items-center mt-3 w-50'>
            <form className='d-flex' onSubmit={(e) => { handlePoke(categoria, e) }} >
              <input type='text' className='form-control me-2'  placeholder="Nombre del superheroe" onChange={(e) => { setCategoria(e.target.value) }} />
              <input type='submit' className='btn btn-outline-danger' value='Buscar' />

            </form>
          </div>
      </nav>
      <GridCharacters characters={characters} />
      <Pagination className='position-absolute start-50' count={pag} page={page} onChange={handlePageChange} />
    </>
  )
}
 
 