import { Card, CardButton, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface BlogCardProps {
  image: string;
  tag: string;
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({ image, tag, title, description, link }: BlogCardProps) => (
  <Card className="flex flex-col h-full bg-[linear-gradient(60deg,#100f2e,#0f0029)]">
    <CardHeader className="p-0 relative">
      <Image src={image} alt={title} className="rounded-t-[20px] w-full h-48 object-cover" width={400} height={192} />
      <div className="absolute top-4 left-4">
        <CardButton>{tag}</CardButton>
      </div>
    </CardHeader>
    <CardContent className="flex-1 flex flex-col justify-between p-6">
      <CardTitle className="text-xl font-semibold text-white mb-2">{title}</CardTitle>
      <CardDescription className="text-[#cccccc] mb-4">{description}</CardDescription>
    </CardContent>
    <CardFooter className="p-6 pt-0">
      <a href={link} className="ml-auto">
        <CardButton icon={<span className="ml-1">→</span>}>Read More</CardButton>
      </a>
    </CardFooter>
  </Card>
);

export default BlogCard; 