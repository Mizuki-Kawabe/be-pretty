"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BeauticianCardProps {
  data: any;
}

const BeauticianCard: React.FC<BeauticianCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="card w-[300px] bg-white cursor-pointer"
      onClick={() => router.push(`/beautician/${data.id}`)}
    >
      <figure className="mt-4">
        <Image
          src={data.img}
          alt="beautician image"
          width={150}
          height={150}
          className="rounded-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title m-auto">{data.name}</h2>
        <p className="line-clamp-3">{data.profile}</p>
        <button className="rounded-full bg-blue border-none flex flex-col py-2">
          <div className="text-white font-normal leading-snug m-auto line-clamp-1 max-w-[200px]">
            {data.program}
          </div>
          <div className="text-white flex flex-col gap-1 w-full">
            <div className="text-white m-auto">
              {data.duration}mins/${data.price}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BeauticianCard;
