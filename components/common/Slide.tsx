import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import IcChevronRight from "assets/icons/ic_chervon_right.svg";
import IcChevronLeft from "assets/icons/ic_chevron_left.svg";
import { twMerge } from "tailwind-merge";
import IconButton from "./IconButton";
import IcClose from "assets/icons/ic_close.svg";
import Image, { StaticImageData } from "next/image";
import { DefaultImg } from "assets/AssetUtil";
import { motion } from "framer-motion";

export type SlideComponent = {
  showSlide: (index?: number) => void;
  closeSlide: () => void;
};

interface SlideProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  images: Array<string | StaticImageData>;
  selectedIndex?: number;
  onClose?: () => void;
}
const Slide = forwardRef<SlideComponent, SlideProps>(
  (
    { children, className, onClose, images, selectedIndex = 0, ...props },
    ref
  ) => {
    const startPoint = useRef<number>(0);

    const [data, setData] = useState({
      showSlide: false,
      index: selectedIndex,
    });

    useImperativeHandle(
      ref,
      () => ({
        showSlide: (index?: number) => {
          setData({
            showSlide: true,
            index: index || 0,
          });
          document.body.style.overflow = "hidden";
        },
        closeSlide: closeSlide,
      }),
      []
    );

    const onNext = () => {
      let newIndex = data.index + 1;
      if (newIndex >= images.length) return;
      setData((prev) => ({
        ...prev,
        index: newIndex,
      }));
    };

    const closeSlide = useCallback(() => {
      setData((prev) => ({
        index: 0,
        showSlide: false,
      }));
      document.body.style.overflow = "scroll";
    }, []);

    const onBack = () => {
      let newIndex = data.index - 1;
      if (newIndex < 0) return;
      setData((prev) => ({
        ...prev,
        index: newIndex,
      }));
    };

    if (!data.showSlide) return <></>;

    console.log("render");
    return (
      <div
        {...props}
        className={twMerge(
          ` fixed inline-flex justify-center items-center top-0 left-0  w-full  z-40 h-full bg-black/75`,
          className
        )}
      >
        <div className="absolute top-3 left-3 text-white">
          {data.index + 1}/{images.length}
        </div>
        <IconButton
          onClick={onBack}
          className=" absolute z-10 bottom-10 left-5  md:top-[50%] hover:bg-black/20 hover:text-white"
        >
          <IcChevronLeft className="w-8 h-8" />
        </IconButton>
        <IconButton
          onClick={onNext}
          className="absolute z-10 bottom-10 right-5 md:top-[50%] hover:bg-black/20 hover:text-white"
        >
          <IcChevronRight className="w-8 h-8" />
        </IconButton>
        <IconButton
          onClick={closeSlide}
          className="absolute z-10 top-3 right-3 hover:bg-black/20 hover:text-white "
        >
          <IcClose className="w-4 h-4 " />
        </IconButton>

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          onPanStart={(event, info) => {
            const { x } = info.point;
            startPoint.current = x;
          }}
          onPanEnd={(event, info) => {
            const { x: end } = info.point;
            const start = startPoint.current || 0;
            if (end - start > 0) {
              // swipe left
              onBack();
            } else {
              //swipe right
              onNext();
            }
          }}
          transition={{ duration: 1 }}
          draggable={false}
          className="my-2 flex w-full md:w-[55vw]"
        >
          <Image
            src={images[data.index] || DefaultImg}
            alt="pos-pic"
            className="w-full aspect-square object-contain rounded-lg "
            draggable={false}
            width={700}
            height={700}
            blurDataURL={DefaultImg.src}
            placeholder="blur"
          />
        </motion.div>
      </div>
    );
  }
);

Slide.displayName = "Slider";
export default Slide;
