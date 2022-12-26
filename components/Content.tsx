import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import Simple from "./elements/Simple";

type Props = {
  name: string;
  description: string;
  image: any;
  githubUrl?: string;
  demoUrl?: string;
  seeMoreUrl?: string;
};

const Content: React.FC<Props> = ({
  name,
  description,
  image,
  githubUrl,
  demoUrl,
  seeMoreUrl
}) => {
  return (
    <Simple>
      <div className="flex flex-col items-center justify-between">
        <Image
          src={image}
          width={384}
          height={160}
          alt={name}
          quality={100}
          className="w-96 h-40 rounded-xl object-cover object-top"
        />
        <h3 className="font-bold text-center text-xl my-2 line-clamp-1">
          {name}
        </h3>
        <p className="line-clamp-2 text-center">{description}</p>
        <div className="w-full">
          {githubUrl && (
            <Link href={githubUrl}>
              <Button>See in GitHub</Button>
            </Link>
          )}
          {demoUrl && (
            <Link href={demoUrl}>
              <Button>See Demo</Button>
            </Link>
          )}
          {seeMoreUrl && (
            <Link href={seeMoreUrl}>
              <Button>Read this article</Button>
            </Link>
          )}
        </div>
      </div>
    </Simple>
  );
};

export default Content;
