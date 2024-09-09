import { PrismaClient } from '@prisma/client'
import Link from 'next/link'
import DeleteButton from './DeleteButton'
import PublishButton from './PublishButton'

const prisma = new PrismaClient()

async function deleteArticle(id) {
  'use server'
  await prisma.article.delete({
    where: { id: parseInt(id) },
  })
}

async function publishArticle(id) {
  'use server'
  await prisma.article.update({
    where: { id: parseInt(id) },
    data: { published: true },
  })
}

export default async function ManageArticles() {
  const articles = await prisma.article.findMany()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Articles</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p>{article.description}</p>
            <div className="mt-2 space-x-2">
              <Link href={`/admin/dashboard/edit/${article.id}`} className="text-blue-500">
                Edit
              </Link>
              <DeleteButton id={article.id} deleteArticle={deleteArticle} />
              {!article.published && <PublishButton id={article.id} publishArticle={publishArticle} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}