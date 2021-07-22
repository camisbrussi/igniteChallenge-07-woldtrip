import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Flex } from '@chakra-ui/react';

import { SlideItem, SliderItemProps } from './SlideItem';

import { api } from '../../services/api';

import { useEffect, useState } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const Slide = () => {
  const [continents, setContinents] = useState<SliderItemProps[]>([]);

  useEffect(() => {
    api.get<SliderItemProps[]>('continents').then((response) => {
      setContinents(response.data);
    });
  }, []);

  return (
    <Flex
      w="100%"
      maxW={1240}
      minW={1220}
      h={['250px', '450px']}
      mx="auto"
      mb={['5', '10']}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        initialSlide={0}
        color="#FFBA08"
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.slug}>
            <SlideItem
              slug={continent.slug}
              name={continent.name}
              imageUrl={continent.imageUrl}
              subtitle={continent.subtitle}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};
