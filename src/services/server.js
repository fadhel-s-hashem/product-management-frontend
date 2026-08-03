const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/products`

const index = async () => {
  const res = await fetch(BASE_URL)
  
  const data = await res.json()
  if (!res.ok) {
    throw new Error(`${res.status}: ${data.message}`)
  }

  return data
}

const show = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  
  if (!res.ok) {
    throw new Error(`${res.status}: ${data.message}`)
  }
  const data = await res.json()

  return data
}

const create = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
}

const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })

  
  if (!res.ok) {
    throw new Error(`${res.status}: ${data.message}`)
  }
  
  const data = await res.json()
  return data
}

const update = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })

  if (!res.ok) {
    throw new Error(`${res.status}: ${data.message}`)
  }
  
  const data = await res.json()
  return data
}

export {
  index,
  show,
  create,
  deleteProduct,
  update,
}