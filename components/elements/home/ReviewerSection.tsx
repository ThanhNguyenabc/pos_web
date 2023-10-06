import IcRating from "assets/icons/ic_rating.svg";
import { useMediaQuery } from "hooks/useMediaQuery";
import useTrans from "hooks/useTrans";
import { Testimonial } from "models/testimonial.model";
import React, { useState, useMemo } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { twMerge } from "tailwind-merge";
import { LG_SCREEN } from "utils/constants";

interface ReviewerSectionProps {
  reviews: Array<Testimonial>;
}

const ReviewCardItem = ({
  item,
  className,
}: {
  item: Testimonial;
  className?: string;
}) => {
  const { locale } = useTrans();

  const Rating = (
    <div className="flex flex-row gap-2">
      {Array.from({ length: 5 }).map((item, index) => (
        <IcRating
          key={`item-rating${index}`}
          className="text-primary text-2xl"
        />
      ))}
    </div>
  );

  return (
    <div
      className={twMerge(
        `mt-8 w-full inline-flex text-start flex-col rounded-2xl bg-neutral-100 p-4 gap-2 sm:p-8`,
        className
      )}
    >
      {Rating}
      {item?.short_description && (
        <p className="txt-md-bold md:text-xl">
          {item.short_description?.[locale]}
        </p>
      )}
      <p className="txt-large"> {item.review?.[locale]}</p>
      <div className="flex flex-col flex-1 mt-6 sm:mt-4">
        <p className="txt-md-bold sm:text-xl">{item?.name}</p>
        <p className="txt-sm sm:text-base text-neutral-700">
          {item?.jobTitle?.[locale]}
        </p>
      </div>
    </div>
  );
};

const SwipeReviewList = ({ items }: { items: Array<React.ReactElement> }) => {
  const [currIndex, setIndex] = useState(0);
  return (
    <div className="flex flex-col">
      <Carousel
        showThumbs={false}
        showIndicators={false}
        axis="horizontal"
        className="gap-2"
        showStatus={false}
        preventMovementUntilSwipeScrollTolerance={true}
        onChange={(index) => {
          setIndex(index);
        }}
      >
        {items.map((item) => (
          <div className="p-2" key={`${item.key}`}>
            {item}
          </div>
        ))}
      </Carousel>

      <div className="flex flex-row mt-4 self-center">
        {items.map((item, index) => {
          return (
            <div
              key={`dot-${index}`}
              className={`block w-2 h-2  rounded-lg mr-2 ${
                index === currIndex ? "bg-primary" : "bg-neutral-300"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

const ReviewerSectionV2 = ({ reviews }: ReviewerSectionProps) => {
  const { screenSize } = useMediaQuery();

  const renderItem = useMemo(() => {
    const listItems: Array<React.ReactElement> = [];

    reviews.forEach((item, index) => {
      listItems.push(
        <ReviewCardItem item={item} key={`${item.jobTitle}-${item.name}`} />
      );
    });
    return listItems;
  }, [reviews]);

  if (screenSize >= LG_SCREEN)
    return <div className="columns-2 gap-x-8">{renderItem}</div>;

  return (
    <>
      <SwipeReviewList items={renderItem} />
    </>
  );
};

export default ReviewerSectionV2;
