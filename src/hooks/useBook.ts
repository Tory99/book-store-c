import { addReview } from './../mock/review';
import { useEffect, useState } from "react"
import { BookDetail, BookReviewItem, BookReviewItemWrite } from "../models/book.model"
import { fetchBook, likeBook, unlikeBook } from "../api/books.api";
import { useAuthStore } from "../store/authStore";
import { useAlert } from "./useAlert";
import { addCart } from "../api/carts.api";
import { addBookReview, fetchBookReview } from "@/api/review.api";
import { useToast } from './useToast';

export const useBook = (bookId: string | undefined) => {
    const [book, setBook] = useState<BookDetail | null>(null);
    const {isLoggedIn} = useAuthStore();
    const {showAlert} = useAlert();
    const [cartAdded, setCartAdded] = useState(false);
    const [reviews, setreviews] = useState<BookReviewItem[]>([])
    const {showToast} = useToast();

    const likeToggle = () => {
        if(!isLoggedIn){
            showAlert('로그인이 필요합니다.');
            return;
        }


        if(!book) return;

        if(book.liked) {
            unlikeBook(book.id).then(() =>{
                setBook({
                    ...book,
                    liked: false,
                    likes: book.likes - 1,
                });
                showToast("좋아요가 취소되었습니다.");
            });
        } else {
            likeBook(book.id).then(() =>{
                setBook({
                    ...book,
                    liked: true,
                    likes: book.likes + 1,
                });
                showToast("좋아요가 성공했습니다.");
            });
        }
    };

        const AddToCart =(quantity:number) =>{
            if(!book) return;
            
            addCart({
                book_id: book.id,
                quantity: quantity
            }).then(()=> {
                setCartAdded(true);
                setTimeout(() => {
                    setCartAdded(false);
                }, 3000);
            });
        }

    useEffect(()=>{
        if(!bookId) return;

        fetchBook(bookId).then((book) => {
            setBook(book);
        });

        fetchBookReview(bookId).then((reviews) =>{
            setreviews(reviews);
        })
    }, [bookId]);

    const addReview = (data: BookReviewItemWrite) => {
        if (!book) return;

        addBookReview(book.id.toString(), data).then((res) => {
            fetchBookReview(book.id.toString()).then((reviews) => 
            {
                setreviews(reviews);
            });
        });
    };

    return {book, likeToggle, AddToCart, reviews ,cartAdded, addReview};
}