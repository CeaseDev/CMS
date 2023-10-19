import { Carousel, Typography, Button } from "@material-tailwind/react";
 

function Cn() {
  return (
    <Carousel className="rounded-sm overflow-y-hidden	">
    <div className="relative h-full w-full">
      <img
        src="src\assets\news1.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
        <div className="w-3/4 text-center md:w-2/4">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            The Beauty of Nature
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            It is not so much for its beauty that the forest makes a claim
            upon men&apos;s hearts, as for that subtle something, that quality
            of air that emanation from old trees, that so wonderfully changes
            and renews a weary spirit.
          </Typography>

        </div>
      </div>
    </div>
    <div className="relative h-full w-full">
      <img
        src="src\assets\news2.webp"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
        <div className="w-3/4 pl-12 text-center md:w-2/4 md:pl-20 lg:pl-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            The Beauty of Nature
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            It is not so much for its beauty that the forest makes a claim
            upon men&apos;s hearts, as for that subtle something, that quality
            of air that emanation from old trees, that so wonderfully changes
            and renews a weary spirit.
          </Typography>

        </div>
      </div>
    </div>
    <div className="relative h-full w-full">
      <img
        src="src\assets\news3.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
          <Typography
            variant="h1"
            color="white"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            The Beauty of Nature
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mb-12 opacity-80"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eos pariatur architecto quisquam asperiores labore tempore laborum laudantium vel unde.
          </Typography>
        </div>
      </div>
    </div>
  </Carousel>
  );
}

export default Cn;