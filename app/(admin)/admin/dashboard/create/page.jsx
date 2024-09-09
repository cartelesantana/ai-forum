import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import ArticleForm from '../ArticleForm'
import {uploadImage} from "@/lib/uploadImage"

const prisma = new PrismaClient()

async function createArticle(formData) {
  'use server'
  
  const mainImage = await uploadImage(formData)
  const title = formData.get('title')
  const description = formData.get('description')
  const content = JSON.parse(formData.get('content'))

  await prisma.article.create({
    data: { mainImage, title, description, content },
  })

  redirect('/admin/dashboard/manage')
}

export default function CreateArticle() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Create New Article</h1>
      <ArticleForm onSubmit={createArticle} />
    </div>
  )
}