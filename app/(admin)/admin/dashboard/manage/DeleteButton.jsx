'use client'

import { useRouter } from 'next/navigation'

export default function DeleteButton({ id, deleteArticle }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this article?')) {
      await deleteArticle(id)
      router.refresh()
    }
  }

  return (
    <button onClick={handleDelete} className="text-red-500">
      Delete
    </button>
  )
}