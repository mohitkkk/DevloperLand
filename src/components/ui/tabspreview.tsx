"use client";
import { StaticImageData } from "next/image"; 
import Image from "next/image";
import { Tabs } from "../ui/tabs";
import one from "../Assets/1.png";
import two from "../Assets/2.png";
import three from "../Assets/3.png";
import four from "../Assets/4.png";
import five from "../Assets/5.png";
import { LinkPreview } from "@/components/ui/link-preview";


export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <LinkPreview
          url="/templates"
          imageSrc='https://www.climate-kic.org/wp-content/uploads/2018/06/Project-X.jpg'
          isStatic
          className="font-bold text-white">
          this movie
        </LinkPreview>{" "}
        <ImageContent src={one} alt="Product Image" />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <ImageContent src={two} alt="Services Image" />
        </div>
      ),
    
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <ImageContent src={three} alt="Playground Image" />
        </div>
      ),
      
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <ImageContent src={four} alt="Content Image" />
        </div>
      ),
      src:four,
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}


const ImageContent = ({ src, alt }: { src: StaticImageData | string; alt: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={400}
      className="object-cover object-left-top mt-4 rounded-xl mx-auto"
    />
  );
};
