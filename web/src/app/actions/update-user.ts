'use server'

export const updateUser = async (e: FormData) => {
  try {

    const username = e.get('username')?.toString()

    if (!username) return

    console.log(username)
  } catch (error) {
    console.log('updateUser error', error)
  }
}