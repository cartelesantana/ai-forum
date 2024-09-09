import { writeFile } from 'fs/promises'
import { join } from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function uploadImage(data: FormData) {
  const file: File | null = data.get('mainImage') as unknown as File
  // const file: File | null = data.get('file') as unknown as File

  if (!file) {
    throw new Error('No file uploaded')
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const path = join('public', 'images', 'blog', `${uuidv4()}-${file.name}`)
  await writeFile(path, buffer)

  return path.replace('public', '')
}