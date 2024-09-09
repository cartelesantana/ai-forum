'use client'

import { useRouter } from 'next/navigation'

export default function PublishButton({ id, publishArticle }) {
  const router = useRouter()

  const handlePublish = async () => {
    await publishArticle(id)
    router.refresh()
  }

  return (
    <button onClick={handlePublish} className="text-green-500">
      Publish
    </button>
  )
}