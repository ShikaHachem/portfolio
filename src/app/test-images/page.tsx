import Image from "next/image";

export default function TestImagesPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold">Image Test Page</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl">Sugar Deal Thumbnail</h2>
        <div className="relative h-48 w-96 border border-gray-300">
          <Image
            src="/sugar_thumbnail.png"
            alt="Sugar Deal"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p>Path: /sugar_thumbnail.png</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl">Wonderful Life Thumbnail</h2>
        <div className="relative h-48 w-96 border border-gray-300">
          <Image
            src="/wonderful_thumbnail.jpg"
            alt="Wonderful Life"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p>Path: /wonderful_thumbnail.jpg</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl">Titane Thumbnail</h2>
        <div className="relative h-48 w-96 border border-gray-300">
          <Image
            src="/Titane_thumbnail.jpg"
            alt="Titane"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p>Path: /Titane_thumbnail.jpg</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl">Vermiglio Thumbnail</h2>
        <div className="relative h-48 w-96 border border-gray-300">
          <Image
            src="/Vermiglio_thumbnail.jpg"
            alt="Vermiglio"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p>Path: /Vermiglio_thumbnail.jpg</p>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-xl">Placeholder (Should Work)</h2>
        <div className="relative h-48 w-96 border border-gray-300">
          <Image
            src="https://via.placeholder.com/800x400?text=Test+Image"
            alt="Placeholder"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p>Path: https://via.placeholder.com/800x400?text=Test+Image</p>
      </div>
    </div>
  );
} 