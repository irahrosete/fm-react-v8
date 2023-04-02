const fetchSearch = async ({ queryKey }) => {
  const { animal, location, breed } = queryKey[1]

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  )

  if (!res.ok) {
    throw new Error(
      `pet search for ${animal}, ${location}, ${breed} fetch not ok`
    )
  }

  return res.json()
}

export default fetchSearch
