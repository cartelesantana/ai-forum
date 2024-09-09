import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export default async function BlogList() {
  const articles = await prisma.article.findMany({
    where: { published: true },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Published Articles</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.id} className="border p-4 rounded">
            <Link href={`/admin/dashboard/blog/${article.id}`}>
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p>{article.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}