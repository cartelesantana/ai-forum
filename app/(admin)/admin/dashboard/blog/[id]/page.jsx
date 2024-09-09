import { PrismaClient } from "@prisma/client";
import Image from "next/image";

const prisma = new PrismaClient();

export default async function ArticleDetail({ params }) {
  const article = await prisma.article.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      {article?.mainImage && (
        <div>
          <Image
            src={article?.mainImage}
            alt={article?.title}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <h1 className="mb-4 text-3xl font-bold">{article.title}</h1>
      <p className="mb-4 text-gray-600">{article.description}</p>
      <div className="prose lg:prose-xl">
        {article.content.map((block, index) => {
          if (block.type === "heading") {
            return (
              <h2 key={index} className="mb-2 mt-4 text-2xl font-bold">
                {block.text}
              </h2>
            );
          } else if (block.type === "paragraph") {
            return (
              <p key={index} className="mb-4">
                {block.text}
              </p>
            );
          } else if (block.type === "list") {
            return (
              <ul key={index} className="mb-4 list-disc pl-5">
                {block.text.split("\n").map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
}
