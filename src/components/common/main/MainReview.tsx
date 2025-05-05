import { BookReviewItem as IBookReviewItem } from '@/models/book.model';
import { styled } from 'styled-components';
import Slider from 'react-slick';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import BookReviewItem from '@/components/book/BookReviewItem';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {
    reviews : IBookReviewItem[];
}

function MainReview({reviews} : Props) {
    const {isMobile} = useMediaQuery();
    
    const sliderSettings = {
        dots : true,
        infinite : true,
        speed : 500,
        slideToShow : isMobile ? 1 : 3,
        slidesToScroll : isMobile ? 1 : 3,
        gap : 16,
    }
    return (
        <MainReviewStyle>
            <Slider {...sliderSettings}>
                {
                    reviews.map((review) => (
                        <BookReviewItem key={review.id} review={review} />
                    ))
                }
            </Slider>
        </MainReviewStyle>
    );
}

const MainReviewStyle = styled.div`
    padding: 0 0 24px 0;

    .slick-track {
        padding: 12px 0;
    }

    .slick-slide > div {
        margin: 0 12px;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #000;
    }

    @media screen AND (${({ theme }) => theme.mediaQuery.mobile}) {
        .slick-prev {
            left: 0;
        }

        .slick-right {
            right: 0;
        }
    }
`;

export default MainReview;