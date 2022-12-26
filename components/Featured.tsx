import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import Double from "./elements/Double";

type Props = {
  headline: string;
  name: string;
  description: string;
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  seeMoreUrl?: string;
};

const Featured: React.FC<Props> = ({
  headline,
  name,
  description,
  image,
  githubUrl,
  demoUrl,
  seeMoreUrl
}) => {
  return (
    <Double>
      <p className="text-xl font-bold text-center large:text-left my-2 large:my-0">{headline}</p>
      <div className="flex flex-col large:flex-row items-center justify-between">
        <Image
          src={image}
          width={600}
          height={1200}
          alt={name}
          className="w-80 h-40 rounded-xl object-cover"
        />
        <div className="large:ml-8">
          <h3 className="font-bold text-center text-2xl my-2">{name}</h3>
          <p className="text-center large:text-left">{description}</p>
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
              <Button>Read More</Button>
            </Link>
          )}
        </div>
      </div>
    </Double>
  );
};

export default Featured;
