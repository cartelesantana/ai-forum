import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import ArticleForm from '../../ArticleForm'

const prisma = new PrismaClient()

async function updateArticle(id, formData) {
  'use server'
  
  const mainImage = formData.get('mainImage')
  const title = formData.get('title')
  const description = formData.get('description')
  const content = JSON.parse(formData.get('content'))

  await prisma.article.update({
    where: { id: parseInt(id) },
    data: { title, description, content, mainImage },
  })

  redirect('/admin/dashboard/manage')
}

export default async function EditArticle({ params }) {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    })
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Edit Article</h1>
        <ArticleForm article={article} onSubmit={updateArticle} />
        {/* <ArticleForm article={article} onSubmit={(formData) => updateArticle(params.id, formData)} /> */}
      </div>
    )
  }